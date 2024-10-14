"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MediaQuery } from "@/lib/helpers/mediaQuery";
import React from "react";
import { Button } from "@/components/ui/button";
import { Mails, Phone, NotebookTabs } from "lucide-react";

type Props = {};

const ContactSection = (props: Props) => {
  const { isDesktopOrLaptop, isTabletOrMobile } = MediaQuery();

  return (
    <section
      id="contacts"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #e2e2e2, #e2e2e2, #c6bcde, #b193d5, #a369c7, #9934b3)",
      }}
      className="pt-24 pb-10 min-h-screen"
    >
      <div className="page_alignment bg-[#121212] shadow-md shadow-black/40 flex gap-x-12 flex-col lg:flex-row text-white p-10 md:px-14 rounded-xl">
        <div
          className={`w-full flex-1 flex flex-col md:ml-auto ${
            isTabletOrMobile && "page_alignment mb-5"
          } my-8 md:mt-0`}
        >
          <h4 className="font-cabin text-[#e1e1e1] font-semibold text-lg lg:text-xl">
            Send us a quick message!
          </h4>
          <p className="mb-4 text-sm md:text-base text-[#e1e1e1]/80 ">
            by filling up your details we will able to contact you asap.
          </p>
          <div className="relative mb-4">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="mt-2"
            />
          </div>
          <div className="relative mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-2"
            />
          </div>
          <div className="relative mb-4">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Type your message here"
              className="mt-2"
            />
          </div>
          <Button variant={"primary"} size={"sm"}>
            Send message
          </Button>
          <p className="text-xs text-[#e1e1e1]/60 mt-3">
            By sending us a message, you will also be added to our mailing list.
            You can unsubscribe at any time.{" "}
          </p>
        </div>
        <div
          className={`${
            isDesktopOrLaptop ? "flex flex-col" : "page_alignment"
          } flex-1`}
        >
          <h4 className="font-cabin text-[#e1e1e1] mt-10 md:mt-0 font-semibold text-lg lg:text-xl">
            Get in Touch
          </h4>
          <h1 className="font-cabin text-[white] font-bold mt-5 text-3xl md:text-4xl lg:text-5xl">
            Let's Start a <span className="text-[#D162ED]">Conversation </span>
          </h1>
          <h3 className="font-inter text-[#e1e1e1]/80 mt-5 text-sm md:text-base">
            We're eager to hear from you. Reach out via email, phone, or visit
            us at our office. Our team is available to provide the information
            and support you need.
          </h3>

          {isDesktopOrLaptop && (
            <div className="w-full h-[500px] md:h-full mt-10 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.7923684168236!2d-75.52908261662712!3d39.15670389862257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7657e0f270c79%3A0x3cc77cd9d14827e8!2s8%20The%20Green%2C%20Dover%2C%20DE%2019901!5e0!3m2!1sen!2sus!4v1718884414694!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{
                  filter: "grayscale(1) contrast(1.5) opacity(0.4)",
                }}
                className="absolute inset-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="bg-white relative py-6 rounded shadow-md">
                <div className="flex flex-wrap">
                  <div className="lg:w-1/2 px-6">
                    <NotebookTabs className="h-5 w-5 text-[#9934b3]" />{" "}
                    <h3 className="mt-1 text-[#1C1C1C] text-sm font-inter font-semibold">
                      USA
                    </h3>
                    <p className=" text-[#1C1C1C]/80 text-xs font-inter font-semibold">
                      8 THE GREEN STREET, DOVER, KENT 19901
                    </p>
                  </div>
                  <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <p className="text-[#1C1C1C]/80 text-xs font-inter font-semibold flex items-center gap-x-2">
                      <Mails className="h-5 w-5 text-[#9934b3]" />{" "}
                      <span>sales@shiavnski.in</span>
                    </p>
                    <p className="text-[#1C1C1C]/80 text-xs mt-2 font-inter font-semibold flex items-center gap-x-2">
                      <Phone className="h-5 w-5 text-[#9934b3]" /> +91
                      7880058811
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-[#1C1C1C] text-sm font-inter font-semibold">
                    India
                  </h3>
                  <p className=" text-[#1C1C1C]/80 text-xs font-inter font-semibold">
                    82, First Floor, Shagun shankar, Tilak Path, Near Bank of
                    India, Rajwada, Indore, Madhya Pradesh 452004
                  </p>
                </div>
              </div>
            </div>
          )}

          {isTabletOrMobile && (
            <div className="bg-white relative py-6 mt-10 rounded shadow-md">
              <div className="flex flex-wrap">
                <div className="lg:w-1/2 px-6">
                  <NotebookTabs className="h-5 w-5 text-[#9934b3]" />{" "}
                  <h3 className="mt-1 text-[#1C1C1C] text-sm font-inter font-semibold">
                    USA
                  </h3>
                  <p className=" text-[#1C1C1C]/80 text-xs font-inter font-semibold">
                    8 THE GREEN STREET, DOVER, KENT 19901
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <p className="text-[#1C1C1C]/80 text-xs font-inter font-semibold flex items-center gap-x-2">
                    <Mails className="h-5 w-5 text-[#9934b3]" />{" "}
                    <span>sales@shiavnski.in</span>
                  </p>
                  <p className="text-[#1C1C1C]/80 text-xs mt-2 font-inter font-semibold flex items-center gap-x-2">
                    <Phone className="h-5 w-5 text-[#9934b3]" /> +91 7880058811
                  </p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-[#1C1C1C] text-sm font-inter font-semibold">
                  India
                </h3>
                <p className=" text-[#1C1C1C]/80 text-xs font-inter font-semibold">
                  82, First Floor, Shagun shankar, Tilak Path, Near Bank of
                  India, Rajwada, Indore, Madhya Pradesh 452004
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
