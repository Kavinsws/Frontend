import React from "react";
import type { alljob } from "@/types/JobType";
import { JOB_CARD_HEADCOUNT, JOB_CARD_UPDATE } from "@/constants/constants";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";

const getStatusStyles = (status: string) => {
  switch (status) {
    case "OPEN":
      return "bg-green-100 text-green-800";
    case "IN_REVIEW":
      return "bg-yellow-100 text-yellow-800";
    case "CLOSED":
      return "bg-gray-100 text-gray-800";
  }
};

interface JobCardProps {
  selected?:boolean
  job: alljob;
  viewmode: "grid" | "list";
  onDelete: (id:string)=> void;
  onJobCardClick:(job : alljob)=>void
  onHandleUpdate:(job : alljob)=>void
}

const JobCardComponent: React.FC<JobCardProps> = ({ job, viewmode,onDelete,onJobCardClick,selected,onHandleUpdate }) => {
  if (viewmode === "grid") {
    return (
      <div
        onClick={() => onJobCardClick(job)}
        className={`relative group w-full border border-gray-300 text-sm cursor-pointer rounded-lg p-3
    ${
      selected
        ? "bg-gray-100 border-gray-600"
        : "bg-white hover:bg-gray-100 hover:border-gray-600"
    }
  `}
      >
        <div className="flex-1 space-y-0.5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 ">
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
              <button onClick={()=> onHandleUpdate(job)} className="rounded p-1 text-sm bg-gray-200 hover:bg-gray-400">
                <MdEdit />
              </button>
              <button
                onClick={() => onDelete(job.id)}
                className="rounded p-1 text-sm bg-red-200 hover:bg-red-400"
              >
                <MdDelete />
              </button>
            </div>
          </div>
          <div className="text-sm flex flex-row  items-center text-gray-500">
            {job.department} ·
            <IoLocationOutline />
            <span className="text-gray-400">{job.location}</span>
          </div>

          <p className="text-sm text-gray-600 w-ful grow mb-2">
            {job.description}
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-500 justify-between">
          <div className="flex flex-row items-center gap-1 bg-gray-200 px-2 py-1 rounded-xl group-hover:bg-white border-gray-100">
            <FaUserFriends />
            {job.headcount} {JOB_CARD_HEADCOUNT}
          </div>
          <span>
            {JOB_CARD_UPDATE}{" "}
            {job.updatedAt.slice(0, 10).split("-").reverse().join("-")}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() =>onJobCardClick(job)}
      className={`relative text-sm group flex flex-col px-4 py-2 cursor-pointer rounded-lg border
    ${
      selected
        ? "bg-gray-100 border-gray-600"
        : "bg-white border-gray-300 hover:bg-gray-100 hover:border-gray-600"
    }
  `}
    >
      <div className="flex  justify-between mb-0.5 items-center">
        <div className="flex w-[40%] flex-row justify-between items-center">
          <div className="flex items-center  gap-3 ">
            <h3 className="font-bold text-gray-900 text-sm">{job.title}</h3>
            <span
              className={`text-xs px-2 py-0.5 rounded-lg font-medium ${getStatusStyles(
                job.status
              )}`}
            >
              {job.status}
            </span>
          </div>
          <div className=" flex-row space-x-2 hidden group-hover:block ">
            <button
              onClick={() => onHandleUpdate(job)}
              className="rounded p-1 text-sm bg-gray-200 hover:bg-gray-400"
            >
              <MdEdit />
            </button>
            <button
              onClick={() => onDelete(job.id)}
              className="rounded p-1 text-sm bg-red-200 hover:bg-red-400"
            >
              <MdDelete />
            </button>
          </div>
        </div>
        <div className="flex justify-between gap-2 items-center text-gray-400 ">
          <div className="flex flex-row items-center  gap-1 text-sm bg-gray-100  py-1 px-1 rounded-2xl">
            <FaUserFriends />
            {job.headcount} {JOB_CARD_HEADCOUNT}
          </div>
          <span className="text-sm">
            {JOB_CARD_UPDATE}
            {job.updatedAt.slice(0, 10).split("-").reverse().join("-")}
          </span>
        </div>
      </div>
      <div className="text-sm flex flex-row items-center text-gray-500 gap-1 mb-0.5">
        {job.department}
        <IoLocationOutline />
        <span className="text-sm text-gray-500">{job.location}</span>
      </div>
      <p className="text-sm text-gray-400 grow">{job.description}</p>
    </div>
  );
};

export default JobCardComponent;
