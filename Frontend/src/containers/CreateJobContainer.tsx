import { useState } from "react";
import type { Jobs } from "../types/JobType";
import CreateJobcomponent from "../components/jobs/Createjobcomponent";
import { createJob } from "../apis/JobApi";

const initialform: Jobs = {
  title: "",
  department: "",
  location: "",
  status: "OPEN",
  headcount: 1,
  description: "",
  requirements: "",
};

const CreateJobContainer: React.FC = () => {
  const [formData, setFormData] = useState<Jobs>(initialform);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {

    await createJob(formData);
      setSuccess(true);
      setFormData(initialform); 
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create job");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CreateJobcomponent
      loading={isLoading}
      error={error}
      jobs={formData}
      success={success}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default CreateJobContainer;
