type Status = "OPEN" | "CLOSED" | "IN_REVIEW"

export type Jobs= {
  title: string;
  department: string;
  location: string;
  status: Status;
  headcount: number;
  description: string;
  requirements: string;
}

export type JobResponse={
  id:string,
  createdAt:Date,
  updatedAt:Date,
}

interface Zoderror{
  code:string,
  path:string[] | number[],
  message:string
}

export interface JobErrorResponse{
  message : string,
  errors? : Zoderror[],
  details?: string  
}

export type alljob={
  id:string,
  title: string;
  department: string;
  location: string;
  status: Status;
  headcount: number;
  description: string;
  requirements: string;
  createdAt:string,
  updatedAt:string
}

export type paginationData={
  currentPage:number,
  totalPages:number,
  totalResults:number
}
export type AllJobResponse={
  message:string,
  pagination:paginationData,
  data:alljob[]
}

export type JobCounts={
  id:string,
  status:string,
  count:number
  icon:React.ElementType
}

export type JobCountResponse={
  message:string,
  totalJobs:number,
  openJobs:number,
  closedJobs:number,
  inReviewJobs:number,  
}

export type JobUpdateResponse={
  id:string,
  message:string,
}

export type paginationParams={
  page:number,
  limit:number
}