
import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import type { alljob } from "@/types/JobType";
import { getAllJobs, updateJob } from "@/apis/JobApi";
import EditJobComponent from "@/components/jobs/EditJobComponent";

const EditJobContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<alljob | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      setIsLoading(true);
      try {
        if (location.state && (location.state as alljob).id === id) {
          const job = location.state as alljob;
          setFormData(job);
        } else {
          const jobsData = await getAllJobs();
          const job = jobsData.data.find((j) => j.id === id);
          if (job) setFormData(job);
          else setError("Job not found");
        }
      } catch {
        setError("Failed to load job data");
      } finally {
        setIsLoading(false);
      }
    };
    fetchJob();
  }, [id, location.state]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) =>
      prev
        ? { ...prev, [name]: type === "number" ? Number(value) : value }
        : prev
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;
    setIsLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await updateJob(id as string, formData);
      setSuccess(true);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update job");
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid =
    formData &&
    formData.title.trim() !== "" &&
    formData.department.trim() !== "" &&
    formData.location.trim() !== "" &&
    formData.description.trim() !== "" &&
    formData.requirements.trim() !== "" &&
    formData.headcount > 0;

  if (!formData) return <div>Loading...</div>;

  return (
    <EditJobComponent
      loading={isLoading}
      error={error}
      jobs={formData}
      success={success}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onNavigate={() => navigate("/newJob")}
      onNavigateJobs={()=>navigate("/")}
      isFormValid={!isFormValid}
      navigatePrev={() => navigate(-1)}
      navigateNext={() => navigate(1)}
    />
  );
};

export default EditJobContainer;