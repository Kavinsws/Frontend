import type { alljob, JobCounts, paginationData } from "@/types/JobType";
import type React from "react";
import JobCardComponent from "./JobCardComponent";
import { Spinner } from "../ui/spinner";
import { CiGrid41 } from "react-icons/ci";
import { FaList } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa"; 
import {
  EDIT,
  GRID_BUTTON,
  HOME,
  JOB_CARDS_TITLE,
  JOB_DASHBOARD_DESCRP,
  JOB_DASHBOARD_TITLE,
  JOBS,
  LIST_BUTTON,
  LOADING,
  NEW_JOB_BUTTON,
  NEXT_BUTTON,
  OF,
  PAGE,
  PREV_BUTTON,
  TIP_DESCRIPTION,
  VIEW_MODE_LABEL,
} from "@/constants/constants";
import JobMetricsComponent from "./JobMetricsComponent";
import { IoMdAdd } from "react-icons/io";

interface JobDashboardProps {
  loading: boolean;
  jobs: alljob[];
  jobMetrics: JobCounts[];
  pagination?: paginationData;
  selectedJob: alljob | null;
  error: string | null;
  viewMode: "grid" | "list";
  onviewchange: (mode: "grid" | "list") => void;
  onJobCreateClick: () => void;
  onDelete: (id: string) => void;
  navigateNext: () => void;
  navigatePrev: () => void;
  onJobCardClick?: (job: alljob) => void;
  onPaginationNext:()=>void;
  onPaginationPrev:()=>void;
  handleUpdateNavigation? :(job:alljob)=>void
}

const JobDashboardComponent: React.FC<JobDashboardProps> = ({
  jobs,
  pagination,
  loading,
  error,
  viewMode,
  jobMetrics,
  onviewchange,
  onJobCreateClick,
  onDelete,
  navigateNext,
  navigatePrev,
  onJobCardClick,
  selectedJob,
  handleUpdateNavigation,
  onPaginationNext,
  onPaginationPrev
}) => {
  return (
    <div className="min-h-screen space-y-5 px-10 py-6">
      <div className="flex flex-col space-y-1">
        <h1 className="text-2xl text-gray-900 font-semibold">
          {JOB_DASHBOARD_TITLE}
        </h1>
        <div className="flex justify-between">
          <div>
            <p className="text-gray-500 text-sm">{JOB_DASHBOARD_DESCRP}</p>
          </div>

          <button
            onClick={onJobCreateClick}
            className="px-3 p-1.5 bg-gray-900 hover:bg-gray-700 text-md text-white rounded-md"
          >
            <span className="flex flex-row items-center justify-between gap-2">
              <IoMdAdd />
              {NEW_JOB_BUTTON}
            </span>
          </button>
        </div>
        <div className="flex flex-row gap-2">
          <button
            onClick={navigatePrev}
            className="bg-white text-sm rounded-md shadow-sm px-2"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={navigateNext}
            className="bg-white text-sm rounded-md shadow p-2"
          >
            <FaArrowRight />
          </button>
          <div className="flex flex-row gap-3 items-center">
            <button className="text-sm">{HOME}</button>
            <FaChevronRight size={10} />
            <button className="text-sm">{JOBS}</button>
            <FaChevronRight size={10} />
            <button className="text-sm">
              {selectedJob ? `${EDIT} ${selectedJob.title}` : "All Jobs"}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {jobMetrics.map((metric) => (
          <JobMetricsComponent
            key={metric.id}
            metrics={metric}
            icon={metric.icon}
          />
        ))}
      </div>
      <div className="bg-white p-3 rounded-lg shadow-md  flex justify-between">
        <div className="flex gap-2 items-center">
          <span className="text-gray-500 text-sm font-medium ">
            {VIEW_MODE_LABEL}
          </span>
          <button
            onClick={() => onviewchange("grid")}
            className={`flex items-center gap-1 rounded-md text-sm px-3 py-2 font-normal transition-colors ${
              viewMode === "grid"
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-800 shadow-md"
            } `}
          >
            <CiGrid41 strokeWidth={1} />
            {GRID_BUTTON}
          </button>
          <button
            onClick={() => onviewchange("list")}
            className={`flex items-center gap-1 rounded-md text-sm px-3 py-2 font-normal transition-colors ${
              viewMode === "list"
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-800 shadow-md"
            } `}
          >
            <FaList strokeWidth={1} />
            {LIST_BUTTON}
          </button>
        </div>
        <div className="flex items-center flex-row gap-2">
          <span className="text-sm">
            {PAGE} {pagination?.currentPage || 1} {OF}{" "}
            {pagination?.totalPages || 1}
          </span>
          <div className="flex items-center gap-2 pr-2">
            <button
              onClick={onPaginationPrev}
              disabled={pagination?.currentPage === 1}
              className="px-2 py-1 border rounded shadow-lg text-xs bg-gray-50  font-medium text-gray-400  disabled:opacity-50"
            >
              {PREV_BUTTON}
            </button>
            <button
              onClick={onPaginationNext}
              disabled={pagination?.currentPage === pagination?.totalPages}
              className="px-2 py-1 border rounded shadow-lg text-xs bg-gray-50 font-medium text-gray-400 disabled:opacity-50"
            >
              {NEXT_BUTTON}
            </button>
          </div>
        </div>
      </div>
      <div className="rounded bg-white w-full shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-1">
          {JOB_CARDS_TITLE}
        </h2>
        <p className="text-gray-500 text-sm mb-2">{JOB_DASHBOARD_DESCRP}</p>
        {loading ? (
          <div className="flex flex-row justify-left w-full border bg-gray-50 gap-2 items-center p-2 rounded-lg">
            <Spinner />
            <span className="text-sm text-gray-600">{LOADING}</span>
          </div>
        ) : error ? (
          <div className="text-red-500 flex items-center justify-center">
            {error}
          </div>
        ) : (
          <div
            className={
              viewMode === "grid" ? "grid grid-cols-3 gap-4" : "space-y-3"
            }
          >
            {jobs.map((job) => (
              <JobCardComponent
                key={job.id}
                job={job}
                viewmode={viewMode}
                onDelete={onDelete}
                onJobCardClick={onJobCardClick}
                selected={selectedJob?.id === job.id}
                onHandleUpdate={handleUpdateNavigation}
              />
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
