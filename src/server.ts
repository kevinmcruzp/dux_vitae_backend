import { users } from "./database";
import { app, httpServer } from "./http";
import { checkAuthMiddleware } from "./middleware/checkAuthMiddleware";
import "./websocket/websocket";

//Buscar datos del usuario
app.get("/me", checkAuthMiddleware, (request, response) => {
  const email = request.user;

  const user = users.get(email);

  if (!user) {
    return response
      .status(400)
      .json({ error: true, message: "User not found." });
  }

  return response.json({
    email,
    permissions: user.permissions,
    roles: user.roles,
  });
});

httpServer.listen(3333, () => {
  console.log("Server running on port 3333");
});
