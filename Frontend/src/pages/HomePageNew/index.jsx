import React from "react";
import { Helmet } from "react-helmet";
import Header1 from "../../components/Header1";
import CommerceSection from "./OurTechersCommerceSection";
import ExploreCoursesSection from "./ExploreCoursesSection";
import HeroSection from "./HeroSection";
import OurTeachersSection from "./OurTeachersScienceSection";
import StatisticsSection from "./StatisticsSection";
import OurTechersArtSection from "./OurTechersArtSection";

export default function HomePageNewPage() {
 

  return (
    <>
      <Helmet>
        <title>IMS-Web</title>
        <meta
          name="description"
          content="Discover our online education platform offering a variety of courses in Biological Science, Physical Science, and Commerce."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col w-full bg-gradient-to-r from-blue-300 to-green-300">
        <Header1 className="w-full bg-indigo-900" />

        {/* Main Content */}
        <div className="flex flex-col flex-grow">
          
         

          {/* Sections */}
          <div className="flex flex-col flex-grow space-y-10 p-4 sm:p-8">
            <HeroSection />
            <StatisticsSection />
            <ExploreCoursesSection />
            <OurTeachersSection />
            <CommerceSection />
           <OurTechersArtSection /> 
          </div>
        </div>
      </div>
    </>
  );
}