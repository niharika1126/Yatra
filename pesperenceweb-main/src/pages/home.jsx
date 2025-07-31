import React from 'react';
import Hero from '../components/Hero';
import SoulTour from "../components/SoulTour";
import TopSpritual from "../components/TopSpritual";
import PlanTrip from "../components/PlanTrip";
import RecentGallery from "../components/RecentGallery";
import Stat from "../components/Stat";
import ExploreSpirituality from "../components/ExploreSpirituality";
import Subscription from "../components/Subscription";
const Home = () => {
  return (
    <div>
      <Hero />
      <SoulTour />
      <TopSpritual />
      <PlanTrip />
      <RecentGallery />
      <Stat />
      <ExploreSpirituality />
      <Subscription />
    </div>
  );
};

export default Home;
