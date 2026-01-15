import SearchProject from "@/components/search-project";
import React from "react";

const Page = () => {
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
      <SearchProject />
    </div>
  );
};

export default Page;
