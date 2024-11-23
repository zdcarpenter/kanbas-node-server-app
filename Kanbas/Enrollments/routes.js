import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
    app.get("/api/enrollments", async (req, res) => {
        const enrollments = await dao.findAllEnrollments();
        res.send(enrollments);
    });
    
    app.get("/api/enrollments/:userId", async (req, res) => {
        const { userId} = req.params;
        const enrollments = await dao.findEnrollmentsForUser(userId);
        res.send(enrollments);
    });
    
    app.post("/api/enrollments/:userId/:courseId", async (req, res) => {
        const { userId, courseId } = req.params;
        const status = await dao.enrollUserInCourse(userId, courseId);
        res.send(status);
    });
    
    app.delete("/api/enrollments/:userId/:courseId", async (req, res) => {
        const { userId, courseId } = req.params;
        const status = await dao.unenrollUserInCourse(userId, courseId);
        res.send(status);
    });
    
    }