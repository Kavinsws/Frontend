import type { alljob, JobMetrics } from "@/types/JobType";
import type React from "react";
import JobCardComponent from "./JobCardComponent";
import {
  GRID_BUTTON,
  JOB_CARDS_TITLE,
  JOB_DASHBOARD_DESCRP,
  LIST_BUTTON,
  NEW_JOB_BUTTON,
  NEXT_BUTTON,
  PREV_BUTTON,
  TIP_DESCRIPTION,
  VIEW_MODE_LABEL,
} from "@/constants/constants";
import JobMetricsComponent from "./JobMetricsComponent";

interface JobDashboardProps {
  jobs: alljob[];
  loading: boolean;
  error: string | null;
  viewMode: "grid" | "list";
  onviewchange: (mode: "grid" | "list") => void;
  jobMetrics: JobMetrics[];
}

const JobDashboardComponent: React.FC<JobDashboardProps> = ({
  jobs,
  loading,
  error,
  viewMode,
  jobMetrics,
  onviewchange,
}) => {
  return (
    <div className="min-h-screen bg-gray-100 space-y-6 p-6">
      <div className="flex flex-col space-y-3">
        <h1 className="text-3xl text-gray-900 font-semibold">Job Workspace</h1>
        <div className="flex justify-between">
          <div>
            <p className="text-gray-400 text-md">{JOB_DASHBOARD_DESCRP}</p>
          </div>
          <button className="px-4 p-2 bg-gray-900 hover:bg-gray-700 text-sm text-white rounded-md">
            {NEW_JOB_BUTTON}
          </button>
        </div>
      </div>
      {!loading && !error && (
        <div className="grid grid-cols-4 gap-4">
          {jobMetrics.map((metric) => (
            <JobMetricsComponent key={metric.id} metrics={metric} />
          ))}
        </div>
      )}
      <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-300 flex justify-between">
        <div className="flex gap-2 items-center">
          <span className="text-gray-500 text-sm font-medium ">
            {VIEW_MODE_LABEL}
          </span>
          <button
            onClick={() => onviewchange("grid")}
            className={`flex items-center rounded text-sm px-3 py-1 text-white font-medium transition-colors bg-gray-900 `}
          >
            {GRID_BUTTON}
          </button>
          <button
            onClick={() => onviewchange("list")}
            className={`flex items-center rounded text-sm px-3 text-white py-1 font-medium transition-colors bg-gray-900 `}
          >
            {LIST_BUTTON}
          </button>
        </div>
        <div className="flex items-center gap-2 pr-2">
          <button className="px-2 py-1 border rounded shadow-lg text-xs bg-gray-50 hover:bg-gray-300 font-medium text-gray-400 hover:text-gray-900">
            {PREV_BUTTON}
          </button>
          <button className="px-2 py-1 border rounded shadow-lg text-xs bg-gray-50 hover:bg-gray-300 font-medium text-gray-400 hover:text-gray-900">
            {NEXT_BUTTON}
          </button>
        </div>
      </div>
      <div className="rounded bg-white w-full shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-1">
          {JOB_CARDS_TITLE}
        </h2>
        <p className="text-gray-500 text-sm ">{JOB_DASHBOARD_DESCRP}</p>
        {!loading && !error && (
          <div
            className={
              viewMode === "grid" ? "grid grid-cols-3 gap-4" : "space-y-6"
            }
          >
            {jobs.map((job) => (
              <JobCardComponent key={job.id} job={job} viewmode={viewMode} />
            ))}
          </div>
        )}
      </div>
      <div className="bg-gray-200 p-4 rounded-lg">
        <p className="text-gray-900 text-sm ">{TIP_DESCRIPTION}</p>
      </div>
    </div>
  );
};

export default JobDashboardComponent;
