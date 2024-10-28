module.exports = async (ctx, next) => {
  // Check for the authorization header
  const token = ctx.request.header.authorization?.split(" ")[1]; // Extract token from "Bearer token"

  if (!token) {
    // If no token, respond with an unauthorized status
    ctx.response.status = 401; // Set status to 401
    ctx.response.body = {
      error: {
        status: 401,
        message: "You must be logged in to access this route",
      },
    };
    return; // Exit the function
  }

  try {
    // Verify the token
    const { id } =
      await strapi.plugins["users-permissions"].services.jwt.verify(token);

    // Fetch the user
    const user = await strapi.plugins["users-permissions"].services.user.fetch({
      id,
    });

    // Set the user in the context
    ctx.state.user = user;

    // Proceed to the next middleware/controller
    await next();
  } catch (error) {
    // Handle any errors that occur during verification
    ctx.response.status = 401; // Set status to 401
    ctx.response.body = {
      error: {
        status: 401,
        message: "Invalid token",
      },
    };
  }
};
