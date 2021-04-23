import express, { request, response } from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";

import "./database";
import { routes } from "./routes"

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("views engine", "html");

app.get("/pages/client", (request, response) => {
    return response.render("html/client.html");
});

export const http = createServer(app);
export const io = new Server(http);

io.on("connection", (socket: Socket) => {
    console.log("Conected", socket.id);
});

app.use(express.json());

app.use(routes);