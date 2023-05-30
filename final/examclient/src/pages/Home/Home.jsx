import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../../components/Header'
import Section from '../../components/Section'
import Crud from '../../components/Crud'
import Section2 from '../../components/Section2'
import Section3 from '../../components/Section3'
import Section4 from '../../components/Section4'
import Footer1 from '../../components/Footer1'
import Footer from '../../components/Footer'
const Home = () => {
  return (
    <div>
        <Helmet>
            <title>Home Page</title>
        </Helmet>
        <Header/>
        <Section/>
        <Crud/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Footer1/>
        <Footer/>
    </div>
  )
}

export default Home
