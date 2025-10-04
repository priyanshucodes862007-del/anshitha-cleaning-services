"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import MaskedDiv from "./MaskedDiv";
import { ArrowBigDown, ArrowBigLeft, ArrowDown } from "lucide-react";
import ServiceCard from "./ServiceCard";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ServiceStack = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const cardsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  const servicesData = [
    {
      id: 1,
      services: [
        {
          title: "Carpet & Rug Cleaning",
          description:
            "Deep cleaning for all types of carpets and rugs. Removes dirt, stains, and allergens to leave your carpets fresh and hygienic.",
          image:
            "https://api.photon.aremedia.net.au/wp-content/uploads/sites/12/media/21117/cleaner.jpg?fit=1500%2C1000",
        },
        {
          title: "Upholstery Cleaning",
          description:
            "Professional cleaning for sofas, chairs, and other upholstered furniture. Restores freshness and removes odors effectively.",
          image:
            "https://www.taskbird.com/_next/image?url=https%3A%2F%2Fstark-shiny-house.media.strapiapp.com%2FAirbnb_cleaner_ceceaee334.jpg&w=3840&q=75",
        },
      ],
    },
    {
      id: 2,
      services: [
        {
          title: "Window Cleaning",
          description:
            "Crystal-clear cleaning for residential and commercial windows. Removes grime, dust, and streaks for a spotless finish.",
          image:
            "https://www.joinsafeworkforce.com/wp-content/uploads/2024/07/Cleaners-image-1440x1080.png",
        },
        {
          title: "Tile & Grout Cleaning",
          description:
            "Specialized cleaning for tiles and grout lines to remove tough stains, mold, and mildew, restoring the shine of your floors.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqMGtlrrd2vCy-p9jj0FBf6aW54CFhPgO5zoiRo9aOlazUoUGL6dUs9gMJZ0M79YsR4Lk&usqp=CAU",
        },
      ],
    },
    {
      id: 3,
      services: [
        {
          title: "Office Cleaning",
          description:
            "Comprehensive office cleaning services including floors, desks, restrooms, and common areas. Maintain a clean and healthy workplace.",
          image:
            "https://www.taskbird.com/_next/image?url=https%3A%2F%2Fstark-shiny-house.media.strapiapp.com%2FAirbnb_cleaner_ceceaee334.jpg&w=3840&q=75",
        },
        {
          title: "Post-Construction Cleaning",
          description:
            "Thorough cleaning after construction or renovation. Removes dust, debris, and leftover materials for a ready-to-use space.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRiJyIwFYkfBh1Ks08pNahj1QTTrDAb8jebmiGcpz-yypbt12jUM9ROLrJ3gGOjzl6ZYE&usqp=CAU",
        },
      ],
    },
    {
      id: 4,
      services: [
        {
          title: "Deep Home Cleaning",
          description:
            "Intensive cleaning for your entire home, including kitchens, bathrooms, bedrooms, and living areas. Perfect for seasonal or special cleaning.",
          image:
            "https://www.joinsafeworkforce.com/wp-content/uploads/2024/07/Cleaners-image-1440x1080.png",
        },
        {
          title: "Commercial Cleaning",
          description:
            "Professional cleaning solutions for shops, restaurants, and commercial spaces to maintain hygiene and a great impression for clients.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqMGtlrrd2vCy-p9jj0FBf6aW54CFhPgO5zoiRo9aOlazUoUGL6dUs9gMJZ0M79YsR4Lk&usqp=CAU",
        },
      ],
    },
  ];

  // Flatten services for mobile single column layout
  const mobileServicesData = servicesData.flatMap((rowData) =>
    rowData.services.map((service) => ({
      ...service,
      id: `${rowData.id}-${service.title}`,
    }))
  );

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const cards = cardsRef.current;
    const totalCards = cards.length;

    if (totalCards === 0) return;

    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${window.innerHeight * totalCards}`,
        scrub: 1,
        pin: sectionRef.current,
        anticipatePin: 1,
      },
    });

    cards.forEach((card, index) => {
      if (index === 0) return;

      animation.fromTo(
        card,
        { yPercent: 100, scale: 0.95 },
        { yPercent: 0, scale: 1, duration: 1 },
        index - 1
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [isMobile]);

  return (
    <div ref={triggerRef}>
      <div
        ref={sectionRef}
        className="relative h-screen flex items-center justify-center"
      >
        {/* Desktop Layout - 2 columns */}
        {!isMobile &&
          servicesData.map((rowData, rowIndex) => (
            <div
              key={rowData.id}
              ref={(el) => (cardsRef.current[rowIndex] = el)}
              className="absolute inset-0 flex items-center justify-center"
              style={{ zIndex: rowIndex + 1 }}
            >
              <div className="w-full px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-2 gap-4 md:gap-8">
                  {rowData.services.map((service, serviceIndex) => (
                    <Link key={serviceIndex} href='#'>
                     <ServiceCard key={serviceIndex} service={service} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

        {/* Mobile Layout - Single column */}
        {isMobile &&
          mobileServicesData.map((service, serviceIndex) => (
            <div
              key={service.id}
              ref={(el) => (cardsRef.current[serviceIndex] = el)}
              className="absolute inset-0 flex items-center justify-center"
              style={{ zIndex: serviceIndex + 1 }}
            >
              <div className="w-full px-4 max-w-md mx-auto">
                <div className="service-card relative">
                  <div className="service-card-button absolute bottom-4 right-4 rounded-2xl shadow-md p-3 z-10">
                    <ArrowDown className="rotate-220" size={40} />
                  </div>
                  <MaskedDiv
                    maskType="type-1"
                    className="bg-surface h-full min-h-96"
                  >
                    <div className="service-card-child p-4 flex flex-col gap-3 h-full">
                      <div className="image w-full mx-auto aspect-video overflow-hidden rounded-2xl">
                        <Image
                          className="w-full h-full object-cover"
                          src={service.image}
                          alt={service.title}
                          width={400}
                          height={300}
                        />
                      </div>
                      <h2 className="text-xl oxygen font-semibold">
                        {service.title}
                      </h2>
                      <p className="w-11/12 text-base text-wrap line-clamp-4 roboto font-medium">
                        {service.description}
                      </p>
                    </div>
                  </MaskedDiv>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ServiceStack;
