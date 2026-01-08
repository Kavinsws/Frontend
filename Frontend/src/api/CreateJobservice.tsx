import axios from "axios";
import type { JobCreateForm } from "../containers/CreateJobContainer";

export const CreateJobServie = async(payload : JobCreateForm)=>{
    try{
        const response = await axios.post("http://localhost:5000/api/newJob",payload)
        return response.data.id;
    }
    catch{
        console.log("Failed to create to create Job");
    }
}