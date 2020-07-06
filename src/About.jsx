import React from "react";
import web from "../src/about.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () => {
	return (
		<div>
        <Common name="Welcome to About Page" imgsrc={web} visit='Contact' 
         btname="Contact Now"/>
		</div>
		);
};

export default About;