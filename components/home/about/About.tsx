import React from "react";

const About = () => {
  return (
    <section className="py-12 md:py-[75px] mx-auto max-w-4xl w-full px-4 ">
      {/* Heading: mobile smaller, desktop keeps original 65px */}
      <p className="font-medium md:text-[36px] text-[#32353B] text-center leading-snug md:leading-tight">
        <span className="block">
          Your dream home is just one connection away,
        </span>
        <span className="block text-black">
          let us bridge the gap to your perfect space
        </span>
      </p>

      {/* avatars: centered & smaller on mobile, original sizes on md+ */}
      <div className="flex items-center justify-center my-8 md:my-14">
        <img
          className="rounded-full w-14 md:w-[110px] aspect-square"
          src="/face/f1.png"
          alt="face img"
        />
        <img
          className="rounded-full -ml-4 md:-ml-6 w-14 md:w-[110px] aspect-square"
          src="/face/f2.png"
          alt="face img"
        />
        <img
          className="rounded-full -ml-4 md:-ml-6 w-14 md:w-[110px] aspect-square"
          src="/face/f3.png"
          alt="face img"
        />
        <img
          className="rounded-full -ml-4 md:-ml-6 w-14 md:w-[110px] aspect-square"
          src="/face/f4.png"
          alt="face img"
        />
      </div>

      {/* Body text: scaled down on mobile, desktop keeps large text */}
      <p className="text-base text-gray-700 leading-relaxed md:leading-relaxed max-w-4xl mx-auto">
        With InvestoXpert, it’s not just about finding a property—it’s about
        discovering a place where your story begins. We connect you to the best,
        ensuring you get more than just walls and a roof, but a home built on
        trust and expertise.
      </p>
    </section>
  );
};

export default About;
