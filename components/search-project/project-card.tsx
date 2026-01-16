import { Project as P } from "@/api/types/project";
import { MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import Pricing from "../pricing";

const ProjectCard = ({ project }: { project: P }) => {
  const router = useRouter();
  const navigateTo = (path: string) => {
    router.push(path);
  };
  return (
    <button
      key={project._id}
      onClick={() => navigateTo(`/project-details/${project.slug}`)}
      className="cursor-pointer group hover:bg-primary/5 bg-white min-w-[30%] flex-1 rounded-xl border flex flex-col justify-between   overflow-hidden hover:shadow-xl transition"
    >
      <div className="">
        <img
          src={project?.gallery?.[0]?.location}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
        />

        <div className="p-4">
          <h2 className="text-lg text-start font-semibold group-hover:text-primary text-gray-700">
            {project.title}
          </h2>
          <div className="flex items-center flex-wrap gap-2 justify-between">
            {(project?.locality?.city || project?.locality?.locality) && (
              <div className="flex gap-1 items-center text-gray-600">
                <MapPin size={18} />
                <span className=" flex flex-col  mt-1">
                  <span className="text-sm">
                    {project?.locality?.city}, {project?.locality?.locality}
                  </span>
                </span>
              </div>
            )}

            {/* {(project.minimum_price || project.maximum_price) && (
              <div className="text-md flex w-full justify-end gap-4 font-semibold mt-2 text-gray-700">
                {project.minimum_price && (
                  <span className="flex gap-1 items-center">
                    &#8377; {project.minimum_price}
                  </span>
                )}
                {project.minimum_price && project.maximum_price && "-"}
                {project.maximum_price && (
                  <span className="flex gap-1 items-center">
                    &#8377; {project.maximum_price}
                  </span>
                )}
              </div>
            )} */}
            <Pricing
              className="group-hover:text-primary group-hover:bg-primary/5 w-fit  px-1 py-0.5 rounded ms-auto"
              price={project.minimum_price || 0}
              maximum_price={project.maximum_price}
            />
          </div>
          {/* Units Section */}
        </div>
      </div>
      <div className="p-4 ">
        <table className="w-full text-start text-gray-500">
          <thead>
            <tr>
              <th className="font-normal text-start">unit</th>
              <th className="font-normal text-start">size</th>
              <th className="font-normal text-start">price</th>
            </tr>
          </thead>
          <tbody>
            {/* {item.units.map((unit, index) => (
                      <tr key={unit.unit}>
                        <td>{unit.unit}</td>
                        <td>{unit.size}</td>
                        <td>{unit.price}</td>
                      </tr>
                    ))} */}
          </tbody>
        </table>
      </div>
    </button>
  );
};

export default ProjectCard;
