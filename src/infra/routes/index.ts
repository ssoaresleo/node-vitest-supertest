import { app } from "../app";
import userRoutes from "./userRoutes";

export default async function routes() {
  // Define routes here
  app.register(userRoutes);
}
