import express from "express";
import connectDB from "./config/db";
import userRoutes from "./routes/user.routes";
import type { Request, Response } from "express";

const app = express();

// Connect to Database
connectDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});
app.use(express.json());
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
