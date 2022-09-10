import express, { Application } from "express";
import morgan from "morgan";
import { ROUTES } from "./routes/router";
const cors = require("cors");



const { setupLogging } = require("./logging");
const { setupProxies } = require("./proxy/proxy");

const PORT = process.env.PORT || 7000;

const app: Application = express();

setupLogging(app);
setupProxies(app, ROUTES);

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());


app.listen(PORT, () => {
    console.log('Node API running on port : ', PORT);
});
