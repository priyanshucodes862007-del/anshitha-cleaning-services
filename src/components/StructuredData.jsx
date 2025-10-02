"use client";
import React from "react";

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Anshitha Cleaning Services",
    description:
      "Best cleaning services in Hyderabad, India. Professional, fast, and reliable cleaning services with 100% customer satisfaction.",
    url: "https://anshithacleaning.com",
    telephone: "+91-8057607415",
    priceRange: "₹699+",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "17.3850",
      longitude: "78.4867",
    },
    openingHours: "Mo-Su 08:00-20:00",
    serviceArea: {
      "@type": "City",
      name: "Hyderabad",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Home Cleaning",
            description: "Complete home cleaning services",
          },
          price: "699",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Office Cleaning",
            description: "Professional office cleaning services",
          },
          price: "999",
          priceCurrency: "INR",
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.4",
      reviewCount: "500",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Sarah Johnson",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        reviewBody:
          "Exceptional service! My home has never looked better. The team was professional and thorough.",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Michael Chen",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        reviewBody:
          "Outstanding cleaning quality. They pay attention to every detail. Highly recommend!",
      },
    ],
    sameAs: [
      "https://www.facebook.com/anshithacleaning",
      "https://www.instagram.com/anshithacleaning",
      "https://wa.me/918057607415",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
