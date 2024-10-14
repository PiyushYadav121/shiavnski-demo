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

const StudentForm = (props: Props) => {
  const [studentForm, setStudentForm] = useState({
    studentFirstName: "",
    studentLastName: "",
    studentNumber: "",
    studentYearLevel: "",
    studentDegreeProgram: "",
    studentEmail: "",
  });

  const [studentSubmitted, setStudentSubmitted] = useState(false);

  const handleStudentChange = (e: any) => {
    const { name, value } = e.target;
    setStudentForm({
      ...studentForm,
      [name]: value,
    });
  };

  const handleStudentSubmit = (e: any) => {
    e.preventDefault();
    // Simulate API call or any other logic here
    console.log("Student Form Data:", studentForm);
    setStudentSubmitted(true);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary" size="sm">
            As Student
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] bg-gray-950 p-6 rounded-lg shadow-lg text-gray-200 border-none">
          <h2 className="text-2xl font-bold mb-4">Student Form</h2>
          {studentSubmitted && (
            <p className="text-green-500 mb-4">Submit Successfully!</p>
          )}
          <form onSubmit={handleStudentSubmit}>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="studentFirstName"
                    className="block text-sm font-medium mb-1 font-inter"
                  >
                    First Name
                  </label>
                  <Input
                    id="studentFirstName"
                    name="studentFirstName"
                    type="text"
                    placeholder="Enter your first name"
                    value={studentForm.studentFirstName}
                    onChange={handleStudentChange}
                    className="bg-gray-700 border border-[#a727c6] rounded-md p-2 w-full focus:outline-none focus:ring focus:border-[#a727c6]"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="studentLastName"
                    className="block text-sm font-medium mb-1 font-inter"
                  >
                    Last Name
                  </label>
                  <Input
                    id="studentLastName"
                    name="studentLastName"
                    type="text"
                    placeholder="Enter your last name"
                    value={studentForm.studentLastName}
                    onChange={handleStudentChange}
                    className="bg-gray-700 border border-[#a727c6] rounded-md p-2 w-full focus:outline-none focus:ring focus:border-purple-400"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="studentNumber"
                  className="block text-sm font-medium mb-1 font-inter"
                >
                  Student Number
                </label>
                <Input
                  id="studentNumber"
                  name="studentNumber"
                  type="text"
                  placeholder="Enter your student id"
                  value={studentForm.studentNumber}
                  onChange={handleStudentChange}
                  className="bg-gray-700 border border-[#a727c6] rounded-md p-2 w-full focus:outline-none focus:ring focus:border-[#a727c6]/80"
                />
              </div>
              <div>
                <label
                  htmlFor="studentYearLevel"
                  className="block text-sm font-medium mb-1 font-inter"
                >
                  Year Level
                </label>
                <select
                  id="studentYearLevel"
                  name="studentYearLevel"
                  value={studentForm.studentYearLevel}
                  onChange={handleStudentChange}
                  className="bg-gray-700 border border-[#a727c6] rounded-md p-2 w-full focus:outline-none focus:ring focus:border-[#a727c6]/80"
                >
                  <option value="">Select Year Level</option>
                  <option value="1">Year 1</option>
                  <option value="2">Year 2</option>
                  <option value="3">Year 3</option>
                  <option value="4">Year 4</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div>
                <label
                  htmlFor="studentDegreeProgram"
                  className="block text-sm font-medium mb-1 font-inter"
                >
                  Degree Program
                </label>
                <select
                  id="studentDegreeProgram"
                  name="studentDegreeProgram"
                  value={studentForm.studentDegreeProgram}
                  onChange={handleStudentChange}
                  className="bg-gray-700 border border-[#a727c6] rounded-md p-2 w-full focus:outline-none focus:ring focus:border-[#a727c6]/80"
                >
                  <option value="">Select Degree Program</option>
                  <option value="computerScience">Computer Science</option>
                  <option value="engineering">Engineering</option>
                  <option value="businessAdmin">Business Administration</option>
                  <option value="biology">Biology</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div>
                <label
                  htmlFor="studentEmail"
                  className="block text-sm font-medium mb-1 font-inter"
                >
                  Email
                </label>
                <Input
                  id="studentEmail"
                  name="studentEmail"
                  type="email"
                  placeholder="Enter your email"
                  value={studentForm.studentEmail}
                  onChange={handleStudentChange}
                  className="bg-gray-700 border border-[#a727c6] rounded-md p-2 w-full focus:outline-none focus:ring focus:border-[#a727c6]/80"
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

export default StudentForm;
