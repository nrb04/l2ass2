import express, { Request, Response, Application } from "express";
import cors from "cors";
import { userroutes } from "./module/user.route";
const app: Application = express();

app.use(express.json());
app.use(cors());
app.use("/api/users", userroutes);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
export default app;
