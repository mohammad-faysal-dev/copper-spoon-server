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
const allowedOrigins = [
  "http://localhost:3000",
  "https://copper-spoon-client.vercel.app",
  process.env.APP_URL,
].filter(Boolean) as string[];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      // Allow all localhost origins for local development
      if (/^http:\/\/localhost(:\d+)?$/.test(origin)) {
        return callback(null, true);
      }
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error(`CORS policy: Origin ${origin} not allowed`), false);
    },
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
