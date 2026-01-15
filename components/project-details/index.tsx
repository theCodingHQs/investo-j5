"use client";
import React from "react";
import Connectivity from "./Connectivity";
import Amenities from "./Amenities";
import { useProjectListing } from "@/hooks/useGetProject";
import PropertyDetailsHeroSection from "./hero";

const ProjectDetails = ({ id }: { id: string }) => {
  // const { data: project = {} } = useGetProject("godrej-woodsville");
  const project = {};
  return (
    <div className="w-full max-w-7xl mx-auto py-6">
      {/* Top layout: Left images + right form */}
      <PropertyDetailsHeroSection />
      {/* ABOUT THIS PROJECT */}
      <section className="px-6 md:px-16 mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold">
          About this Project
        </h2>

        <p className="text-gray-700 mt-4 leading-relaxed">
          Shapoorji Pallonji Sensorium Vista is an elegant Project by Shapoorji
          Pallonji who are one of the renowned developers in Pune. <br />
          <br />
          It is located in Hinjewadi, Pune West and well connected by major
          road(s) like Hinjewadi Road, Mumbai–Pune Expressway. Shapoorji
          Pallonji Sensorium Vista is spread across 10.5 acre. The Project has
          132 Units. The status of the Project is Mid Stage.
        </p>

        <button className="text-blue-600 mt-2 font-medium flex items-center gap-1">
          Show more <span className="text-lg">▾</span>
        </button>

        {/* Amenities */}
        <div className="flex flex-wrap gap-3 mt-5">
          <span className="px-4 py-2 bg-gray-100 rounded-md text-sm font-medium">
            INFINITY POOL
          </span>
          <span className="px-4 py-2 bg-gray-100 rounded-md text-sm font-medium">
            COMMUNITY CENTER
          </span>
          <span className="px-4 py-2 bg-gray-100 rounded-md text-sm font-medium">
            OPEN KITCHEN
          </span>
          <span className="px-4 py-2 bg-gray-100 rounded-md text-sm font-medium">
            SERVANT ROOM
          </span>
          <span className="px-4 py-2 bg-gray-100 rounded-md text-sm font-medium">
            24/7 GYM
          </span>
        </div>
      </section>
      {/* FLOOR PLANS */}
      <section className="mt-12 bg-[#e8f1f7] py-12 px-6 md:px-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Floor plans</h2>
        <p className="text-gray-700 mt-1">26 floor plans available</p>

        {/* Tabs */}
        <div className="flex gap-6 mt-6 text-gray-600 text-lg font-medium border-b border-gray-300 pb-3">
          <button className="text-black font-semibold border-b-2 border-black pb-1">
            All
          </button>
          <button className="hover:text-black">2 BHK</button>
          <button className="hover:text-black">3 BHK</button>
          <button className="hover:text-black">4 BHK</button>
          <button className="hover:text-black">5 BHK</button>
        </div>

        {/* Floor Plan Cards */}
        <div className="mt-8 space-y-8">
          {/* Card 1 */}
          <div className="flex items-start justify-between bg-white rounded-xl p-4 shadow-sm">
            <div className="flex gap-4">
              <img
                src="floor-plan.png"
                className="h-24 object-cover rounded-md"
              />
              <div>
                <p className="text-lg font-semibold">Rs. 68.03 L</p>
                <p className="text-gray-600 text-sm">
                  561 sq.ft. (52.12 sq.m.)
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  10 apartments available from May 25
                </p>
              </div>
            </div>
            <button className="text-gray-700 text-2xl">›</button>
          </div>

          {/* Card 2 */}
          <div className="flex items-start justify-between bg-white rounded-xl p-4 shadow-sm">
            <div className="flex gap-4">
              <img
                src="floor-plan.png"
                className="h-24 object-cover rounded-md"
              />
              <div>
                <p className="text-lg font-semibold">Rs. 71.85 L</p>
                <p className="text-gray-600 text-sm">
                  561 sq.ft. (52.12 sq.m.)
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  10 apartments available from May 25
                </p>
              </div>
            </div>
            <button className="text-gray-700 text-2xl">›</button>
          </div>
        </div>
      </section>
      <section className="bg-[#072C3D] p-4 flex flex-col">
        <h2 className="text-2xl md:text-3xl text-white">Master Plan</h2>
        <div className=" bg-blue-100 mt-4 flex-1">
          <img className="" src="/master-plan.png" alt="" />
        </div>
      </section>
      <Connectivity project={project} />
      <Amenities project={project} />
    </div>
  );
};

export default ProjectDetails;
