import { JOB_METRICS_LOGO } from "@/constants/constants";
import type {  JobCounts } from "@/types/JobType";

interface JobMetricsProps {
  metrics: JobCounts;
  icon : React.ElementType
}

const JobMetricsComponent: React.FC<JobMetricsProps> = ({ metrics,icon }) => {
  const Icon = icon
  return (
    <div className="bg-white border border-gray-100 shadow-sm rounded-lg p-4 flex flex-col space-y-2">
      <div className="flex justify-between text-md text-gray-900">
        <span>{metrics.status}</span>
        <Icon/>
      </div>
      <span className="text-2xl font-semibold">{metrics.count}</span>
    </div>
  );
};

export default JobMetricsComponent;
