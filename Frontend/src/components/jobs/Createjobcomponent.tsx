import { CREATE_JOB_TITLE, JOB_LABEL_DEPARTMENT, JOB_LABEL_DESCRIPTION, JOB_LABEL_HEADCOUNT, JOB_LABEL_LOCATION, JOB_LABEL_REQUIREMENTS, JOB_LABEL_STATUS, JOB_LABEL_TITLE, JOB_STATUS_CLOSED, JOB_STATUS_HOLD, JOB_STATUS_OPEN, JOB_SUCCESS_MESSAGE, RESET_BUTTON, SUBMIT_BUTTON } from "../../constants/constants";
import type { Jobs } from "../../types/JobType";

interface CreateJobProps {
  loading: boolean;
  success: boolean;
  jobs: Jobs;
  error: string | null;
  onChange: (
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
    >
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const CreateJobcomponent = ({
  loading,
  error,
  jobs,
  success,
  onChange,
  onSubmit,
}: CreateJobProps) => {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <form
        onSubmit={onSubmit}
        className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4"
      >
        <h2 className="text-xl font-semibold">{CREATE_JOB_TITLE}</h2>

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
            <input
              name="title"
              value={jobs.title}
              onChange={onChange}
              placeholder="Frontend Engineer"
              className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 shadow-sm"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1 text-gray-600">
              {JOB_LABEL_DEPARTMENT}
            </label>
            <input
              name="department"
              value={jobs.department}
              onChange={onChange}
              placeholder="Engineering"
              className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 shadow-sm"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1 text-gray-600">
              {JOB_LABEL_LOCATION}
            </label>
            <input
              name="location"
              value={jobs.location}
              onChange={onChange}
              placeholder="Remote"
              className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 shadow-sm"
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
              className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 shadow-sm"
            >
              <option value="OPEN">{JOB_STATUS_OPEN}</option>
              <option value="CLOSED">{JOB_STATUS_CLOSED}</option>
              <option value="HOLD">{JOB_STATUS_HOLD}</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1 text-gray-600">
              {JOB_LABEL_HEADCOUNT}
            </label>
            <input
              type="number"
              value={jobs.headcount}
              onChange={onChange}
              name="headcount"
              min={1}
              placeholder="1"
              className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 shadow-sm"
              required
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1 text-gray-600">
            {JOB_LABEL_DESCRIPTION}
          </label>
          <textarea
            name="description"
            value={jobs.description}
            onChange={onChange}
            placeholder="What success looks like and what they will own"
            rows={4}
            className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 shadow-sm"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1 text-gray-600">
            {JOB_LABEL_REQUIREMENTS}
          </label>
          <textarea
            name="requirements"
            value={jobs.requirements}
            onChange={onChange}
            placeholder="React, TypeScript, Design Systems, Testing"
            rows={4}
            className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 shadow-sm"
            required
          />
        </div>

        <div className="flex flex-row gap-4 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="text-white bg-blue-600 p-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 text-sm font-semibold px-6 shadow-md"
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
  );
};

export default CreateJobcomponent;
