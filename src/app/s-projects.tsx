import { ArrowRight } from "lucide-react";
import { projectData } from "./data/v-data";
import Link from "next/link";

export function HomeProjects() {
  return (
    <>
      <section className="mt-10 lg:mt-[180px]">
        <div className="max-w-[1440px] mx-auto p-8">
          <div className="flex flex-col gap-4 lg:flex-row-reverse lg:justify-between items-center w-full">
             <article className="flex justify-center items-center lg:justify-end w-full">
              <h1 className="text-black text-center lg:text-start font-semibold text-4xl lg:text-[50px]">
                {projectData.title}
              </h1>
            </article>
            <article className="flex flex-col justify-center gap-2 items-center lg:items-start lg:justify-start max-w-[509px]">
              <p className="text-center lg:text-start text-[#5A5A5A] text-base lg:text-xl">
                {projectData.description}
              </p>
              <Link
                className="flex items-center gap-2 text-base underline transition-all duration-700 hover:translate-x-4 cursor-pointer"
                href={projectData.href}
                target="_blank"
              >
                {projectData.btnText}
                <ArrowRight className="text-black -rotate-12" size={16} />
              </Link>
            </article>
          </div>
        </div>
        
      </section>
    </>
  );
}
