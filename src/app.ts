import express, { Application } from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import { userRouter } from "./modules/user/user.route";
import { providerRoute } from "./modules/provider/provider.route";
import { melaRoute } from "./modules/meal/meal.route";


const app: Application = express();
app.use(
  cors({
    origin: process.env.APP_URL || "http://localhost:3000",
    credentials: true,
  }),
);

app.all("/api/auth/*splat", toNodeHandler(auth));
app.use(express.json());

app.use("/api/users", userRouter)
app.use("/api/provider", providerRoute)
app.use("/api/meals", melaRoute)
app.get("/", (req, res) => {
  res.send("Hello world");
});


export default app;
