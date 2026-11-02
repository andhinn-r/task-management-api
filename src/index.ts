
import express from "express";
import postRoute from "./routes/post-routes";
import taskRoute from "./routes/task-routes";

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/posts", postRoute);
app.use("/api/v1/tasks", taskRoute);

// Root Route
app.get("/", (req, res) => {
    res.send("Hello Express + TypeScript");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
