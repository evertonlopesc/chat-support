import express from "express";

const app = express();

app.get("/", (request, response) => {
    return response.json({
        message: "Hello nlw#05"
    });
});

app.post("/", (request, response) => {
    return response.json({ message: "User registered with successfully!" })
});

app.listen(3333, () => console.log("Server is running on port: 3333"));