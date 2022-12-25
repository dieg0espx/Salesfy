import React from 'react'
import { db } from "../config/connection.jsx";
import { useState, useEffect } from "react";
import { collection, getDocs, getDoc, updateDoc, doc, addDoc, onSnapshot, query, where,} from "firebase/firestore";
import NewSale from './NewSale.jsx';
import MySales from './MySales.jsx';

function CustomerInformation(props) {
      const [customerID, setCustomerID] = useState();
      const [customer, setCustomer] = useState([]);
      const [showNewSale, setShowNewSale] = useState(false);

    const getUser = async() =>{
        const q = query(collection(db, "customers"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          if(props.id == doc.id){
            setCustomerID(props.id);
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
      <div className="navigationBar">
        <button className="btnBack" onClick={()=>props.setShowCustomerInformation()}> <i className="bi bi-chevron-left"></i> Back </button>
        <button className="btnPlus" onClick={()=>setShowNewSale(!showNewSale)}> <i className="bi bi-plus-square-fill"></i></button>
      </div>

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
                <i className="bi bi-house-door locationIcon"></i>
                <p>{customer.homeAddress}</p>
            </div>
            <div className='grid-contact'>
                <i className="bi bi-buildings locationIcon"></i>
                <p>{customer.workPlace}</p>
            </div>
            <div className='grid-contact'>
                <i className="bi bi-geo-alt locationIcon"></i>
                <p>{customer.workAddress}</p>
            </div>
        </div>
        <MySales />

        <NewSale showNewSale={showNewSale} setShowNewSale={()=>setShowNewSale(false)} customerID={customerID} />
        
    </div>
  )
}

export default CustomerInformation
