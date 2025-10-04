import { ArrowDown } from "lucide-react";
import React from "react";
import MaskedDiv from "./MaskedDiv";
import Image from "next/image";

const ServiceCard = ({service}) => {
  return (
    <>
      <div className="service-card relative">
        <div className="service-card-button absolute bottom-0 right-0 rounded-2xl shadow-md p-4 z-10">
          <ArrowDown className="rotate-220" size={50} />
        </div>
        <MaskedDiv maskType="type-1" className="bg-surface h-full min-h-80">
          <div className="service-card-child p-6 flex flex-col gap-2 h-full">
            <div className="image w-full mx-auto aspect-video overflow-hidden rounded-2xl">
              <Image
                className="w-full h-full object-cover"
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
              />
            </div>
            <h2 className="text-xl md:text-2xl oxygen font-semibold ">
              {service.title}
            </h2>
            <p className="w-11/12 text-lg md:text-base text-wrap line-clamp-5 roboto  ">
              {service.description}
            </p>
          </div>
        </MaskedDiv>
      </div>
    </>
  );
};

export default ServiceCard;
