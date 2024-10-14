"use client";

import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {};

const TeacherForm = (props: Props) => {
  const [teacherForm, setTeacherForm] = useState({
    teacherFirstName: "",
    teacherLastName: "",
    teacherDegree: "",
    teacherProfession: "",
    teacherDOB: "",
    teacherResume: "",
    teacherContact: "",
    teacherEmail: "",
  });

  const [teacherSubmitted, setTeacherSubmitted] = useState(false);

  const handleTeacherChange = (e: any) => {
    const { name, value } = e.target;
    setTeacherForm({
      ...teacherForm,
      [name]: value,
    });
  };

  const handleTeacherSubmit = (e: any) => {
    e.preventDefault();
    // Simulate API call or any other logic here
    console.log("Teacher Form Data:", teacherForm);
    setTeacherSubmitted(true);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="primary" size="sm">
            As Faculty
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] bg-gray-950 p-6 rounded-lg shadow-lg text-gray-200 border-none">
          <h2 className="text-2xl font-bold mb-4">Teacher Form</h2>
          {teacherSubmitted && (
            <p className="text-green-500 mb-4">Submit Successfully!</p>
          )}
          <form onSubmit={handleTeacherSubmit}>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="teacherFirstName"
                    className="block text-sm font-medium mb-1 font-inter"
                  >
                    First Name
                  </label>
                  <Input
                    id="teacherFirstName"
                    name="teacherFirstName"
                    type="text"
                    placeholder="Enter your first name"
                    value={teacherForm.teacherFirstName}
                    onChange={handleTeacherChange}
                    className="bg-gray-700 border border-[#a727c6] rounded-md p-2 w-full focus:outline-none focus:ring focus:border-purple-400"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="teacherLastName"
                    className="block text-sm font-medium mb-1 font-inter"
                  >
                    Last Name
                  </label>
                  <Input
                    id="teacherLastName"
                    name="teacherLastName"
                    type="text"
                    placeholder="Enter your last name"
                    value={teacherForm.teacherLastName}
                    onChange={handleTeacherChange}
                    className="bg-gray-700 border border-[#a727c6] rounded-md p-2 w-full focus:outline-none focus:ring focus:border-purple-400"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="teacherDegree"
                    className="block text-sm font-medium mb-1 font-inter"
                  >
                    Degree
                  </label>
                  <select
                    id="teacherDegree"
                    name="teacherDegree"
                    value={teacherForm.teacherDegree}
                    onChange={handleTeacherChange}
                    className="bg-gray-700 border border-[#a727c6] rounded-md p-2 w-full focus:outline-none focus:ring focus:border-purple-400"
                  >
                    <option value="">Select Degree</option>
                    <option value="btech">B.Tech</option>
                    <option value="bcom">B.Com</option>
                    <option value="ba">B.A.</option>
                    <option value="bsc">B.Sc.</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="teacherProfession"
                    className="block text-sm font-medium mb-1 font-inter"
                  >
                    Profession
                  </label>
                  <select
                    id="teacherProfession"
                    name="teacherProfession"
                    value={teacherForm.teacherProfession}
                    onChange={handleTeacherChange}
                    className="bg-gray-700 border border-[#a727c6] rounded-md p-2 w-full focus:outline-none focus:ring focus:border-purple-400"
                  >
                    <option value="">Select Profession</option>
                    <option value="teacher">Teacher</option>
                    <option value="professor">Professor</option>
                    <option value="doctor">Doctor</option>
                    <option value="engineer">Engineer</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="teacherDOB"
                    className="block text-sm font-medium mb-1 font-inter"
                  >
                    Date of Birth
                  </label>
                  <Input
                    id="teacherDOB"
                    name="teacherDOB"
                    type="date"
                    value={teacherForm.teacherDOB}
                    onChange={handleTeacherChange}
                    className="bg-gray-700 border border-[#a727c6] rounded-md p-2 w-full focus:outline-none focus:ring focus:border-purple-400"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="teacherResume"
                    className="block text-sm font-medium mb-1 font-inter"
                  >
                    Resume
                  </label>
                  <Input
                    id="teacherResume"
                    name="teacherResume"
                    type="file"
                    onChange={handleTeacherChange}
                    className="bg-gray-700 border border-[#a727c6] rounded-md p-2 w-full focus:outline-none focus:ring focus:border-purple-400"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="teacherContact"
                  className="block text-sm font-medium mb-1 font-inter"
                >
                  Contact
                </label>
                <Input
                  id="teacherContact"
                  name="teacherContact"
                  type="text"
                  placeholder="Enter your contact number"
                  value={teacherForm.teacherContact}
                  onChange={handleTeacherChange}
                  className="bg-gray-700 border border-[#a727c6] rounded-md p-2 w-full focus:outline-none focus:ring focus:border-purple-400"
                />
              </div>
              <div>
                <label
                  htmlFor="teacherEmail"
                  className="block text-sm font-medium mb-1 font-inter"
                >
                  Email
                </label>
                <Input
                  id="teacherEmail"
                  name="teacherEmail"
                  type="email"
                  placeholder="Enter your email"
                  value={teacherForm.teacherEmail}
                  onChange={handleTeacherChange}
                  className="bg-gray-700 border border-[#a727c6] rounded-md p-2 w-full focus:outline-none focus:ring focus:border-purple-400"
                />
              </div>
              <Button
                type="submit"
                variant="primary"
                size="sm"
                className="w-full"
              >
                Submit
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TeacherForm;
