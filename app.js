import express from 'express'
import "dotenv/config";
import Hello from "./hello.js"
import Lab5 from "./lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import cors from "cors";
const app = express()
app.use(cors());
CourseRoutes(app);
app.use(express.json());
ModuleRoutes(app);
Hello(app)
Lab5(app);
app.listen(process.env.PORT || 4000);