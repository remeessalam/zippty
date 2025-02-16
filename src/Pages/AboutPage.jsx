import React, { useState } from "react";
import Banner from "../Component /Banner";
import Experience from "../Component /Experience";
import WhyChooseUs from "../Component /WhyChooseUs";
import OurMission from "../Component /OurMission";
import OurTeam from "../Component /OurTeam";
import aboutvideo from "../assets/video/aboutsectionvideo.mp4";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";
import Testimonials from "../Component /Testimonials";

const AboutPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div>
      <Banner />
      <div className="wrapper">
        <h2 className="title-heading">About our store</h2>
        <div className="grid md:grid-cols-2">
          <p className="mt-3">
            At Zippty, we understand that pets are more than just
            animals—they're cherished members of the family. Our passion for
            animals drives us to provide top-quality pet care products that help
            your furry friends live their healthiest, happiest lives. Whether
            you have a playful puppy, a wise senior dog, or an adventurous
            kitten, we’re here to offer everything you need to make sure your
            pets feel loved, cared for, and comfortable.
          </p>
          <p>
            With years of experience in the pet care industry, we’ve seen the
            difference the right products can make. That’s why we’ve dedicated
            ourselves to offering premium pet food, fun toys, reliable grooming
            supplies, and effective health solutions for both cats and dogs. At
            Zippty, we believe every pet deserves the very best, and we’re
            committed to making that a reality for you.
          </p>
        </div>
      </div>
      <Experience />
      <WhyChooseUs />
      <OurMission />
      <OurTeam />
      <div className="wrapper">
        <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden">
          {/* Video Player */}
          <ReactPlayer
            url={aboutvideo}
            playing={isPlaying}
            controls={false}
            muted={true}
            width="100%"
            height="100%"
            className="aspect-video"
            onClick={togglePlayPause}
          />

          {/* Play/Pause Button Overlay */}
          {!isPlaying && (
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              onClick={togglePlayPause}
            >
              <div className="w-16 h-16 bg-orange-500 rounded-full flex justify-center items-center">
                <FaPlay className="text-white w-8 h-8" />
              </div>
            </div>
          )}
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default AboutPage;
