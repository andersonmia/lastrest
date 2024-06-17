import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import Sidebar from "../components/Sidebar";

const UpdateEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    firstname: "",
    lastname: "",
    NID: "",
    tel: "",
    dpt: "",
    position: "",
    laptop_manufacturer: "",
    laptop_model: "",
    SN: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/employees/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setEmployee(response.data);
      } catch (error) {
        console.error("Error fetching employee:", error);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleChange = (key, value) => {
    setEmployee({ ...employee, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/employees/update/${id}`, employee, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      navigate("/employees");
    } catch (error) {
      setError(error.response?.data?.error || "An unexpected error occurred");
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <section className="bg-gray-50 dark:bg-gray-900 h-screen flex items-center justify-center w-full">
        <div className="p-8 space-y-4 md:space-y-6 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[40%] border">
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-4 md:space-y-6 mb-4">
              <FormInput
                type="text"
                name="firstname"
                value={employee.firstname}
                onChange={(e)=>{
                    handleChange("firstname", e.target.value)
                }}
                placeholder="First Name"
                required
              />
              <FormInput
                type="text"
                name="lastname"
                value={employee.lastname}
                onChange={(e)=>{
                    handleChange("lastname", e.target.value)
                }}
                placeholder="Last Name"
                required
              />
              <FormInput
                type="text"
                name="NID"
                value={employee.NID}
                onChange={(e)=>{
                    handleChange("NID", e.target.value)
                }}
                placeholder="National ID"
                required
              />
              <FormInput
                type="text"
                name="tel"
                value={employee.tel}
                onChange={(e)=>{
                    handleChange("tel", e.target.value)
                }}
                placeholder="Telephone"
                required
              />
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Department
                </label>
                <select
                  name="dpt"
                  value={employee.dpt}
                  onChange={(e)=>{
                    handleChange("dpt", e.target.value)
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="HR">HR</option>
                  <option value="Sales">Sales</option>
                  <option value="Marketing">Marketing</option>
                  <option value="IT">IT</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Position
                </label>
                <select
                  name="position"
                  value={employee.position}
                  onChange={(e)=>{
                    handleChange("position", e.target.value)
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="Manager">Manager</option>
                  <option value="Trainer">Trainer</option>
                  <option value="Associate">Associate</option>
                  <option value="Analyst">Analyst</option>
                  <option value="Researcher">Researcher</option>
                  <option value="Developer">Developer</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-6 mb-4">
              <FormInput
                type="text"
                name="laptop_manufacturer"
                value={employee.laptop_manufacturer}
                onChange={(e)=>{
                    handleChange("laptop_manufacturer", e.target.value)
                }}
                placeholder="Laptop Manufacturer"
                required
              />
              <FormInput
                type="text"
                name="laptop_model"
                value={employee.laptop_model}
                onChange={(e)=>{
                    handleChange("laptop_model", e.target.value)
                }}
                placeholder="Laptop Model"
                required
              />
              <FormInput
                type="text"
                name="SN"
                value={employee.SN}
                onChange={(e)=>{
                    handleChange("SN", e.target.value)
                }}
                placeholder="Serial Number"
                required
              />
            </div>

            <FormButton text="Update employee" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default UpdateEmployee;
