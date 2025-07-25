import React from "react";
import BestSellerCard from "../assets/BestSellerCard";
import Categories from "../assets/Categories";
import Collection from "../assets/Collection";
import PromoBanner from "../assets/Promo";
import BottomNav from "../../components/Navbar";


function Homepage() {
  return (
    <div >
      <PromoBanner />
      <Categories />
      <BestSellerCard />
      <Collection />
      <BottomNav />
    </div>
  );
}

export default Homepage;
