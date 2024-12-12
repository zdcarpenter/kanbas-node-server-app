import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
        type: String,
        title: String,
        question: String,
        answer: String,
        points: {
            type: Number,
            default: 10,
        },
        choices: [String],
        
    },
    { collection: "questions" }
);
export default schema;