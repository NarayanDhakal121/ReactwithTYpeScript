import React from 'react'
import { Box, Text } from "@chakra-ui/react";
import Specialist from './Specialist';

import Header from '../Header'
import Section from '../Section'
import Footer from '../Footer';

import './Home.css'
const Home = () => {
  return (
 <>
 
    <Header/>
    <Section/>
    <Specialist/>
    <Footer/>
   
 </>
  )
}

export default Home