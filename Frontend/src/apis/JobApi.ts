import axios from "axios";
import type {alljob, AllJobResponse, JobCountResponse, JobErrorResponse, Jobs, JobUpdateResponse, paginationParams } from "../types/JobType";

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

export const getAllJobs = async(pagination:paginationParams) : Promise<AllJobResponse>=>{
  try{
    const response = await axios.get(`${baseUrl}/getJobs`, {
      params: { page:pagination.page,limit:pagination.limit },
    });
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

export const getJobStatusCounts = async() : Promise<JobCountResponse> =>{
  try{
    const response = await axios.get(`${baseUrl}/getJobCounts`);
    return response.data.data
  }
  catch(error){
    if (axios.isAxiosError(error) && error.response) {
      const status = error.response.status;
      const data = error.response.data as JobErrorResponse;
      if (status === 400) {
        throw new Error("Validation Error");
      }

      const errorMessage = data.details
        ? `${data.message} : ${data.details}`
        : data.message;

      throw new Error(errorMessage || "Error Occured");
    }
    throw new Error("Error fetching Jobs");
  }
}

export const deleteJob = async(id:string):Promise<void> =>{
  try{
    await axios.delete(`${baseUrl}/deleteJob/${id}`);
    
  }
  catch(error){
    if(axios.isAxiosError(error)){  
      const status =  error.response?.status;
      if(status === 400){
        throw new Error("Validation error");
      }
      throw new Error("Error while deleting job");
    }
  }
}

export const updateJob = async(id:string,job: alljob) : Promise<JobUpdateResponse>=>{
  try{
    console.log(job)
    const response = await axios.put(`${baseUrl}/updateJob/${id}`,job)
    return response.data
  }
  catch(error){
    if(axios.isAxiosError(error)){
      const status = error.response?.status;
      if(status == 404){
        throw new Error("Job not found")
      }
    }
    throw new Error("Failed to update the job");
  }
}