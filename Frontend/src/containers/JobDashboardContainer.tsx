import { getAllJobs, getJobStatusCounts } from "@/apis/JobApi";
import JobDashboardComponent from "@/components/jobs/JobDashboardComponent";
import type { alljob, JobCounts, paginationData } from "@/types/JobType";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const JobDashboardContainer: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigate=()=>{
    navigate("/newJob");
  }
  const [jobs, setJobs] = useState<alljob[]>([]);
  const [loading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [metrics, setMetrics] = useState<JobCounts[]>([]);
  const [paginationData,setPaginationData] = useState<paginationData>();
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        setIsLoading(true);
        const mockData = await getAllJobs();

        const response = await getJobStatusCounts();

        const jobCounts = [
          { id: "open", status: "Open", count: response.openJobs },
          { id: "closed", status: "Closed", count: response.closedJobs },
          { id: "inReview", status: "In Review", count: response.inReviewJobs },
          { id: "total", status: "Total", count: response.totalJobs },
        ];
        setMetrics(jobCounts);
        setJobs(mockData.data);
        setPaginationData(mockData.pagination)
      } catch (error) {
        setError(error as string);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllJobs();
  }, []);
  return (
    <JobDashboardComponent
      onviewchange={setViewMode}
      onJobCreateClick={handleNavigate}
      error={error}
      jobs={jobs}
      pagination={paginationData}
      loading={loading}
      viewMode={viewMode}
      jobMetrics={metrics}
    />
  );
};

export default JobDashboardContainer;
