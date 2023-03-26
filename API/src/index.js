import express from "express";
import cors from "cors"
import colors from "colors"
import hashPassword from "../src/routes/hashPassword.routes.js"

const app = express();

const PORT = 3000

// middlewares
app.use(cors())
app.use(express.json());
app.use(hashPassword)

app.listen(PORT, ()=> console.log(`listening on port ${PORT}`.rainbow) )