import React from "react";
import { Helmet } from "react-helmet";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Add.scss";
import Header from "../../components/Header"
import { toast, Toaster } from "react-hot-toast";
import Footer1 from '../../components/Footer1'
import Footer from '../../components/Footer'
export default function Add() {
  return (
    <>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <Header/>
      <div className="formik">
        <div className="form">
          <Formik
            initialValues={{
              price: null,
              title: null,
              desc: null,
              color: null,
            }}
            validationSchema={Yup.object({
              price: Yup.number().required("price is required"),
              title: Yup.string().required("title is required"),
              desc: Yup.string().required("desc is required"),
              color: Yup.string().required("color is required"),
            })}
            onSubmit={(values, { resetForm }) => {
              axios.post("http://localhost:8080/furnish/", values).then((res) => {
                toast.success("Added new Card");
              });
              resetForm();
            }}
          >
            {({ values, handleChange, handleSubmit, dirty }) => (
              <form onSubmit={handleSubmit}>
                <label htmlFor="price">Price:</label>
                <input
                  type="number"
                  placeholder="price"
                  id="price"
                  value={values.price}
                  onChange={handleChange}
                />
                <label htmlFor="title" onSubmit={handleSubmit}>
                  Title:
                </label>
                <input
                  type="text"
                  placeholder="title"
                  id="title"
                  value={values.title}
                  onChange={handleChange}
                />

                <label htmlFor="desc">Description:</label>
                <input
                  type="text"
                  placeholder="desc"
                  id="desc"
                  value={values.desc}
                  onChange={handleChange}
                />

                <label htmlFor="color">Color:</label>
                <input
                  type="text"
                  placeholder="color"
                  id="color"
                  value={values.color}
                  onChange={handleChange}
                />
                <button type="submit" disabled={!dirty}>
                  Add
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
      <Toaster />
      <Footer1/>
      <Footer/>
    </>
  );
}