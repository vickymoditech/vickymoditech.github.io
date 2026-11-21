import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

const itemSelector = [
  "a[href]",
  "button",
  "input",
  "select",
  "textarea",
  "iframe",
  "img",
  "figure",
  "article",
  "section",
  "header",
  "footer",
  "nav",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "li",
  ".video-player",
].join(",");

const focusableSelector = "a[href],button,input,select,textarea,iframe,[tabindex]";
const keyboardItemSelector = `${focusableSelector},img,figure,article,section,header,footer,nav,h1,h2,h3,h4,h5,h6,p,li`;
const movementStep = 10;
const tourSteps = [
  {
    path: "/",
    selector: ".hero-copy",
    title: "Everything is draggable",
    description: "Move text, photos, cards, and controls freely. A click without a drag still works as usual.",
  },
  {
    path: "/",
    selector: ".hero-portrait-wrap",
    title: "Move the profile photo",
    description: "The portrait can move independently from the introduction. Drag it wherever you like.",
  },
  {
    path: "/",
    selector: ".nav-links",
    title: "Navigation still works",
    description: "Rearrange the links, or click one to visit that part of the portfolio.",
  },
  {
    path: "/",
    selector: ".featured-section",
    title: "Explore selected work",
    description: "Project cards can move as a whole, or you can move their images and text separately.",
  },
  {
    path: "/projects",
    selector: ".project-row:first-child",
    title: "Browse every project",
    description: "Project rows, screenshots, descriptions, and links are all movable items.",
  },
  {
    path: "project-detail",
    selector: ".detail-intro",
    title: "Open a project",
    description: "Project details are part of the playground too. Move the introduction or any section independently.",
  },
  {
    path: "project-detail",
    selector: ".detail-content",
    title: "Arrange the details",
    description: "Move implementation notes, screenshots, and headings across the page or let them overlap.",
  },
  {
    path: "/videos",
    selector: ".videos-intro",
    title: "Visit the video lab",
    description: "The video page follows the same rules: drag items, or use normal clicks to interact.",
  },
  {
    path: "/videos",
    selector: ".video-move-handle",
    title: "Reposition the video",
    description: "Use the Move player handle over the embedded player, which keeps its own controls clickable.",
  },
  {
    path: "/videos",
    selector: ".video-library",
    title: "Browse and play",
    description: "Move video cards around. Click a filter or card to use it normally.",
  },
  {
    path: "/videos",
    selector: ".site-footer",
    title: "The footer is yours too",
    description: "Contact details and footer links can move independently. Refresh the page to restore the original layout.",
  },
];

function getTourPath(step, currentPath) {
  if (step.path === "project-detail") {
    return currentPath.startsWith("/projectDetail/") ? currentPath : "/projectDetail/14";
  }
  return step.path;
}

function getTourStartIndex(pathname) {
  if (pathname === "/projects") return 4;
  if (pathname.startsWith("/projectDetail/")) return 5;
  if (pathname === "/videos") return 7;
  return 0;
}

function getItemIdentity(element, duplicateIndex) {
  const className =
    typeof element.className === "string" ? element.className : element.className?.baseVal;
  const identity =
    element.id ||
    element.getAttribute("aria-label") ||
    element.getAttribute("href") ||
    element.getAttribute("src") ||
    element.textContent.trim().replace(/\s+/g, " ").slice(0, 100) ||
    className ||
    element.tagName.toLowerCase();

  return `${element.tagName.toLowerCase()}:${identity}:${duplicateIndex}`;
}

function LayoutPlayground() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [tourStep, setTourStep] = useState(-1);
  const [tourPosition, setTourPosition] = useState(null);
  const [status, setStatus] = useState("");
  const coachmarkRef = useRef(null);
  const tourStarted = useRef(false);
  const expectedTourPath = useRef(null);
  const activePointer = useRef(null);
  const suppressClick = useRef(false);
  const suppressClickTarget = useRef(null);
  const suppressClickTimer = useRef(null);
  const positionsByPage = useRef(new Map());
  const keyboardMoved = useRef(false);

  const activeTourStep = tourStep >= 0 ? tourSteps[tourStep] : null;

  const goToTourStep = useCallback((nextStep) => {
    if (nextStep < 0 || nextStep >= tourSteps.length) {
      expectedTourPath.current = null;
      setTourStep(-1);
      setTourPosition(null);
      return;
    }

    const nextPath = getTourPath(tourSteps[nextStep], pathname);
    expectedTourPath.current = nextPath;
    setTourPosition(null);
    setTourStep(nextStep);
    if (pathname !== nextPath) navigate(nextPath);
  }, [navigate, pathname]);

  const startTour = useCallback(() => goToTourStep(getTourStartIndex(pathname)), [goToTourStep, pathname]);

  useLayoutEffect(() => {
    if (pathname === "/resume" || tourStarted.current) return;
    tourStarted.current = true;
    startTour();
  }, [pathname, startTour]);

  useLayoutEffect(() => {
    if (!activeTourStep) {
      setTourPosition(null);
      return undefined;
    }

    const targetPath = getTourPath(activeTourStep, pathname);
    if (pathname !== targetPath) {
      if (expectedTourPath.current !== targetPath) {
        expectedTourPath.current = null;
        setTourStep(-1);
        setTourPosition(null);
      }
      return undefined;
    }
    expectedTourPath.current = null;

    const target = document.querySelector(activeTourStep.selector);
    if (!target) {
      console.error(`Portfolio tour target not found: ${activeTourStep.selector}`);
      setTourStep(-1);
      setTourPosition(null);
      return undefined;
    }

    const previousTourTarget = target.getAttribute("data-tour-target");
    target.setAttribute("data-tour-target", "true");

    const updatePosition = () => {
      const bounds = target.getBoundingClientRect();
      const width = Math.min(320, window.innerWidth - 32);
      const height = coachmarkRef.current?.getBoundingClientRect().height || 220;
      const gap = 14;
      const edge = 16;
      const rightSpace = window.innerWidth - bounds.right;
      const leftSpace = bounds.left;
      let left;
      let top;

      if (rightSpace >= width + gap + edge) {
        left = bounds.right + gap;
        top = bounds.top + bounds.height / 2 - height / 2;
      } else if (leftSpace >= width + gap + edge) {
        left = bounds.left - width - gap;
        top = bounds.top + bounds.height / 2 - height / 2;
      } else {
        left = bounds.left + bounds.width / 2 - width / 2;
        top = bounds.bottom + gap + height <= window.innerHeight - edge
          ? bounds.bottom + gap
          : bounds.top - gap - height;
      }

      left = Math.max(edge, Math.min(left, window.innerWidth - width - edge));
      top = Math.max(edge, Math.min(top, window.innerHeight - height - edge));
      setTourPosition({ left, top, width });
    };

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "center",
      inline: "nearest",
    });
    updatePosition();
    const frame = window.requestAnimationFrame(updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);
    const resizeObserver = new ResizeObserver(updatePosition);
    resizeObserver.observe(target);

    return () => {
      if (previousTourTarget === null) target.removeAttribute("data-tour-target");
      else target.setAttribute("data-tour-target", previousTourTarget);
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
      resizeObserver.disconnect();
    };
  }, [activeTourStep, pathname]);

  useLayoutEffect(() => {
    if (pathname === "/resume") return undefined;

    let positions = positionsByPage.current.get(pathname);
    if (!positions) {
      positions = new Map();
      positionsByPage.current.set(pathname, positions);
    }

    const originalAttributes = new Map();
    const appliedPositions = new WeakMap();
    let highestZIndex = 10;
    positions.forEach((position) => {
      highestZIndex = Math.max(highestZIndex, position.zIndex || 10);
    });

    const rememberOriginalAttributes = (element) => {
      if (originalAttributes.has(element)) return;
      originalAttributes.set(element, {
        key: element.getAttribute("data-layout-key"),
        tabindex: element.getAttribute("tabindex"),
        translate: element.style.translate,
        zIndex: element.style.zIndex,
      });
    };

    const prepareItems = () => {
      const shell = document.querySelector(".site-shell");
      if (!shell) return;

      const occurrences = new Map();
      shell.querySelectorAll(itemSelector).forEach((element) => {
        rememberOriginalAttributes(element);

        const previousIdentity = element.getAttribute("data-layout-key");
        const baseIdentity = getItemIdentity(element, 0).replace(/:0$/, "");
        const duplicateIndex = occurrences.get(baseIdentity) || 0;
        occurrences.set(baseIdentity, duplicateIndex + 1);
        const identity = getItemIdentity(element, duplicateIndex);
        element.setAttribute("data-layout-key", identity);

        if (element.matches(keyboardItemSelector) && !element.matches(focusableSelector)) {
          element.setAttribute("tabindex", "0");
        }

        const position = positions.get(identity);
        if (
          position &&
          (previousIdentity !== identity || appliedPositions.get(element) !== identity)
        ) {
          element.style.translate = `${position.x}px ${position.y}px`;
          element.style.zIndex = String(position.zIndex);
          appliedPositions.set(element, identity);
        }
      });
    };

    const rememberPositions = () => {
      document.querySelectorAll(".site-shell [data-layout-key]").forEach((element) => {
        const translate = element.style.translate;
        if (!translate || translate === "none") return;
        const [x, y] = translate.split(" ").map((value) => Number.parseFloat(value));
        if (!Number.isFinite(x) || !Number.isFinite(y)) return;

        positions.set(element.getAttribute("data-layout-key"), {
          x,
          y,
          zIndex: Number.parseFloat(element.style.zIndex) || 10,
        });
      });
      setStatus("Position moved. Refresh the page to restore the original layout.");
    };

    const bringToFront = (item) => {
      highestZIndex += 1;
      item.style.zIndex = String(highestZIndex);
    };

    const getLayoutItem = (target) => {
      if (!(target instanceof Element)) return null;
      const handle = target.closest("[data-layout-handle]");
      if (handle) {
        const container = handle.closest(".video-player");
        return container && container.closest(".site-shell") ? container : null;
      }
      const item = target.closest("[data-layout-key]");
      return item && item.closest(".site-shell") ? item : null;
    };

    let hoveredItem = null;
    const updateHoveredItem = (target) => {
      const nextItem = getLayoutItem(target);
      if (nextItem === hoveredItem) return;
      hoveredItem?.removeAttribute("data-layout-hovered");
      hoveredItem = nextItem;
      hoveredItem?.setAttribute("data-layout-hovered", "true");
    };

    const onPointerOver = (event) => {
      if (event.pointerType !== "touch") updateHoveredItem(event.target);
    };

    const onPointerOut = (event) => {
      if (event.pointerType !== "touch") updateHoveredItem(event.relatedTarget);
    };

    const startPointerDrag = (item, event, pointerId = event.pointerId, pointerType = "pointer") => {
      const [x = 0, y = 0] = (item.style.translate || "0px 0px")
        .split(" ")
        .map((value) => Number.parseFloat(value));
      activePointer.current = {
        item,
        pointerId,
        pointerType,
        startX: event.clientX,
        startY: event.clientY,
        initialX: Number.isFinite(x) ? x : 0,
        initialY: Number.isFinite(y) ? y : 0,
        moved: false,
      };
    };

    const onPointerDown = (event) => {
      if (activePointer.current || event.pointerType === "touch" || event.button > 0) return;
      const item = getLayoutItem(event.target);
      if (item) startPointerDrag(item, event);
    };

    const onTouchStart = (event) => {
      if (activePointer.current || event.touches.length !== 1) return;
      const item = getLayoutItem(event.target);
      if (!item) return;

      const touch = event.touches[0];
      const pending = {
        item,
        identifier: touch.identifier,
        startX: touch.clientX,
        startY: touch.clientY,
      };
      activePointer.current = { pending };
      pending.timer = window.setTimeout(() => {
        if (activePointer.current?.pending !== pending) return;
        startPointerDrag(
          item,
          { clientX: pending.startX, clientY: pending.startY },
          pending.identifier,
          "touch"
        );
      }, 350);
    };

    const onTouchMove = (event) => {
      const drag = activePointer.current;
      if (!drag) return;
      const touch = Array.from(event.touches).find((item) =>
        drag.pending
          ? item.identifier === drag.pending.identifier
          : item.identifier === drag.pointerId
      );
      if (!touch) return;

      if (drag.pending) {
        if (Math.hypot(touch.clientX - drag.pending.startX, touch.clientY - drag.pending.startY) >= 8) {
          window.clearTimeout(drag.pending.timer);
          activePointer.current = null;
        }
        return;
      }

      if (drag.pointerType !== "touch") return;
      const deltaX = touch.clientX - drag.startX;
      const deltaY = touch.clientY - drag.startY;
      event.preventDefault();
      if (!drag.moved) bringToFront(drag.item);
      drag.moved = true;
      drag.item.style.translate = `${drag.initialX + deltaX}px ${drag.initialY + deltaY}px`;
      appliedPositions.set(drag.item, drag.item.getAttribute("data-layout-key"));
    };

    const preventNextClick = (item) => {
      suppressClick.current = true;
      suppressClickTarget.current = item;
      window.clearTimeout(suppressClickTimer.current);
      suppressClickTimer.current = window.setTimeout(() => {
        suppressClick.current = false;
        suppressClickTarget.current = null;
      }, 500);
    };

    const onPointerMove = (event) => {
      const drag = activePointer.current;
      if (!drag || drag.pending || drag.pointerType === "touch" || drag.pointerId !== event.pointerId) return;

      const deltaX = event.clientX - drag.startX;
      const deltaY = event.clientY - drag.startY;
      if (!drag.moved && Math.hypot(deltaX, deltaY) < 4) return;

      event.preventDefault();
      if (!drag.moved) bringToFront(drag.item);
      drag.moved = true;
      drag.item.style.translate = `${drag.initialX + deltaX}px ${drag.initialY + deltaY}px`;
      appliedPositions.set(drag.item, drag.item.getAttribute("data-layout-key"));
    };

    const onPointerUp = (event) => {
      if (event.pointerType === "touch") return;
      const drag = activePointer.current;
      if (!drag) return;
      if (drag.pending) {
        window.clearTimeout(drag.pending.timer);
        activePointer.current = null;
        return;
      }
      if (drag.pointerId !== event.pointerId) return;

      activePointer.current = null;
      if (drag.moved) {
        rememberPositions();
        preventNextClick(drag.item);
      }
    };

    const onTouchEnd = (event) => {
      const drag = activePointer.current;
      if (!drag) return;
      if (drag.pending) {
        window.clearTimeout(drag.pending.timer);
        activePointer.current = null;
        return;
      }
      if (drag.pointerType !== "touch" || !Array.from(event.changedTouches).some((touch) => touch.identifier === drag.pointerId)) return;

      activePointer.current = null;
      if (drag.moved) {
        rememberPositions();
        preventNextClick(drag.item);
      }
    };

    const onPointerCancel = (event) => {
      if (event?.pointerType === "touch") return;
      if (activePointer.current?.moved) rememberPositions();
      if (activePointer.current?.pending) {
        window.clearTimeout(activePointer.current.pending.timer);
      }
      activePointer.current = null;
    };

    const onClickCapture = (event) => {
      if (!suppressClick.current) return;
      const clickedItem = getLayoutItem(event.target);
      const movedItem = suppressClickTarget.current;
      suppressClick.current = false;
      suppressClickTarget.current = null;
      window.clearTimeout(suppressClickTimer.current);
      if (
        !clickedItem ||
        !movedItem ||
        (clickedItem !== movedItem && !clickedItem.contains(movedItem) && !movedItem.contains(clickedItem))
      ) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
    };

    const onKeyDown = (event) => {
      if (!event.altKey) return;
      const item = getLayoutItem(event.target);
      if (!item) return;

      const directions = {
        ArrowLeft: [-1, 0],
        ArrowRight: [1, 0],
        ArrowUp: [0, -1],
        ArrowDown: [0, 1],
      };
      const direction = directions[event.key];
      if (!direction) return;

      event.preventDefault();
      const [x = 0, y = 0] = (item.style.translate || "0px 0px")
        .split(" ")
        .map((value) => Number.parseFloat(value));
      const step = event.shiftKey ? movementStep * 5 : movementStep;
      item.style.translate = `${(Number.isFinite(x) ? x : 0) + direction[0] * step}px ${(Number.isFinite(y) ? y : 0) + direction[1] * step}px`;
      bringToFront(item);
      appliedPositions.set(item, item.getAttribute("data-layout-key"));
      positions.set(item.getAttribute("data-layout-key"), {
        x: (Number.isFinite(x) ? x : 0) + direction[0] * step,
        y: (Number.isFinite(y) ? y : 0) + direction[1] * step,
        zIndex: Number.parseFloat(item.style.zIndex) || 10,
      });
      keyboardMoved.current = true;
    };

    const onKeyUp = (event) => {
      if (event.key !== "Alt" || !keyboardMoved.current) return;
      keyboardMoved.current = false;
      setStatus("Position moved. Refresh the page to restore the original layout.");
    };

    const onDragStart = (event) => {
      if (getLayoutItem(event.target)) event.preventDefault();
    };

    prepareItems();
    const observer = new MutationObserver(prepareItems);
    const shell = document.querySelector(".site-shell");
    if (shell) observer.observe(shell, { childList: true, subtree: true });

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);
    document.addEventListener("pointermove", onPointerMove, { passive: false });
    document.addEventListener("pointerup", onPointerUp);
    document.addEventListener("pointercancel", onPointerCancel);
    document.addEventListener("touchstart", onTouchStart);
    document.addEventListener("touchmove", onTouchMove, { passive: false });
    document.addEventListener("touchend", onTouchEnd);
    document.addEventListener("touchcancel", onPointerCancel);
    document.addEventListener("click", onClickCapture, true);
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
    document.addEventListener("dragstart", onDragStart);

    return () => {
      observer.disconnect();
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("pointercancel", onPointerCancel);
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
      document.removeEventListener("touchcancel", onPointerCancel);
      document.removeEventListener("click", onClickCapture, true);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
      document.removeEventListener("dragstart", onDragStart);
      onPointerCancel();
      hoveredItem?.removeAttribute("data-layout-hovered");
      window.clearTimeout(suppressClickTimer.current);
      suppressClick.current = false;
      suppressClickTarget.current = null;
      originalAttributes.forEach((original, element) => {
        if (original.key === null) element.removeAttribute("data-layout-key");
        else element.setAttribute("data-layout-key", original.key);
        if (original.tabindex === null) element.removeAttribute("tabindex");
        else element.setAttribute("tabindex", original.tabindex);
        element.style.translate = original.translate;
        element.style.zIndex = original.zIndex;
      });
    };
  }, [pathname]);

  if (pathname === "/resume") return null;

  return (
    <>
      {activeTourStep && tourPosition && (
        <div
          className="tour-coachmark"
          style={{ left: tourPosition.left, top: tourPosition.top, width: tourPosition.width }}
        >
          <section className="tour-card" ref={coachmarkRef} aria-labelledby="tour-step-title">
            <div className="tour-card-heading">
              <p>PORTFOLIO TOUR <span>{tourStep + 1} / {tourSteps.length}</span></p>
              <button type="button" className="tour-skip-button" onClick={() => goToTourStep(-1)}>
                Skip tour
              </button>
            </div>
            <h2 id="tour-step-title">{activeTourStep.title}</h2>
            <p className="tour-card-description">{activeTourStep.description}</p>
            <div className="tour-card-actions">
              <button
                type="button"
                className="tour-back-button"
                disabled={tourStep === 0}
                onClick={() => goToTourStep(tourStep - 1)}
              >
                Back
              </button>
              <button
                type="button"
                className="tour-next-button"
                onClick={() => goToTourStep(tourStep + 1)}
              >
                {tourStep === tourSteps.length - 1 ? "Finish" : "Next"}
                {tourStep < tourSteps.length - 1 && <span aria-hidden="true"> →</span>}
              </button>
            </div>
          </section>
        </div>
      )}
      <p className="visually-hidden" role="status" aria-live="polite">{status}</p>
    </>
  );
}

export default LayoutPlayground;
