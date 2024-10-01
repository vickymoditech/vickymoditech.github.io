const projects = [
  {
    id: 1,
    title: "Resto 365: Admin Panel for Restaurant Management",
    logo: "/img/gyg/resto-365.jpg",
    description:
      "The Guzman y Gomez Admin Panel is a robust web application designed to streamline restaurant management operations. This intuitive interface allows administrators to efficiently manage restaurant profiles, menus, and service options, ensuring a seamless experience for both staff and customers.",
    companyName: "Guzman Y Gomez",
    companySite: "https://www.guzmanygomez.com/",
    workLogo: "/img/gyg/gyg.png",
    data: [
      {
        heading: "Restaurant Management",
        bullets: [
          "Add and edit restaurant profiles, including details like location, operating hours, and contact information.",
          "Manage multiple restaurant locations under one account for centralized oversight.",
        ],
      },
      {
        heading: "Menu Management",
        bullets: [
          "Create and modify menus for breakfast, lunch, and dinner.",
          "Add individual items with detailed descriptions, pricing, and dietary information to enhance customer engagement.",
          "Categorize menu items into specific sections, such as appetizers, mains, and desserts, for easy navigation.",
        ],
      },
      {
        heading: "Service Management",
        bullets: [
          "Enable or disable various service options such as delivery, pickup, and table service to adapt to operational needs.",
          "Manage service availability based on restaurant hours or special events.",
        ],
      },
      {
        heading: "Equipment Management",
        bullets: [
          "Keep track of essential kitchen equipment, including liquor storage, fryers, quesadilla makers, ice machines, coffee machines, soft serve machines, and gas types.",
          "Monitor the status and maintenance schedules of these machines to ensure optimal performance.",
        ],
      },
      {
        heading: "History Log Management",
        bullets: [
          "Maintain a comprehensive history log that records changes made within the admin panel, including additions, modifications, and deletions.",
          "Access historical data to review past menu changes, service status updates, and equipment management actions for better decision-making.",
        ],
      },
    ],
    technologies: [
      "React Js",
      "Javascript",
      "Postgress",
      "Node Js",
      "Express Js",
      "Material Ui",
    ],
    images: [
      {
        src: "/img/gyg/Resto_list.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/gyg/resto_profile.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/gyg/user_list.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/gyg/history_log.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/gyg/menu_management.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/gyg/equipment.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/gyg/trading_hours.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/gyg/customer_support.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/gyg/img1.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/gyg/img2.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/gyg/img3.png",
        alt: "Description of image 3",
      },
    ],
    link: "https://resto365.prod.ops.gyg.com.au/",
  },
  {
    id: 2,
    title: "CREAT: Restaurant Reservation",
    logo: "/img/creat/customer/CE_Logo.png",
    description:
      "Our restaurant reservation app offers a seamless and user-friendly experience, allowing diners to easily book tables for breakfast, lunch, or dinner. With a few taps, users can discover and reserve their favorite restaurants, making dining out a breeze.",
    companyName: "Freelance",
    companySite: "https://creat.sg/",
    workLogo: "/img/capauth/freelance.png",
    data: [
      {
        heading: "Customer Side",
        bullets: [
          "Intuitive Booking Process: Users can easily select their preferred date, time, and party size for their reservation.",
          "Meal-Specific Options: The app caters to different dining experiences by offering separate booking options for breakfast, lunch, and dinner.",
          "Real-Time Availability: Users can view up-to-date table availability, ensuring they can make informed decisions about their reservations.",
          "Special Requests: A feature allowing users to note any special requirements or preferences when making a reservation.",
          "Confirmation System: Automatic confirmation emails or SMS messages are sent to users upon successful booking.",
        ],
      },
      {
        heading: "Admin Side",
        bullets: [
          "Reservation Dashboard: A comprehensive view of all current and upcoming reservations, sortable by date, time, and party size.",
          "Table Management: Ability to assign and reassign tables based on party size and restaurant layout.",
          "Customer Database: A database storing customer information, reservation history, and preferences for personalized service.",
          "Customizable Settings: Options to set restaurant capacity, opening hours, and special event dates.",
          "Reporting Tools: Analytics and reporting tools to track reservation trends, peak hours, and revenue generated.",
          "Staff Management: Assign roles and permissions to different staff members for using the admin interface.",
        ],
      },
    ],
    technologies: [
      "React Js",
      "Javascript",
      "Postgress",
      "Node Js",
      "Express Js",
      "Material Ui",
    ],
    images: [
      {
        src: "/img/creat/admin/CA1.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/creat/admin/CA2.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/creat/admin/CA3.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/creat/admin/CA4.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/creat/customer/CC1.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/creat/customer/CC2.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/creat/customer/CCP3.png",
        alt: "Description of image 3",
      },
    ],
    link: "https://creat.sg/",
  },
  {
    id: 3,
    title: "Capauth: Django SSO Backend",
    logo: "/img/capauth/capabara.png",
    description:
      "Capabara is a comprehensive organisation and user management system designed to facilitate efficient handling of multi-organisational structures, user access controls, and subscription management. The system provides a robust framework for creating, managing, and navigating complex organisational hierarchies while maintaining granular control over user permissions and access.",
    companyName: "Freelance",
    companySite: "https://capauth-staging.theadventus.com/",
    workLogo: "/img/capauth/freelance.png",
    data: [
      {
        heading: "Organisation Management",
        bullets: [
          "All users can view all organisations, with potential for future modifications to restrict visibility.",
          "Users can create new organisations, automatically becoming admins of the organisations they create.",
          "New users are initially assigned to a default organisation before creating or joining others.",
          "Only the creator of an organisation can edit or delete it.",
        ],
      },
      {
        heading: "User Management",
        bullets: [
          "Users within an organisation can access information about other users in the same organisation.",
          "Check if the new user belongs to the same company, verify if the user already exists, and manage organisation assignments.",
          "Users need to register in Cap-ai and other integrated systems.",
          "Only admins or the user themselves can edit or delete user information.",
        ],
      },
    ],
    technologies: [
      "React Js",
      "Javascript",
      "Postgress",
      "Node Js",
      "Express Js",
      "Material Ui",
    ],
    images: [],
    link: "https://capauth-staging.theadventus.com/",
  },
  {
    id: 4,
    title: "Lucky Minute : The One Minute Gaming App",
    logo: "/img/lucky-minute/Logo.svg",
    description:
      "Join Lucky Minute, the exhilarating online gaming platform where you can dive into thrilling rounds of Baccarat, Roulette, and Sic Bo! After a quick verification, you'll be randomly placed in groups to enjoy fast-paced, one-minute gameplay. Discover if you’ve won or lost in just a minute!",
    companyName: "Freelance",
    companySite: "https://lucky-minute.com/",
    workLogo: "/img/capauth/freelance.png",
    data: [
      {
        heading: "Frontend",
        bullets: [
          "One-Minute Rounds: Experience the thrill with fast gameplay.",
          "Instant Results: See if you’ve won or lost right after each round",
          "Random Group Play: Join different players for a fresh experience each time.",
          "Simple Verification: Quick and easy process to get started.",
          "User-Friendly Design: Navigate seamlessly on any device.",
          "Secure Gaming: Enjoy a safe and protected environment.",
          "Real-Time Player Interaction: Engage with others while you play.",
          "Mobile Friendly: Play anytime, anywhere on your mobile device.",
          "Exciting Rewards: Win bonuses based on your performance.",
          "Engaging Experience: Feel the rush of every game with every round!",
        ],
      },
    ],
    technologies: [
      "React Js",
      "Javascript",
      "Postgress",
      "Node Js",
      "Express Js",
      "Material Ui",
    ],
    images: [
      {
        src: "/img/lucky-minute/img0.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/lucky-minute/img10.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/lucky-minute/img11.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/lucky-minute/img12.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/lucky-minute/img1.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/lucky-minute/img8.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/lucky-minute/img9.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/lucky-minute/img7.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/lucky-minute/img2.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/lucky-minute/img3.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/lucky-minute/img4.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/lucky-minute/img5.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/lucky-minute/img6.png",
        alt: "Description of image 3",
      },
    ],
    link: "https://lucky-minute.com/",
  },
  {
    id: 5,
    title: "ORDRSTARTR : Facebook Live Selling System",
    logo: "/img/live-order/logo.png",
    description:
      "Our restaurant reservation app offers a seamless and user-friendly experience, allowing diners to easily book tables for breakfast, lunch, or dinner. With a few taps, users can discover and reserve their favorite restaurants, making dining out a breeze.",
    companyName: "Freelance",
    companySite: "https://ordrstartr-frontend.vercel.app/",
    workLogo: "/img/capauth/freelance.png",
    data: [
      {
        heading: "Customer Side",
        bullets: [
          "Intuitive Booking Process: Users can easily select their preferred date, time, and party size for their reservation.",
          "Meal-Specific Options: The app caters to different dining experiences by offering separate booking options for breakfast, lunch, and dinner.",
          "Real-Time Availability: Users can view up-to-date table availability, ensuring they can make informed decisions about their reservations.",
          "Special Requests: A feature allowing users to note any special requirements or preferences when making a reservation.",
          "Confirmation System: Automatic confirmation emails or SMS messages are sent to users upon successful booking.",
        ],
      },
      {
        heading: "Admin Side",
        bullets: [
          "Reservation Dashboard: A comprehensive view of all current and upcoming reservations, sortable by date, time, and party size.",
          "Table Management: Ability to assign and reassign tables based on party size and restaurant layout.",
          "Customer Database: A database storing customer information, reservation history, and preferences for personalized service.",
          "Customizable Settings: Options to set restaurant capacity, opening hours, and special event dates.",
          "Reporting Tools: Analytics and reporting tools to track reservation trends, peak hours, and revenue generated.",
          "Staff Management: Assign roles and permissions to different staff members for using the admin interface.",
        ],
      },
    ],
    technologies: [
      "React Js",
      "Javascript",
      "Postgress",
      "Node Js",
      "Express Js",
      "Material Ui",
    ],
    images: [
      {
        src: "/img/live-order/img0.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/live-order/img1.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/live-order/img8.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/live-order/img9.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/live-order/img7.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/live-order/img2.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/live-order/img3.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/live-order/img4.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/live-order/img5.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/live-order/img6.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/live-order/Fb1.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/live-order/fb2.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/live-order/fb3.png",
        alt: "Description of image 3",
      },
    ],
    link: "https://ordrstartr-frontend.vercel.app/",
  },
  {
    id: 6,
    title: "NEEMIYA : Effective Lead Generation Platform",
    logo: "/img/neemiya/logo.png",
    description:
      "Our restaurant reservation app offers a seamless and user-friendly experience, allowing diners to easily book tables for breakfast, lunch, or dinner. With a few taps, users can discover and reserve their favorite restaurants, making dining out a breeze.",
    companyName: "Freelance",
    companySite: "https://neemiya.com/",
    workLogo: "/img/capauth/freelance.png",
    data: [
      {
        heading: "Customer Side",
        bullets: [
          "Intuitive Booking Process: Users can easily select their preferred date, time, and party size for their reservation.",
          "Meal-Specific Options: The app caters to different dining experiences by offering separate booking options for breakfast, lunch, and dinner.",
          "Real-Time Availability: Users can view up-to-date table availability, ensuring they can make informed decisions about their reservations.",
          "Special Requests: A feature allowing users to note any special requirements or preferences when making a reservation.",
          "Confirmation System: Automatic confirmation emails or SMS messages are sent to users upon successful booking.",
        ],
      },
      {
        heading: "Admin Side",
        bullets: [
          "Reservation Dashboard: A comprehensive view of all current and upcoming reservations, sortable by date, time, and party size.",
          "Table Management: Ability to assign and reassign tables based on party size and restaurant layout.",
          "Customer Database: A database storing customer information, reservation history, and preferences for personalized service.",
          "Customizable Settings: Options to set restaurant capacity, opening hours, and special event dates.",
          "Reporting Tools: Analytics and reporting tools to track reservation trends, peak hours, and revenue generated.",
          "Staff Management: Assign roles and permissions to different staff members for using the admin interface.",
        ],
      },
    ],
    technologies: [
      "React Js",
      "Javascript",
      "Postgress",
      "Node Js",
      "Express Js",
      "Material Ui",
    ],
    images: [
      {
        src: "/img/neemiya/img1.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/neemiya/img2.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/neemiya/img3.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/neemiya/img4.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/neemiya/img5.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/neemiya/img6.png",
        alt: "Description of image 3",
      },
    ],
    link: "https://neemiya.com/",
  },
  {
    id: 7,
    title: "ASME : Grow Your Bussiness Advertise With Asme",
    logo: "/img/asme/logo.png",
    description:
      "Our restaurant reservation app offers a seamless and user-friendly experience, allowing diners to easily book tables for breakfast, lunch, or dinner. With a few taps, users can discover and reserve their favorite restaurants, making dining out a breeze.",
    companyName: "Freelance",

    companySite: "https://www.asme.org.sg/",
    workLogo: "/img/capauth/freelance.png",
    data: [
      {
        heading: "Customer Side",
        bullets: [
          "Intuitive Booking Process: Users can easily select their preferred date, time, and party size for their reservation.",
          "Meal-Specific Options: The app caters to different dining experiences by offering separate booking options for breakfast, lunch, and dinner.",
          "Real-Time Availability: Users can view up-to-date table availability, ensuring they can make informed decisions about their reservations.",
          "Special Requests: A feature allowing users to note any special requirements or preferences when making a reservation.",
          "Confirmation System: Automatic confirmation emails or SMS messages are sent to users upon successful booking.",
        ],
      },
      {
        heading: "Admin Side",
        bullets: [
          "Reservation Dashboard: A comprehensive view of all current and upcoming reservations, sortable by date, time, and party size.",
          "Table Management: Ability to assign and reassign tables based on party size and restaurant layout.",
          "Customer Database: A database storing customer information, reservation history, and preferences for personalized service.",
          "Customizable Settings: Options to set restaurant capacity, opening hours, and special event dates.",
          "Reporting Tools: Analytics and reporting tools to track reservation trends, peak hours, and revenue generated.",
          "Staff Management: Assign roles and permissions to different staff members for using the admin interface.",
        ],
      },
    ],
    technologies: [
      "React Js",
      "Javascript",
      "Postgress",
      "Node Js",
      "Express Js",
      "Material Ui",
    ],
    images: [
      {
        src: "/img/asme/img0.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/asme/img1.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/asme/img2.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/asme/img3.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/asme/img4.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/asme/img5.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/asme/img6.png",
        alt: "Description of image 3",
      },
    ],
    link: "https://www.asme.org.sg/",
  },
  {
    id: 8,
    title: "GLUU : GAuthorize in Real time",
    logo: "/img/gluu/logo.png",
    description:
      "Our restaurant reservation app offers a seamless and user-friendly experience, allowing diners to easily book tables for breakfast, lunch, or dinner. With a few taps, users can discover and reserve their favorite restaurants, making dining out a breeze.",
    companyName: "Freelance",
    companySite: "https://gluu.org/",
    workLogo: "/img/capauth/freelance.png",
    data: [
      {
        heading: "Customer Side",
        bullets: [
          "Intuitive Booking Process: Users can easily select their preferred date, time, and party size for their reservation.",
          "Meal-Specific Options: The app caters to different dining experiences by offering separate booking options for breakfast, lunch, and dinner.",
          "Real-Time Availability: Users can view up-to-date table availability, ensuring they can make informed decisions about their reservations.",
          "Special Requests: A feature allowing users to note any special requirements or preferences when making a reservation.",
          "Confirmation System: Automatic confirmation emails or SMS messages are sent to users upon successful booking.",
        ],
      },
      {
        heading: "Admin Side",
        bullets: [
          "Reservation Dashboard: A comprehensive view of all current and upcoming reservations, sortable by date, time, and party size.",
          "Table Management: Ability to assign and reassign tables based on party size and restaurant layout.",
          "Customer Database: A database storing customer information, reservation history, and preferences for personalized service.",
          "Customizable Settings: Options to set restaurant capacity, opening hours, and special event dates.",
          "Reporting Tools: Analytics and reporting tools to track reservation trends, peak hours, and revenue generated.",
          "Staff Management: Assign roles and permissions to different staff members for using the admin interface.",
        ],
      },
    ],
    technologies: [
      "React Js",
      "Javascript",
      "Postgress",
      "Node Js",
      "Express Js",
      "Material Ui",
    ],
    images: [
      {
        src: "/img/gluu/img1.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/gluu/img2.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/gluu/img3.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/gluu/img4.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/gluu/img5.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/gluu/img6.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/gluu/img7.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/gluu/img8.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/gluu/img9.png",
        alt: "Description of image 3",
      },
    ],
    link: "https://gluu.org/",
  },
  {
    id: 9,
    title: "GYG: Menu And Ordering",
    logo: "/img/gyg-order/logo.png",
    description:
      "The Guzman y Gomez Admin Panel is a robust web application designed to streamline restaurant management operations. This intuitive interface allows administrators to efficiently manage restaurant profiles, menus, and service options, ensuring a seamless experience for both staff and customers.",
    companyName: "Guzman Y Gomez",
    companySite: "https://order.guzmanygomez.com.au/",
    workLogo: "/img/gyg-order/logo.png",
    data: [
      {
        heading: "Restaurant Management",
        bullets: [
          "Add and edit restaurant profiles, including details like location, operating hours, and contact information.",
          "Manage multiple restaurant locations under one account for centralized oversight.",
        ],
      },
      {
        heading: "Menu Management",
        bullets: [
          "Create and modify menus for breakfast, lunch, and dinner.",
          "Add individual items with detailed descriptions, pricing, and dietary information to enhance customer engagement.",
          "Categorize menu items into specific sections, such as appetizers, mains, and desserts, for easy navigation.",
        ],
      },
      {
        heading: "Service Management",
        bullets: [
          "Enable or disable various service options such as delivery, pickup, and table service to adapt to operational needs.",
          "Manage service availability based on restaurant hours or special events.",
        ],
      },
      {
        heading: "Equipment Management",
        bullets: [
          "Keep track of essential kitchen equipment, including liquor storage, fryers, quesadilla makers, ice machines, coffee machines, soft serve machines, and gas types.",
          "Monitor the status and maintenance schedules of these machines to ensure optimal performance.",
        ],
      },
      {
        heading: "History Log Management",
        bullets: [
          "Maintain a comprehensive history log that records changes made within the admin panel, including additions, modifications, and deletions.",
          "Access historical data to review past menu changes, service status updates, and equipment management actions for better decision-making.",
        ],
      },
    ],
    technologies: [
      "React Js",
      "Javascript",
      "Postgress",
      "Node Js",
      "Express Js",
      "Material Ui",
    ],
    images: [
      {
        src: "/img/gyg-order/img0.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/gyg-order/img1.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/gyg-order/img2.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/gyg-order/img3.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/gyg-order/all.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/gyg-order/img11.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/gyg-order/img12.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/gyg-order/img13.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/gyg-order/img14.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/gyg-order/img15.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/gyg-order/img16.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/gyg-order/img17.png",
        alt: "Description of image 3",
      },
    ],
    link: "https://order.guzmanygomez.com.au/",
  },
  {
    id: 10,
    title: "SHC  - Singapore Home Cooks",
    logo: "/img/neemiya/logo.png",
    description:
      "Our restaurant reservation app offers a seamless and user-friendly experience, allowing diners to easily book tables for breakfast, lunch, or dinner. With a few taps, users can discover and reserve their favorite restaurants, making dining out a breeze.",
    companyName: "Freelance",
    companySite: "https://neemiya.com/",
    workLogo: "/img/capauth/freelance.png",
    data: [
      {
        heading: "Customer Side",
        bullets: [
          "Intuitive Booking Process: Users can easily select their preferred date, time, and party size for their reservation.",
          "Meal-Specific Options: The app caters to different dining experiences by offering separate booking options for breakfast, lunch, and dinner.",
          "Real-Time Availability: Users can view up-to-date table availability, ensuring they can make informed decisions about their reservations.",
          "Special Requests: A feature allowing users to note any special requirements or preferences when making a reservation.",
          "Confirmation System: Automatic confirmation emails or SMS messages are sent to users upon successful booking.",
        ],
      },
      {
        heading: "Admin Side",
        bullets: [
          "Reservation Dashboard: A comprehensive view of all current and upcoming reservations, sortable by date, time, and party size.",
          "Table Management: Ability to assign and reassign tables based on party size and restaurant layout.",
          "Customer Database: A database storing customer information, reservation history, and preferences for personalized service.",
          "Customizable Settings: Options to set restaurant capacity, opening hours, and special event dates.",
          "Reporting Tools: Analytics and reporting tools to track reservation trends, peak hours, and revenue generated.",
          "Staff Management: Assign roles and permissions to different staff members for using the admin interface.",
        ],
      },
    ],
    technologies: [
      "React Js",
      "Javascript",
      "Postgress",
      "Node Js",
      "Express Js",
      "Material Ui",
    ],
    images: [
      {
        src: "/img/shc/SH1.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/shc/SH2.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/shc/SH3.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/shc/SH4.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/shc/SH5.png",
        alt: "Description of image 3",
      },
    ],
    link: "https://neemiya.com/",
  },
  {
    id: 11,
    title: "third-party delivery partners integration",
    logo: "/img/neemiya/logo.png",
    description:
      "Our restaurant reservation app offers a seamless and user-friendly experience, allowing diners to easily book tables for breakfast, lunch, or dinner. With a few taps, users can discover and reserve their favorite restaurants, making dining out a breeze.",
    companyName: "Freelance",
    companySite: "https://neemiya.com/",
    workLogo: "/img/capauth/freelance.png",
    data: [
      {
        heading: "Customer Side",
        bullets: [
          "Intuitive Booking Process: Users can easily select their preferred date, time, and party size for their reservation.",
          "Meal-Specific Options: The app caters to different dining experiences by offering separate booking options for breakfast, lunch, and dinner.",
          "Real-Time Availability: Users can view up-to-date table availability, ensuring they can make informed decisions about their reservations.",
          "Special Requests: A feature allowing users to note any special requirements or preferences when making a reservation.",
          "Confirmation System: Automatic confirmation emails or SMS messages are sent to users upon successful booking.",
        ],
      },
      {
        heading: "Admin Side",
        bullets: [
          "Reservation Dashboard: A comprehensive view of all current and upcoming reservations, sortable by date, time, and party size.",
          "Table Management: Ability to assign and reassign tables based on party size and restaurant layout.",
          "Customer Database: A database storing customer information, reservation history, and preferences for personalized service.",
          "Customizable Settings: Options to set restaurant capacity, opening hours, and special event dates.",
          "Reporting Tools: Analytics and reporting tools to track reservation trends, peak hours, and revenue generated.",
          "Staff Management: Assign roles and permissions to different staff members for using the admin interface.",
        ],
      },
    ],
    technologies: [
      "React Js",
      "Javascript",
      "Postgress",
      "Node Js",
      "Express Js",
      "Material Ui",
    ],
    images: [
      {
        src: "/img/delivery-partner/D1.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/delivery-partner/D2.png",
        alt: "Description of image 3",
      },
      {
        src: "/img/delivery-partner/D3.png",
        alt: "Description of image 3",
      },
    ],
    link: "https://neemiya.com/",
  },
];

export default projects;
