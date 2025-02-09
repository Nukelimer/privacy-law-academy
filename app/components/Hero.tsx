'use client'

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
const hero_video = "/videos/hero_video.mp4";
const hero__video = "/videos/hero__video.mp4";
const hero_credit_card = "/videos/hero_credit_card.mp4";
function Hero() {
  
  const videoArr = [hero__video, hero_credit_card, hero_video];
  const [videoSrc, setvideoSrc] = useState(videoArr[0])
  
  
  useEffect(() => {
    
    const position = Math.floor(Math.random() * videoArr.length);
    setvideoSrc(videoArr[position])
  
  
  }, [])
  

  return (
    <>
      <div className="relative h-full">
        <div className="absolute top-0 bg-transparent h-full w-full "></div>
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          contextMenu="return false"
          itemType="video/mp4"
          className="max-h-[75vh] w-full object-cover select-none pointer-events-none"></video>
      </div>

      <div className="w-full inset-0 hid den bg-gradient-to-b from-black/10 to-white/55 dark:from-white/15 dark:to-black/40 py-8">
        <div className="inset-0 bg-gradient-to-t from-background  via-background/80 to-background/5 lg:flex lg:flex-col lg:justify-center lg:px-24">
          <h2 className="px-4 my-12 text-3xl sm:text-4xl md:text-5xl lg:text-7xl bg-gradient-to-r from-red-500 via-blue-500 to-green-500 bg-clip-text text-transparent animate-[rgbText_1s_infinite_alternate] lg:text-center">
            Boost Your Career with Privacy Law Certification
          </h2>

          <p className="px-4  text-xl md:text-2xl lg:text-4xl md:w-[90%] lg:w-[100%] lg:text-center">
            Companies are actively seeking certified privacy professionals. Gain
            in-demand skills in data protection, cybersecurity law, and
            regulatory compliance to stand out and advance your career in the
            privacy field.
          </p>

          <Button
            variant={"outline"}
            className="mt-8 mx-4 py-8 px-8 flex flex-col items-center justify-center w-fit text-lg lg:text-2xl lg:mx-auto">
            Take a course now
          </Button>
        </div>
      </div>
    </>
  );
}

export default Hero;
