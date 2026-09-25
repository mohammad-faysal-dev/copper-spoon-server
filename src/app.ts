import express, { Application } from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import { userRouter } from "./modules/user/user.route";
import { providerRoute } from "./modules/provider/provider.route";
import { melaRoute } from "./modules/meal/meal.route";
import { categoryRoute } from "./modules/category/category.route";
import { reviewRouter } from "./modules/review/review.route";
import { orderRouter } from "./modules/order/order.route";
import { adminRoute } from "./modules/admin/admin.route";


const app: Application = express();
app.use(
  cors({
    origin: process.env.APP_URL || "http://localhost:3000",
    credentials: true,
  }),
);

app.all("/api/auth/*splat", toNodeHandler(auth));
app.use(express.json());

app.use("/users", userRouter)
app.use("/provider", providerRoute)
app.use("/meals", melaRoute)
app.use("/category", categoryRoute)
app.use("/review", reviewRouter)
app.use("/orders", orderRouter)
app.use("/admin", adminRoute)
app.get("/", (req, res) => {
  res.send("Hello world");
});


export default app;
