import { Schema } from "mongoose";
import mongoose from "mongoose";


export type IProject= {
    title: string;
    slug: string; 
    timeframe: string;
    description: string; 
    technologies: string;
    order: number
};


// mongoose schema 
export const projectSchema = new Schema<IProject>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    timeframe: { type: String, required: false,},
    description: { type: String, required: true },
    technologies: {type: String, required: true},
    order: {type: Number, required: true},
})

// defining the collection and model
const Project = mongoose.models['projects'] ||
mongoose.model('projects', projectSchema);

export default Project;