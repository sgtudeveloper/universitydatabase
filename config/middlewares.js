module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  // "strapi::cors",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: ["http://localhost:3000"], // Your Next.js URL
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
