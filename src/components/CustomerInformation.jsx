import React from 'react'
import { db } from "../config/connection.jsx";
import { useState, useEffect } from "react";
import { collection, getDocs, getDoc, updateDoc, doc, addDoc, onSnapshot, query, where,} from "firebase/firestore";

function CustomerInformation(props) {
        const [customer, setCustomer] = useState([]);


    const getUser = async() =>{
        const q = query(collection(db, "customers"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          if(props.id == doc.id){
            setCustomer(doc.data((doc)));
          }
        });
      };
    
      useEffect(() => {
        const database = query(collection(db, "customers"));
        onSnapshot(database, () => {
          getUser();
        });
      });

      document.addEventListener('swiped-left', function(e) {
       alert("Hello");
    });

  return (
    <div className='customerInformation' style={{display: props.showCustomerInformation ? "block" : "none"}}>
        <button className="btnBack" onClick={()=>props.setShowCustomerInformation()}> <i className="bi bi-chevron-left"></i> Back </button>
        <div className='wrapper-customerInformation'>
            <h2>{customer.name}</h2>
            <h2>{customer.lastName}</h2>
            <br></br>
            <div className='grid-contact'>
                <i className="bi bi-telephone-plus phoneIcon"></i> 
                <p>{customer.phone}</p>
            </div>
            <div className='grid-contact'>
                <i className="bi bi-envelope-plus mailIcon"></i>
                <p>{customer.email}</p>
            </div>
            <div className='grid-contact'>
                <i className="bi bi-geo-alt locationIcon"></i>
                <p>{customer.address}</p>
            </div>
        </div>
     

    </div>
  )
}

export default CustomerInformation
