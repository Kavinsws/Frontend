import { useState } from "react";
import CreateJobComponent from "../components/CreateJobComponent";

export interface JobCreateForm {
  title: string;
  department: string;
  location: string;
  status: string;
  headcount: number;
  description: string;
  requirements: string;
}

export const CreateJobContainer = () => {
  const [formdata, setFormdData] = useState<JobCreateForm>({
    title: "",
    department: "",
    location: "",
    status: "open",
    headcount: 1,
    description: "",
    requirements: "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: JobCreateForm) => {
    setLoading(true);
    setSuccess(false);
    try {
      setSuccess(true);
      setFormdData({
        title: "",
        department: "",
        location: "",
        status: "",
        headcount: 1,
        description: "",
        requirements: "",
      });
    } catch (error) {
      console.error("Failed to create Job");
    } finally {
      setLoading(false);
    }

    const handleChange = (
      field: keyof JobCreateForm,
      value: string | number
    ) => {
      setFormdData((prev) => ({
        ...prev,
        [field]: value,
      }));
    };
  };
  return <CreateJobComponent />;
};
