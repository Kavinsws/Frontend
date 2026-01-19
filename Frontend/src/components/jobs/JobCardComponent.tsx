import React from "react";
import type { alljob } from "@/types/JobType";
import { JOB_CARD_HEADCOUNT, JOB_CARD_UPDATE } from "@/constants/constants";


const getStatusStyles = (status: string) => {
  switch (status) {
    case "OPEN":
      return "bg-green-100 text-green-800";
    case "HOLD":
      return "bg-yellow-100 text-yellow-800";
    case "CLOSED":
      return "bg-gray-100 text-gray-800";
  }
};

interface JobCardProps {
  job: alljob;
  viewmode: "grid" | "list";
}

const JobCardComponent: React.FC<JobCardProps> = ({ job, viewmode }) => {
  if (viewmode === "grid") {
    return (
      <div className="relative group bg-white w-full border border-gray-300 hover:bg-gray-100 hover:border-gray-600  rounded-lg p-3">
        <div className="flex-1 space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center  gap-3 ">
              <h3 className="font-bold text-gray-900 text-md">{job.title}</h3>
              <span
                className={`text-xs px-2 py-0.5 rounded-lg font-medium ${getStatusStyles(
                  job.status
                )}`}
              >
                {job.status}
              </span>
            </div>
            <div className=" flex-row space-x-2 hidden group-hover:block">
              <button className="rounded p-1 text-sm bg-gray-200 hover:bg-gray-400">Update</button>
              <button className="rounded p-1 text-sm bg-red-200 hover:bg-red-400">Delete</button>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            {job.department} ·{" "}
            <span className="text-gray-400">{job.location}</span>
          </div>

          <p className="text-sm text-gray-600 w-ful grow mb-2">
            {job.description}
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-500 justify-between">
          <div className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-xl group-hover:bg-white border-gray-100">
            <span></span> {job.headcount} {JOB_CARD_HEADCOUNT}
          </div>
          <span>
            {JOB_CARD_UPDATE} {job.updatedAt}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group bg-white border border-gray-300 hover:bg-gray-100 hover:border-gray-600 flex flex-col p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center  gap-3 ">
          <h3 className="font-bold text-gray-900 text-md">{job.title}</h3>
          <span
            className={`text-xs px-2 py-0.5 rounded-lg font-medium ${getStatusStyles(
              job.status
            )}`}
          >
            {job.status}
          </span>
        </div>
        <div className=" flex-row space-x-2 hidden group-hover:block ">
          <button className="rounded p-1 text-sm bg-gray-200 hover:bg-gray-400">
            Update
          </button>
          <button className="rounded p-1 text-sm bg-red-200 hover:bg-red-400">
            Delete
          </button>
        </div>
      </div>
      <div className="text-sm text-gray-500 gap-2">
        {job.department}
        <span className="text-sm text-gray-500">{job.location}</span>
      </div>
      <p className="text-sm text-gray-400 grow">{job.description}</p>
      <div className="flex justify-between items-center text-sm text-gray-400 ">
        <div className="text-sm bg-gray-100  py-1 px-2 rounded-2xl">
          {job.headcount} {JOB_CARD_HEADCOUNT}
        </div>
        <span>
          {JOB_CARD_UPDATE} {job.updatedAt}
        </span>
      </div>
    </div>
  );
};

export default JobCardComponent;
