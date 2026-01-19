import { getAllJobs } from "@/apis/JobApi";
import JobDashboardComponent from "@/components/jobs/JobDashboardComponent";
import type { alljob, JobMetrics, paginationData } from "@/types/JobType";
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
  const [metrics, setMetrics] = useState<JobMetrics[]>([]);
  const [paginationData,setPaginationData] = useState<paginationData>();
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        setIsLoading(true);
        const mockData = await getAllJobs();

        const mockMetrics: JobMetrics[] = [
          {
            id: "1",
            status: "Open",
            count: 2,
          },
          {
            id: "1",
            status: "Open",
            count: 2,
          },
          {
            id: "1",
            status: "Open",
            count: 2,
          },
          {
            id: "1",
            status: "Open",
            count: 2,
          },
        ];
        setMetrics(mockMetrics);
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
