import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  ChevronRight,
  Calendar,
  Users,
  Globe,
  Zap,
  Cpu,
  Layers,
} from "lucide-react";
import { ChevronLeft, Facebook, Twitter, Instagram } from "lucide-react";
import Header from "./Header";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import EventsSection from "./EventsSection";
import ActivitiesSection from "./ActivitiesSection";
import Footer from "./Footer";
import ScrollToTop from "../ScrollToTop";

export default function GroboticsApp() {
  return (
    <div className="bg-[#111827] text-white min-h-screen w-full">
      <ScrollToTop></ScrollToTop>
      <Header />
     
      <Hero />
      <AboutSection />
      <EventsSection />
      <ActivitiesSection />
      <Footer />
    </div>
  );
}
