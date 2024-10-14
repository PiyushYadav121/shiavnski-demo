import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { roles } from "@/lib/constants/jobs";
import axios from "axios";
import { toast } from "sonner";

interface FormDataState {
  name: string;
  email: string;
  resume: File | null;
}

const CareerPage: React.FC = () => {
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    email: "",
    resume: null,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value, files } = e.target as HTMLInputElement;

    if (id === "resume" && files) {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = async (e: FormEvent, position: string) => {
    e.preventDefault();

    const data = new FormData();
    data.append(
      "data",
      JSON.stringify({
        name: formData.name,
        email: formData.email,
        position: position,
      })
    );
    if (formData.resume) {
      data.append("file", formData.resume);
    }

    try {
      setFormSubmitted(true);
      const response = axios
        .post("http://www.shiavnski.com/api/v1/jobs", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((data) => {
          if (data) {
            if (fileInputRef.current) {
              fileInputRef.current.value = "";
            }
            setFormData({ name: "", email: "", resume: null });
            setFormSubmitted(false);
          }
        })
        .catch((err) => console.log(err));

      toast.promise(response, {
        loading: "Preparing to send your message",
        success: "Message sent successfully!",
        error: "Error while sending message",
      });

      // Reset form after submission
      setTimeout(() => {
        setFormData({ name: "", email: "", resume: null });
        setFormSubmitted(false);
      }, 2000); // Reset form after 2 seconds
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #161616, #181818, #191919, #1a1a1a, #1c1c1c)",
      }}
      className="min-h-screen text-white"
    >
      <div className="page_alignment py-12">
        <h1 className="text-4xl md:5xl lg:6xl font-extrabold font-poppins mb-3 text-white">
          JOIN<span style={{ color: "#A727C6" }}> OUR TEAM</span>
        </h1>
        <p className="text-lg md:xl lg:2xl mb-10 font-inter text-[#E2E2E2]">
          Innovate, Grow, and Make a Difference
        </p>
        <p className="text-base md:text-lg mb-2 font-inter text-[#E2E2E2]/80 ">
          At <span style={{ color: "#A727C6" }}>Shivanski Technologies</span>,
          we’re passionate about driving sustainable business growth and
          innovation. Our team specializes in product development, market entry
          strategies, Go-To-Market planning, and impactful communication. If
          you’re excited about leveraging data, analytics, and AI to address
          environmental challenges and foster business success, we invite you to
          explore our dynamic career opportunities today.
        </p>
        <p className="text-base md:text-lg mb-6 font-inter underline-offset-2 text-[#E2E2E2]/80 ">
          <span style={{ color: "#A727C6", textDecoration: "underline" }}>
            Join us
          </span>{" "}
          and be part of a forward-thinking company committed to making a
          positive impact!
        </p>

        {/* Role-wise Application Section */}
        <div className="mt-12 mb-15">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cabin font-extrabold mb-10 mt-20 text-white">
            Current Openings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, index) => (
              <div
                key={index}
                className="bg-black/60 shadow-md rounded-md px-8 py-6 flex flex-col"
              >
                <div className="flex-1 mb-3">
                  <div className="wdt-content-icon mt-4 mb-3">
                    <Send className="h-7 w-7 text-[#a727c6]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{role.title}</h3>
                  <p className="text-[#E2E2E2]/80 ">{role.description}</p>
                  <p className="text-[#E2E2E2]/80  ">Qualification:</p>
                  <ul className="text-[#E2E2E2]/80  mt-2">
                    {role.qualifications.map((qual, qIndex) => (
                      <li key={qIndex}>• {qual}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button className="primary w-full">Apply Now</Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-96 bg-[#121212] border border-[#2a2a2a] rounded-md p-4 flex items-center justify-center">
                      <div className="space-y-4 w-full max-w-xs">
                        <h4 className="font-medium leading-none text-white text-center">
                          Apply for {role.title}
                        </h4>
                        <form
                          onSubmit={(e) => {
                            handleSubmit(e, role.title);
                          }}
                          className="grid gap-4"
                        >
                          <div className="grid grid-cols-1 gap-4">
                            <Label htmlFor="name" className="text-white">
                              Name
                            </Label>
                            <Input
                              id="name"
                              placeholder="Enter your name"
                              value={formData.name}
                              onChange={handleChange}
                              className="h-9 bg-[#1e1e1e]/80 text-[#c1c1c1]/80 border-gray-300 rounded-md px-4"
                              required
                            />
                          </div>
                          <div className="grid grid-cols-1 gap-4">
                            <Label htmlFor="email" className="text-white">
                              Email
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="Enter your email"
                              value={formData.email}
                              onChange={handleChange}
                              className="h-9 bg-[#1e1e1e]/80 text-[#c1c1c1]/80 border-gray-300 rounded-md px-4"
                              required
                            />
                          </div>
                          <div className="grid grid-cols-1 gap-4 text-[#c1c1c1]/80">
                            <Label htmlFor="resume" className="text-white">
                              Resume
                            </Label>
                            <Input
                              id="resume"
                              type="file"
                              onChange={handleChange}
                              required
                              ref={fileInputRef}
                            />
                          </div>
                          <Button
                            variant="primary"
                            size="sm"
                            type="submit"
                            className={`w-full bg-[#a727c6] hover:bg-[#a727c6] text-white mt-4 ${
                              formSubmitted
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                            }`}
                            disabled={formSubmitted}
                          >
                            {formSubmitted ? "Submitting..." : "Submit"}
                          </Button>
                        </form>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
