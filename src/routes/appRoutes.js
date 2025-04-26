import express from "express";
import userRoutes from "./userRoutes.js"
import adminRoutes from "./adminRoutes.js"

const appRoutes = (app) => {
    app.use("/public", express.static("public"));
    app.use("/api/user", userRoutes)
    app.use("/api/admin", adminRoutes)
}

export default appRoutes;