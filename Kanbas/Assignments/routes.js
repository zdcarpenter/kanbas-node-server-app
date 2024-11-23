import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.get("/api/assignments", async (req, res) => {
    const assignments = await dao.findAllAssignments();
    res.send(assignments);
  });

  app.get("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const assignment = await dao.findAssignmentById(assignmentId);
    res.send(assignment);
  });

  app.post("/api/assignments", async (req, res) => {
    const assignment = req.body;
    const newAssignment = await dao.createAssignment(assignment);
    res.send(newAssignment);
  });

  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const status = await dao.deleteAssignment(assignmentId);
    res.send(status);
  });

  app.put("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = await dao.updateAssignment(assignmentId, assignmentUpdates);
    res.send(status);
  });
}