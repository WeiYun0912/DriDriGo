import React from "react";
import Banner from "./layout/Banner";
import Cards from "./layout/Cards";
import { motion } from "framer-motion/dist/framer-motion";
const Home = () => {
  return (
    <motion.div
      intial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.8 } }}
    >
      <Banner />
      <Cards />
    </motion.div>
  );
};

export default Home;
