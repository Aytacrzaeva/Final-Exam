import React, { useEffect, useState } from "react";
import "./Crud.scss";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";
const Crud = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [dummys, setDummy] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc"); 

  useEffect(() => {
    axios.get("http://localhost:8080/furnish/").then((res) => {
      setData(res.data);
    });
  },[searchValue==="",dummys]);

  return (
    <div className="crud">
        <div className="crud__item">
        
        <input type="text" placeholder="Search..." onChange={(e)=>{
            setSearchValue(e.target.value)
            setData(data.filter((item)=> item.title.toLowerCase().includes(searchValue.toLowerCase())))
        }}/>
        <button onClick={() => {
                    const sortedData = [...data];

                    if (sortOrder === "asc") {
                        sortedData.sort((a, b) => a.price - b.price);
                        setSortOrder("desc");
                    } else {
                        sortedData.sort((a, b) => b.price - a.price);
                        setSortOrder("asc");
                    }

                    setData(sortedData);
                }}>
                    Sort By Price
                </button>


        </div>
    <div className="crud__cards">
      {data && data.map((item, index) => {
        return (
          <div
            className="crud__cards__card"
            style={{backgroundColor:`${item.color}`}}
          >
            <div className="crud__cards__card__img">
              <img
                src="https://i.pinimg.com/564x/22/fc/42/22fc42ea629da18b2bd56a5423137338.jpg"
                alt=""
              />
            </div>
            <div className="crud__cards__card__items">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <p>{item.price}$</p>
              <div className="crud__cards__card__items__buttons">
                <button onClick={(e)=>{
                    axios.delete(`http://localhost:8080/furnish/${item._id}`).then((res)=>{
                        setDummy(!dummys)
                        toast.success("item deleted")
                    })
                }}>Delete</button>
                <Link to={`${item._id}`}><button>Go to Detail</button></Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    <Toaster/>
    </div>
    
  );
};

export default Crud;
