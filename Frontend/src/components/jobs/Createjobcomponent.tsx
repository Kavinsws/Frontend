import { FaArrowLeft, FaArrowRight, FaChevronRight } from "react-icons/fa";
import {
  CREATE_JOB_DESCRIPTION,
  CREATE_JOB_TITLE,
  HOME,
  JOB_LABEL_DEPARTMENT,
  JOB_LABEL_DESCRIPTION,
  JOB_LABEL_HEADCOUNT,
  JOB_LABEL_LOCATION,
  JOB_LABEL_REQUIREMENTS,
  JOB_LABEL_STATUS,
  JOB_LABEL_TITLE,
  JOB_STATUS_CLOSED,
  JOB_STATUS_IN_REVIEW,
  JOB_STATUS_OPEN,
  JOB_SUCCESS_MESSAGE,
  JOBS,
  NEW_JOB_BUTTON,
  RESET_BUTTON,
  SUBMIT_BUTTON,
} from "../../constants/constants";
import type { Jobs } from "../../types/JobType";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface CreateJobProps {
  loading: boolean;
  success: boolean;
  isFormValid: boolean;
  jobs: Jobs;
  error: string | null;
  onChange: (
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
    >
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
  onNavigate: () => void;
  navigatePrev:()=>void;
  navigateNext:()=>void;
}

const CreateJobcomponent = ({
  loading,
  error,
  isFormValid,
  jobs,
  success,
  onChange,
  onSubmit,
  onNavigate,
  navigatePrev,
  navigateNext

}: CreateJobProps) => {
  return (
    <div className="flex flex-col items-left space-y-2 min-h-screen  p-8 bg-white">
      <h2 className="text-2xl font-semibold">{CREATE_JOB_TITLE}</h2>
      <div className="flex flex-row justify-between items-center">
        <p className="text-sm text-gray-500 ">{CREATE_JOB_DESCRIPTION}</p>
        <div className="flex flex-row gap-2">
          <button onClick={navigatePrev} className="bg-white text-sm rounded-md shadow-lg p-3">
            <FaArrowLeft />
          </button>
          <button onClick={navigateNext} className="bg-white text-sm rounded-md shadow-lg p-3">
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-2 mb-4">
        <div className="flex flex-row gap-3 items-center text-gray-500">
          <button className="text-sm">{HOME}</button>
          <FaChevronRight size={10} />
          <button
            onClick={onNavigate}
            className="text-sm hover:cursor-pointer hover:text-gray-950"
          >
            {JOBS}
          </button>
          <FaChevronRight size={10} />
          <button className="text-sm text-black">{NEW_JOB_BUTTON}</button>
        </div>
      </div>

      <div className="w-full shadow-md p-6 bg-white rounded-lg border">
        <form
          onSubmit={onSubmit}
          className="mx-auto p-6 bg-white shadow-md border rounded-lg space-y-4"
        >
          <div className="flex flex-col space-y-2 ">
            <h2 className="text-lg font-semibold">{CREATE_JOB_TITLE}</h2>
            <p className="text-sm text-gray-500 ">{CREATE_JOB_DESCRIPTION}</p>
            <div className="flex flex-row gap-2 mb-4">
              <div className="flex flex-row gap-3 items-center text-gray-500">
                <button className="text-sm">{HOME}</button>
                <FaChevronRight size={10} />
                <button
                  onClick={onNavigate}
                  className="text-sm hover:text-gray-950 hover:cursor-pointer"
                >
                  {JOBS}
                </button>
                <FaChevronRight size={10} />
                <button className="text-sm text-black">{NEW_JOB_BUTTON}</button>
              </div>
            </div>
          </div>

          {error && (
            <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          {success && (
            <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded">
              {JOB_SUCCESS_MESSAGE}
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1 text-gray-600">
                {JOB_LABEL_TITLE}
              </label>
              <Input
                name="title"
                value={jobs.title}
                onChange={onChange}
                placeholder="Frontend Engineer"
                className="p-2 border border-gray-300 rounded-lg focus:ring-2 shadow-sm"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1 text-gray-600">
                {JOB_LABEL_DEPARTMENT}
              </label>
              <Input
                name="department"
                value={jobs.department}
                onChange={onChange}
                placeholder="Engineering"
                className="p-2 border border-gray-300 rounded-lg focus:ring-2 shadow-sm"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1 text-gray-600">
                {JOB_LABEL_LOCATION}
              </label>
              <Input
                name="location"
                value={jobs.location}
                onChange={onChange}
                placeholder="Remote"
                className="p-2 border border-gray-300 rounded-lg focus:ring-2 shadow-sm"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1 text-gray-600">
                {JOB_LABEL_STATUS}
              </label>
              <select
                name="status"
                value={jobs.status}
                onChange={onChange}
                className="p-2 border border-gray-300 rounded-lg focus:ring-2 shadow-sm"
              >
                <option value="OPEN">{JOB_STATUS_OPEN}</option>
                <option value="CLOSED">{JOB_STATUS_CLOSED}</option>
                <option value="IN_REVIEW">{JOB_STATUS_IN_REVIEW}</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1 text-gray-600">
                {JOB_LABEL_HEADCOUNT}
              </label>
              <Input
                type="number"
                value={jobs.headcount}
                onChange={onChange}
                name="headcount"
                min={1}
                placeholder="1"
                className="p-2 border border-gray-300 rounded-lg focus:ring-2 shadow-sm"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1 text-gray-600">
              {JOB_LABEL_DESCRIPTION}
            </label>
            <Textarea
              name="description"
              value={jobs.description}
              onChange={onChange}
              placeholder="What success looks like and what they will own"
              rows={4}
              className="p-2 border border-gray-300 rounded-lg focus:ring-2 shadow-sm"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1 text-gray-600">
              {JOB_LABEL_REQUIREMENTS}
            </label>
            <Textarea
              name="requirements"
              value={jobs.requirements}
              onChange={onChange}
              placeholder="React, TypeScript, Design Systems, Testing"
              rows={4}
              className="p-2 border border-gray-300 rounded-lg focus:ring-2  shadow-sm"
              required
            />
          </div>

          <div className="flex flex-row gap-4 pt-4">
            <button
              type="submit"
              disabled={isFormValid}
              className={`text-white p-2 rounded-md  disabled:bg-gray-400 text-sm font-semibold px-6 shadow-md ${
                isFormValid ? "bg-gray-300" : "bg-gray-900 cursor-pointer"
              }`}
            >
              {loading ? "Submitting..." : `${SUBMIT_BUTTON}`}
            </button>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="text-black p-2 rounded-md border border-gray-300 hover:bg-gray-100 text-sm font-semibold px-6 shadow-md"
            >
              {RESET_BUTTON}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateJobcomponent;
