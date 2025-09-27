"use client";
import { ArrowRight } from "lucide-react";
import { projectData } from "./data/v-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";

export function HomeProjects() {
  return (
    <section id="projects" className="mt-10 lg:mt-[180px]">
      <div className="max-w-[1440px] mx-auto p-8">
        <div className="flex flex-col gap-4 lg:flex-row-reverse lg:justify-between items-center w-full">
          <article className="flex justify-center items-center lg:justify-end w-full">
            <h1 className="text-black text-center lg:text-start font-semibold text-4xl lg:text-[50px]" data-aos="fade-up">
              {projectData.title}
            </h1>
          </article>
          <article className="flex flex-col justify-center gap-2 items-center lg:items-start lg:justify-start max-w-[509px]">
            <p className="text-center lg:text-start text-[#5A5A5A] text-base lg:text-xl" data-aos="fade-down">
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

      <main className="w-full mt-8">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
          }}
          spaceBetween={30}
          loop
        >
          {projectData.projects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <Link href={project.href} target="_blank" className="group relative block">
                {Image && (
                    <Image
                    src={project.img}
                    width={1400}
                    height={900}
                    alt=""
                    className="w-full h-[400px] lg:h-[700px] object-cover rounded-lg transition-transform ease-[cubic-bezier(0.4,0,0.2,1)] duration-1000 hover:scale-[1.1] overflow-hidden"
                />
                )}
                <div className="absolute inset-0 flex items-end overflow-hidden">
                  <div className="w-full translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out bg-black/60 p-6 rounded-lg">
                        <article className="flex flex-col justify-center items-center gap-4 p-4">
                        <h1 className="text-center text-white font-semibold text-3xl">
                        {project.btnText}
                        </h1>
                        <p className="text-center max-w-[500px] text-white/70">
                        {project.description}
                        </p>
                    </article>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </section>
  );
}
