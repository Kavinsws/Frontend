import { JOB_METRICS_LOGO } from "@/constants/constants";
import type { JobMetrics } from "@/types/JobType";

interface JobMetricsProps {
  metrics: JobMetrics;
}

const JobMetricsComponent: React.FC<JobMetricsProps> = ({ metrics }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-2">
      <div className="flex justify-between text-md text-gray-400">
        <span>{metrics.status}</span>
        <span>{JOB_METRICS_LOGO}</span>
      </div>
      <span className="text-2xl font-semibold">{metrics.count}</span>
    </div>
  );
};

export default JobMetricsComponent;
