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

export interface alljob{
  id:string,
  title: string;
  department: string;
  location: string;
  status: string;
  headcount: number;
  description: string;
  requirements: string;
  createdAt:string,
  updatedAt:string
}

export interface AllJobResponse{
  message:string,
  data:alljob[]
}

export interface JobMetrics{
  id:string,
  status:string,
  count:number
}