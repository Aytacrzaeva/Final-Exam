import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Header from "../../components/Header"
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Footer1 from '../../components/Footer1'
import Footer from '../../components/Footer'
import "./Detail.scss"
const Detail = () => {
  const {id}= useParams()
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get(`http://localhost:8080/furnish/${id}`).then((res)=>{
      setData(res.data)
    })
  })
  return (
    <>
        <Header/>
        <Helmet>
            <title>Detail Pages</title>
        </Helmet>
    <div className="detail">
      <img src="https://preview.colorlib.com/theme/furnish/images/gallery-4.jpg" alt="" />
        <h1>{data.title}</h1>
        <p>{data.desc}</p>
        <p>${data.price}</p>
        <Link to="/"> <button>Back to Home</button></Link>
        
    </div>
    <Footer1/>
    <Footer/>
    </>
  )
}

export default Detail