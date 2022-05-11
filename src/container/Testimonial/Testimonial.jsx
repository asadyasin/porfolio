import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Testimonial.scss";

export const Testimonial = () => {
  return <div id="testimonial">
    Testimonial
    </div>;
};
export default AppWrap(Testimonial, 'testimonial');
