module.exports = {
  routes: [
    {
      method: "GET",
      path: "/custom-user-role",
      handler: "custom-user.getUserRole",
      config: {
        policies: ["global::isAuthenticated"], // Apply policy here
      },
    },
  ],
};
