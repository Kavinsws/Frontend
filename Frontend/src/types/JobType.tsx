export interface Jobs {
  title: string;
  department: string;
  location: string;
  status: string;
  headcount: number;
  description: string;
  requirements: string;
}

export interface JobResponse{
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
