const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with Vue.js and Node.js. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard.",
    longDescription: "This comprehensive e-commerce solution was built from scratch using modern web technologies. The platform includes a responsive frontend with Vue.js, a robust backend API with Node.js and Express, and a PostgreSQL database. Key features include real-time inventory management, secure payment processing with Stripe, order tracking, and a comprehensive admin panel for managing products, orders, and customers.",
    image: "/api/placeholder/600/400",
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS", "Express.js"],
    category: "Full Stack",
    status: "Completed",
    year: "2023",
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/irfandy/ecommerce-platform",
    features: [
      "User Authentication & Authorization",
      "Product Catalog with Search & Filters",
      "Shopping Cart & Checkout",
      "Payment Integration (Stripe)",
      "Order Management System",
      "Admin Dashboard",
      "Responsive Design",
      "Real-time Notifications"
    ],
    challenges: "Implementing real-time inventory updates and ensuring secure payment processing while maintaining a smooth user experience.",
    results: "Increased conversion rate by 35% and reduced cart abandonment by 28% compared to the previous platform."
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
    longDescription: "Built with React and Socket.io for real-time collaboration, this task management application allows teams to organize projects, assign tasks, track progress, and communicate effectively. The app features drag-and-drop functionality, file attachments, deadline tracking, and comprehensive reporting tools.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Socket.io", "MongoDB", "Express.js", "Material-UI", "Redux"],
    category: "Frontend",
    status: "Completed",
    year: "2023",
    liveUrl: "https://example-tasks.com",
    githubUrl: "https://github.com/irfandy/task-manager",
    features: [
      "Real-time Collaboration",
      "Drag & Drop Interface",
      "Team Management",
      "File Attachments",
      "Progress Tracking",
      "Deadline Alerts",
      "Project Analytics",
      "Mobile Responsive"
    ],
    challenges: "Implementing real-time synchronization across multiple users while maintaining data consistency and performance.",
    results: "Improved team productivity by 40% and reduced project completion time by 25%."
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
    longDescription: "This weather application provides comprehensive weather information with an intuitive interface. Users can search for weather by location, view detailed forecasts, see interactive weather maps, and get weather alerts. The app integrates with multiple weather APIs for accurate data and includes features like weather history, favorite locations, and customizable widgets.",
    image: "/api/placeholder/600/400",
    technologies: ["Vue.js", "OpenWeather API", "Chart.js", "Leaflet", "PWA", "Vite"],
    category: "Frontend",
    status: "Completed",
    year: "2022",
    liveUrl: "https://example-weather.com",
    githubUrl: "https://github.com/irfandy/weather-dashboard",
    features: [
      "Location-based Weather",
      "Interactive Maps",
      "7-day Forecast",
      "Weather Alerts",
      "Historical Data",
      "PWA Support",
      "Dark/Light Theme",
      "Offline Functionality"
    ],
    challenges: "Optimizing API calls and implementing efficient caching strategies to provide fast weather updates while minimizing data usage.",
    results: "Achieved 95% user satisfaction rating and 2.5s average load time."
  },
  {
    id: 4,
    title: "REST API Service",
    description: "A scalable REST API for a content management system with authentication, file uploads, and comprehensive documentation.",
    longDescription: "This backend service provides a complete API for managing content, users, and media files. Built with Node.js and Express, it includes JWT authentication, role-based access control, file upload handling, data validation, and comprehensive API documentation. The service is containerized with Docker and includes automated testing and CI/CD pipeline.",
    image: "/api/placeholder/600/400",
    technologies: ["Node.js", "Express.js", "JWT", "MongoDB", "Docker", "Swagger", "Jest"],
    category: "Backend",
    status: "Completed",
    year: "2022",
    liveUrl: "https://api.example-cms.com",
    githubUrl: "https://github.com/irfandy/cms-api",
    features: [
      "JWT Authentication",
      "Role-based Access Control",
      "File Upload System",
      "Data Validation",
      "API Documentation",
      "Rate Limiting",
      "Error Handling",
      "Automated Testing"
    ],
    challenges: "Implementing secure file uploads and ensuring API scalability while maintaining data integrity and security.",
    results: "Handles 10,000+ requests per minute with 99.9% uptime and comprehensive security measures."
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects, skills, and professional experience with smooth animations.",
    longDescription: "This personal portfolio website was built with Vue.js and features a modern design with smooth animations, responsive layout, and optimized performance. The site includes sections for projects, skills, experience, and contact information, with a focus on user experience and visual appeal. It's fully responsive and includes SEO optimization and accessibility features.",
    image: "/api/placeholder/600/400",
    technologies: ["Vue.js", "Tailwind CSS", "GSAP", "Vite", "PWA", "SEO"],
    category: "Frontend",
    status: "Completed",
    year: "2024",
    liveUrl: "https://irfandy.dev",
    githubUrl: "https://github.com/irfandy/portfolio",
    features: [
      "Responsive Design",
      "Smooth Animations",
      "Dark/Light Theme",
      "PWA Support",
      "SEO Optimized",
      "Fast Loading",
      "Accessibility",
      "Contact Form"
    ],
    challenges: "Creating engaging animations while maintaining performance and ensuring cross-browser compatibility.",
    results: "Achieved 100% Lighthouse score and significantly improved online presence and client inquiries."
  },
  {
    id: 6,
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing business metrics and analytics with real-time data updates and custom charts.",
    longDescription: "This data visualization platform helps businesses understand their data through interactive charts, graphs, and reports. Built with React and D3.js, it provides real-time data updates, customizable dashboards, export functionality, and user-friendly interfaces for non-technical users to explore complex datasets.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "D3.js", "Chart.js", "Python", "FastAPI", "PostgreSQL"],
    category: "Full Stack",
    status: "In Progress",
    year: "2024",
    liveUrl: "https://example-dashboard.com",
    githubUrl: "https://github.com/irfandy/data-dashboard",
    features: [
      "Interactive Charts",
      "Real-time Updates",
      "Custom Dashboards",
      "Data Export",
      "User Management",
      "API Integration",
      "Responsive Design",
      "Performance Monitoring"
    ],
    challenges: "Handling large datasets efficiently and creating intuitive interfaces for complex data visualization.",
    results: "Currently in development with expected completion in Q2 2024."
  }
]

export default projects


