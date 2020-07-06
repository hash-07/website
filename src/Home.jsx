import React from "react";
import web from "../src/laptop.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
	return (
		<div>
		<h3> **Site under Construction** </h3>
		<Common name="Grow yours skills with" imgsrc={web} visit='Service' 
         btname="Get Started"/>

		</div>
		);
};

export default Home;