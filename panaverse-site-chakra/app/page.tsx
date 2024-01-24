"use client";

import Footer from "./componenets/Footer";
import Header from "./componenets/Header";
import Banner from "./componenets/Home/page";
import Courses from "./componenets/courses/page";
import Team from "./componenets/team/page";

export default function Home() {
  return (
    <>
        <Header></Header>
        <Banner></Banner>        
        <Footer></Footer>
      {/* <Team></Team> */}
      {/* <Courses></Courses> */}
    </>
  );
}
