import { getAllJobs } from "@/apis/JobApi";
import JobDashboardComponent from "@/components/jobs/JobDashboardComponent";
import type { alljob, JobMetrics } from "@/types/JobType";
import React, { useEffect, useState } from "react";

const JobDashboardContainer: React.FC = () => {
  const [jobs, setJobs] = useState<alljob[]>([]);
  const [loading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [metrics, setMetrics] = useState<JobMetrics[]>([]);
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
        console.log(mockData);
        setJobs(mockData.data);
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
      error={error}
      jobs={jobs}
      loading={loading}
      viewMode={viewMode}
      jobMetrics={metrics}
    />
  );
};

export default JobDashboardContainer;
