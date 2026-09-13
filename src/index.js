import express from 'express';
import {matchRouter} from "./routes/matches.js";

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: "Hello from express"})
})

app.use("/matches", matchRouter)

app.listen(8000, () => console.log("Server running on port 8000"))