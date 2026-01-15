import ProjectDetails from "@/components/project-details";

interface PageProps {
  params: {
    id: string;
  };
}

async function Page({ params }: PageProps) {
  const { id } = await params;

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
      <ProjectDetails id={id} />
    </div>
  );
}

export default Page;
