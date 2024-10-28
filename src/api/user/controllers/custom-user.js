// src/api/user/controllers/custom-user.js
module.exports = {
  async getUserRole(ctx) {
    const { id } = ctx.state.user; // User ID from JWT token
    const user = await strapi.query("plugin::users-permissions.user").findOne({
      where: { id },
      populate: { role: true },
    });
    if (user) {
      ctx.send({ role: user.role });
    } else {
      ctx.send({ error: "User not found" });
    }
  },
};
