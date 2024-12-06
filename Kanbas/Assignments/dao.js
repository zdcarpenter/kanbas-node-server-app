import model from "./model.js";
export function findAllAssignments() {
    return model.find();
}
export function findAssignmentById(assignmentId) {
    return model.findById(assignmentId);
}
export function findAssignmentsForCourse(courseId) {
    return model.find({ course: courseId });
}
export function createAssignment(assignment) {
    delete assignment._id;
    return model.create(assignment);
}
export function deleteAssignment(assignmentId) {
    return model.deleteOne({ _id: assignmentId });
}
export function updateAssignment(assignmentId, assignmentUpdates) {
    return model.updateOne({ _id: assignmentId }, { $set: assignmentUpdates });
}