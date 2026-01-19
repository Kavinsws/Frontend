import axios from "axios";
import type {AllJobResponse, JobErrorResponse, Jobs } from "../types/JobType";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const createJob = async (job: Jobs) => {
  try {
    const response = await axios.post(`${baseUrl}/newJob`, job);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const status = error.response.status;
      const data = error.response.data as JobErrorResponse;

      if (status === 400) {
        throw new Error(
          "Validation Error"
        );
      }

      const errorMessage = data.details
        ? `${data.message} :${data.details}`
        : data.message;

      throw new Error(errorMessage || "Error Occured");
    }

    throw new Error("Unexpected Error Occured");
  }
};

export const getAllJobs = async() : Promise<AllJobResponse>=>{
  try{
    const response = await axios.get(`${baseUrl}/getJobs`);
    return response.data
  }catch(error){
   if(axios.isAxiosError(error) && error.response){
    const status = error.response.status;
    const data = error.response.data as JobErrorResponse;
    if(status === 400){
      throw new Error("Validation Error")
    }

    const errorMessage = data.details? `${data.message} : ${data.details}`:data.message;

    throw new Error(errorMessage || "Error Occured");
   }
   throw new Error("Error fetching Jobs")
  }
}