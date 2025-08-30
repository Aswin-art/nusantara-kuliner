/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useRef } from 'react';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

const testimonialsRow1 = [
  {
    name: "Dimas Santosa",
    role: "Desainer Grafis, Studio Cipta Rasa",
    text: "Dagingnya empuk, bumbunya meresap. Sangat cocok untuk stok makanan di freezer, apalagi di hari kerja yang sibuk.",
    avatar: "/img/user.jpg",
  },
  {
    name: "Maya Setiawan",
    role: "Konsultan Bisnis, Nusantara Rasa",
    text: "Kemasannya rapi, higienis, dan mudah disimpan. Anak-anak saya juga suka ayamnya karena pedasnya pas.",
    avatar: "/img/user.jpg",
  },
  {
    name: "Rina Yuliani",
    role: "Editor, Majalah Kuliner Nusantara",
    text: "Rica bebek-nya luar biasa! Pedasnya enak, dagingnya lembut, dan aromanya bikin selera makan bertambah.",
    avatar: "/img/user.jpg",
  },
];

const testimonialsRow2 = [
  {
    name: "Fajar Aditya",
    role: "Software Engineer",
    text: "Saya tinggal sendiri di kota. Produk ini solusi banget, praktis aja, makanannya selalu enak dan fresh.",
    avatar: "/img/user.jpg",
  },
  {
    name: "Sari Indrawati",
    role: "Ibu Rumah Tangga",
    text: "Anak-anak saya sangat suka dengan rasa ayam gepreknya. Mudah disiapkan dan rasanya tidak kalah dengan restoran.",
    avatar: "/img/user.jpg",
  },
  {
    name: "Budi Hartono",
    role: "Marketing Manager",
    text: "Praktis untuk bekal kantor. Cukup dipanaskan sebentar sudah siap disantap. Rasanya selalu konsisten enak.",
    avatar: "/img/user.jpg",
  },
];

type Testimonial = {
  name: string;
  role: string;
  text: string;
  avatar: string;
};

export default function TestimonialSection() {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer1 = scrollRef1.current;
    const scrollContainer2 = scrollRef2.current;
    if (!scrollContainer1 || !scrollContainer2) return;
    
    let animationFrame1: number, animationFrame2: number;
    let start1: number | null = null, start2: number | null = null;
    const speed1 = 0.05; 
    const speed2 = 0.05; 
    const offset2 = 2000; 

    function step1(ts: number) {
      if (start1 === null) start1 = ts;
      const elapsed = ts - start1;
      if (!scrollContainer1) return;
      
      const scrollAmount = (speed1 * elapsed) % (scrollContainer1.scrollWidth - scrollContainer1.clientWidth + 320);
      scrollContainer1.scrollLeft = scrollAmount;
      
      animationFrame1 = requestAnimationFrame(step1);
    }

    function step2(ts: number) {
      if (start2 === null) start2 = ts + offset2;
      const elapsed = ts - start2;
      if (!scrollContainer2 || elapsed < 0) {
        animationFrame2 = requestAnimationFrame(step2);
        return;
      }
      
      const scrollAmount = (speed2 * elapsed) % (scrollContainer2.scrollWidth - scrollContainer2.clientWidth + 320);
      scrollContainer2.scrollLeft = scrollAmount;
      
      animationFrame2 = requestAnimationFrame(step2);
    }

    // Start animations with a small delay to ensure elements are rendered
    setTimeout(() => {
      animationFrame1 = requestAnimationFrame(step1);
      animationFrame2 = requestAnimationFrame(step2);
    }, 100);

    return () => {
      if (animationFrame1) cancelAnimationFrame(animationFrame1);
      if (animationFrame2) cancelAnimationFrame(animationFrame2);
    };
  }, []);

  const TestimonialCard = ({
    testimonial,
    index,
  }: { testimonial: Testimonial; index: number }) => (
    <div
      key={index}
  className="min-w-[280px] max-w-[280px] w-[280px] md:min-w-[320px] md:max-w-[320px] md:w-[320px] rounded-2xl border border-orange-50 bg-gray-50 p-5 md:p-6 px-6 md:px-8 flex flex-col justify-between relative transition-transform duration-500 flex-shrink-0 "
    >
      {/* <Quote className="text-orange-500 w-5 h-5 md:w-6 md:h-6 mb-3" fill="currentColor" /> */}
      <Image src="/icons/quote.png" alt="Quote" width={20} height={20} className="text-orange-500 w-5 h-5 md:w-6 md:h-6 mb-3" />
      <p className="text-gray-700 text-xs md:text-sm font-semibold mb-4 line-clamp-3 leading-relaxed">
        {testimonial.text}
      </p>
      <div className="flex items-center gap-3 mt-2">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
          <img src="/img/user.jpg" alt={testimonial.name} className="w-full h-full object-cover" />
        </div>
        <div className="min-w-0">
          <div className="font-semibold text-gray-900 text-sm md:text-base leading-tight truncate">
            {testimonial.name}
          </div>
          <div className="text-gray-500 text-xs leading-tight truncate">
            {testimonial.role}
          </div>
        </div>
      </div>
    </div>
  );

  return (
  <section className="w-full py-36 bg-white relative overflow-hidden">
  {/* Corner Decorations pakai gambar seperti about */}
  <img src="/img/corner.png" alt="corner" width={120} height={120} className="absolute top-0 left-0 z-0 mt-2 ml-2 md:mt-0 md:ml-0" />
  <img src="/img/corner.png" alt="corner" width={120} height={120} className="absolute bottom-0 right-0 rotate-180 z-0 mb-2 mr-2 md:mb-0 md:mr-0" />

      <div className="max-w-6xl mx-auto relative z-10 px-4">
        {/* Mobile: Stack Layout, Desktop: Grid Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left: Title & Info */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 lg:mb-6">
              Kisah <span className="text-orange-600">Rasa Nusantara</span>,<br />
              Dari Mereka Yang <span className="text-orange-600">Sudah Coba.</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg mb-4 lg:mb-6">
              Kata Mereka Tentang Nusantara Kuliner
            </p>
            
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <div className="flex -space-x-2 md:-space-x-3">
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                  <img src="/img/user.jpg" alt="avatar" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                  <img src="/img/user.jpg" alt="avatar" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                  <img src="/img/user.jpg" alt="avatar" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm md:text-lg border-2 border-white">
                  +
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="flex items-center gap-1 text-yellow-500">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                ))}
              </span>
              <p className="text-gray-700 font-medium text-sm md:text-base">(42)</p>
            </div>
          </div>

          {/* Right: Two Rows of Animated Testimonial Cards */}
          <div className="w-full space-y-3 md:space-y-4">
            {/* First Row */}
            <div className="relative w-full">
              <div
                ref={scrollRef1}
                className="flex gap-4 md:gap-6 overflow-x-hidden py-2"
                style={{
                  maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                }}
              >
                {/* Duplicate testimonials for seamless loop */}
                {[...testimonialsRow1, ...testimonialsRow1, ...testimonialsRow1].map((testimonial, index) => (
                  <TestimonialCard key={`row1-${index}`} testimonial={testimonial} index={index} />
                ))}
              </div>
            </div>

            {/* Second Row */}
            <div className="relative w-full">
              <div
                ref={scrollRef2}
                className="flex gap-4 md:gap-6 overflow-x-hidden py-2"
                style={{
                  maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)", 
                }}
              >
                {/* Duplicate testimonials for seamless loop */}
                {[...testimonialsRow2, ...testimonialsRow2, ...testimonialsRow2].map((testimonial, index) => (
                  <TestimonialCard key={`row2-${index}`} testimonial={testimonial} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        /* Hide scrollbar for all browsers */
        .overflow-x-hidden::-webkit-scrollbar {
          display: none;
        }
        .overflow-x-hidden {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}