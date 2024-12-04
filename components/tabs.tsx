"use client";

import { Tabs, Tab } from "@nextui-org/tabs";
import ContactPage from "@/app/contact/page";
import HomePage from "@/app/home/page";
import ResumePage from "@/app/resume/page";
import WorkPage from "@/app/work/page";
import { ContactIcon, HomeIcon, ResumeIcon, WorkIcon } from "./icons";

export function TabsComponent() {
  return (
    <div className="flex flex-col">
      <Tabs
        aria-label="Options"
        variant="bordered"
        className="justify-end"
        classNames={{
          tabList:
            "relative rounded-2xl border border-divider py-1 px-7 box-border",
          cursor: "bg-gradient-to-tr from-pink-500 to-yellow-500 text-white",
          tab: "w-20 h-16",
        }}
      >
        <Tab
          key="home"
          className="rounded-3xl w-"
          title={
            <div className="flex flex-col items-center">
              <HomeIcon />
              <span>Home</span>
            </div>
          }
        >
          <HomePage />
        </Tab>
        <Tab
          key="resume"
          className="rounded-3xl"
          title={
            <div className="flex flex-col items-center">
              <ResumeIcon />
              <span>Resume</span>
            </div>
          }
        >
          <ResumePage />
        </Tab>
        <Tab
          key="work"
          className="rounded-3xl"
          title={
            <div className="flex flex-col items-center">
              <WorkIcon />
              <span>Work</span>
            </div>
          }
        >
          <WorkPage />
        </Tab>
        <Tab
          key="contact"
          className="rounded-3xl"
          title={
            <div className="flex flex-col items-center">
              <ContactIcon />
              <span>Contact</span>
            </div>
          }
        >
          <ContactPage />
        </Tab>
      </Tabs>
    </div>
  );
}
