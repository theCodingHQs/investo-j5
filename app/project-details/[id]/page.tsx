import ProjectDetails from "@/components/project-details";
import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div
      className="w-full bg-white text-[#32353B]"
      style={{
        backgroundImage: "url('/home-bg.png')",
        backgroundSize: "100vw 100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 0",
      }}
    >
      <ProjectDetails id={params.id} />
    </div>
  );
};

export default Page;
