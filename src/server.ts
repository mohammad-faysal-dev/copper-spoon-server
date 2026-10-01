import app from "./app";
import { prisma } from "./lib/prisma";

const PORT = process.env.PORT || 5000;

if (process.env.VERCEL) {
  await prisma.$connect();
} else {
  async function main() {
    try {
      await prisma.$connect();

      console.log("Connected to the database successfully");

      app.listen(PORT, () => {
        console.log(`server is running on http://localhost:${PORT}`);
      });
    } catch (error) {
      console.log(error);
      await prisma.$disconnect();
      process.exit();
    }
  }

  main();
}

export default app;