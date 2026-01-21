import { deleteJob, getAllJobs, getJobStatusCounts } from "@/apis/JobApi";
import JobDashboardComponent from "@/components/jobs/JobDashboardComponent";
import type { alljob, JobCounts, paginationData } from "@/types/JobType";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsSuitcaseLg } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { LuCalendarClock } from "react-icons/lu";

const JobDashboardContainer: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigate=()=>{
    navigate("/newJob");
  }
  const fallbackPagination = {
    currentPage: 1,
    totalPages: 1,
    totalResults: 3,
  };
  const [jobs, setJobs] = useState<alljob[]>([]);
  const [loading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [metrics, setMetrics] = useState<JobCounts[]>([]);
  const [paginationData,setPaginationData] = useState<paginationData>(fallbackPagination);
  const [selectedJob,setSelectedJob] = useState<alljob | null>(null)
  const [page,setPage] = useState(1);
  const limit =3;

  const handleDelete = async (id : string) =>{
    try{
      setIsLoading(true);
      await deleteJob(id);
      const mockData = await getAllJobs(pagination);
      setJobs(mockData.data);
      setPaginationData(mockData.pagination);
    }
    catch(error){
      setError(error as string);
    }
    finally{
      setIsLoading(false);
    }
  }
  const handleNavigatePrev = () => {
    navigate(-1);
  };
  const handleNavigateNext = () => {
    navigate(1);
  };
  const handleJobCardClick = (job  : alljob)=>{
    setSelectedJob(job)
  }
  const handleUpdateNavigation = (job : alljob)=>{
    navigate(`/editJob/${job.id}`, { state: job });
  }
  const handlePaginationPrev = () => {
    setPage((prev) => Math.max(1, prev - 1));
  };
  const handlePaginationNext = () => {
    setPage((prev) =>
      paginationData && prev < paginationData.totalPages ? prev + 1 : prev
    );
  };
  const fallbackMetrics = [
    { id: "open", status: "Open", count: 0, icon: BsSuitcaseLg },
    { id: "closed", status: "Closed", count: 0, icon: FiCheckCircle },
    { id: "inReview", status: "In Review", count: 0, icon: FaRegClock },
    { id: "total", status: "Total", count: 0, icon: LuCalendarClock },
  ];
  const pagination ={
    page:page,
    limit:limit
  }
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        setIsLoading(true);
        const mockData = await getAllJobs(pagination);

        const response = await getJobStatusCounts();

        const jobCounts = [
          {
            id: "open",
            status: "Open",
            count: response.openJobs,
            icon: BsSuitcaseLg,
          },
          {
            id: "closed",
            status: "Closed",
            count: response.closedJobs,
            icon: FiCheckCircle,
          },
          {
            id: "inReview",
            status: "In Review",
            count: response.inReviewJobs,
            icon: FaRegClock,
          },
          {
            id: "total",
            status: "Total",
            count: response.totalJobs,
            icon: LuCalendarClock,
          },
        ];
        setMetrics(jobCounts);
        setJobs(mockData.data);
        setPaginationData(mockData.pagination)
      } catch (error) {
        setError("An unknown error occurred ,Cannot connect to the server!!");
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllJobs();
  }, [page]);
  return (
    <JobDashboardComponent
      onviewchange={setViewMode}
      onJobCreateClick={handleNavigate}
      error={error}
      jobs={jobs}
      pagination={paginationData}
      loading={loading}
      viewMode={viewMode}
      jobMetrics={metrics.length>0?metrics:fallbackMetrics}
      onDelete={handleDelete}
      navigateNext={handleNavigateNext}
      navigatePrev={handleNavigatePrev}
      selectedJob={selectedJob}
      onJobCardClick={handleJobCardClick}
      handleUpdateNavigation={handleUpdateNavigation}
      onPaginationNext={handlePaginationNext}
      onPaginationPrev={handlePaginationPrev}
    />
  );
};

export default JobDashboardContainer;
