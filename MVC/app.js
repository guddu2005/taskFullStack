const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const cors = require("cors")

const { restrictToLoggedUserOnly, checkAuth } = require("./middlewares/auth");
const taskRouter = require("./routes/task");
const userRouter = require("./routes/user");
const staticRouter = require("./routes/staticRoutes");
const mongoose = require("mongoose");
const { MONGO_URL } = require("./env");

const app = express();
const PORT = 5000;

mongoose.connect(MONGO_URL).then(() => {
    console.log("MongoDB Connected");
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(
    {
        origin:["https://deploy-taskapp.vercel.app"],
        methods:["POST" ,"GET"],
        credentials:true
    }
));

app.use("/task",restrictToLoggedUserOnly, taskRouter);
app.use("/user", userRouter);
app.use("/",checkAuth, staticRouter);

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
