import React, { useRef, useState } from "react";
import videos from "../data/videos.json";
import "../App.css";

const youtubeChannel = "https://www.youtube.com/@VickyModi123";
const labVideos = videos.filter((video) => video.labExperiment);
const videoFilters = [
  { id: "all", label: "All videos" },
  { id: "lab", label: "Lab experiments" },
  { id: "projects", label: "Projects & study" },
];

function formatDate(date) {
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

function Videos() {
  const [filter, setFilter] = useState("all");
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const videoFeatureRef = useRef(null);

  const filteredVideos = videos.filter((video) => {
    if (filter === "lab") return video.labExperiment;
    if (filter === "projects") return !video.labExperiment;
    return true;
  });

  const changeFilter = (nextFilter) => {
    setFilter(nextFilter);
    const nextVideos = videos.filter((video) => {
      if (nextFilter === "lab") return video.labExperiment;
      if (nextFilter === "projects") return !video.labExperiment;
      return true;
    });
    if (!nextVideos.some((video) => video.id === activeVideo.id)) {
      setActiveVideo(nextVideos[0]);
    }
  };

  const selectVideo = (video) => {
    setActiveVideo(video);
    videoFeatureRef.current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <div className="videos-page">
      <header className="videos-intro">
        <p className="eyebrow">Learning in public <span className="eyebrow-divider">/</span> YouTube</p>
        <h1>Experiments, studies, and small builds.</h1>
        <p>Lab experiments, technical study notes, and project videos, collected from my YouTube channel.</p>
      </header>

      <section className="video-feature" id="video-player" ref={videoFeatureRef} tabIndex={-1} aria-labelledby="active-video-title">
        <div className="video-player">
          <button
            className="video-move-handle"
            type="button"
            data-layout-handle
            aria-label="Drag video player"
            title="Drag to reposition the video player"
          >
            <span aria-hidden="true">⠿</span>
            <span>Move player</span>
          </button>
          <iframe
            key={activeVideo.id}
            src={`https://www.youtube.com/embed/${activeVideo.id}?rel=0`}
            title={activeVideo.title}
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="video-feature-details">
          <p className="eyebrow">{activeVideo.labExperiment ? "Lab Experiment Series" : activeVideo.category}</p>
          <h2 id="active-video-title">{activeVideo.title}</h2>
          <p className="video-date">{formatDate(activeVideo.published)} <span>· Loaded in player</span></p>
          <p className="video-description">{activeVideo.description}</p>
          <a className="videos-channel-link" href={activeVideo.url} target="_blank" rel="noopener noreferrer">
            Watch on YouTube <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="video-library" aria-labelledby="video-library-title">
        <div className="video-library-heading">
          <div>
            <p className="eyebrow">{filteredVideos.length} uploads</p>
            <h2 id="video-library-title">Video library</h2>
          </div>
          <div className="video-filters" role="group" aria-label="Filter videos">
            {videoFilters.map((videoFilter) => (
              <button
                className={filter === videoFilter.id ? "video-filter is-active" : "video-filter"}
                type="button"
                aria-pressed={filter === videoFilter.id}
                key={videoFilter.id}
                onClick={() => changeFilter(videoFilter.id)}
              >
                {videoFilter.label}
                <span>{videoFilter.id === "all" ? videos.length : videoFilter.id === "lab" ? labVideos.length : videos.length - labVideos.length}</span>
              </button>
            ))}
          </div>
        </div>
        <p className="video-library-hint">Choose a video to load it in the player above, then press play.</p>

        <div className="video-grid">
          {filteredVideos.map((video) => (
            <button
              className={activeVideo.id === video.id ? "video-card is-active" : "video-card"}
              type="button"
              aria-pressed={activeVideo.id === video.id}
              aria-label={`${video.title}. ${activeVideo.id === video.id ? "Loaded in player" : "Load in player"}`}
              key={video.id}
              onClick={() => selectVideo(video)}
            >
              <span className="video-thumbnail">
                <img src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt="" loading="lazy" />
                <span className="video-play" aria-hidden="true">▶</span>
              </span>
              <span className="video-card-details">
                <span className="video-card-meta">
                  <span>{video.labExperiment ? "Lab experiment" : video.category}</span>
                  <time dateTime={video.published}>{formatDate(video.published)}</time>
                </span>
                <span className="video-card-title">{video.title}</span>
                <span className="video-card-description">{video.description}</span>
                <span className="video-card-action" aria-hidden="true">
                  {activeVideo.id === video.id ? "Loaded above" : "Load in player"}
                  <span>↗</span>
                </span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <a className="videos-channel-link videos-channel-footer" href={youtubeChannel} target="_blank" rel="noopener noreferrer">
        Visit Vicky Modi on YouTube <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}

export default Videos;