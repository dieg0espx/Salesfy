import React from 'react'
import { db } from "../config/connection.jsx";
import { useState, useEffect } from "react";
import { collection, getDocs, getDoc, updateDoc, doc, addDoc, onSnapshot, query, where,} from "firebase/firestore";

import useSound from 'use-sound';
import boopSfx from '../success.mp3';

function NewSale(props) {

  const [productID, setProductID] = useState();
  const [finalPrice, setFinalPrice] = useState();
  const [noPayments, setNoPayments] = useState();
  const [firstPayment, setFirstPayment] = useState();


  const saveNewSale = async () =>{
    console.log("Saving New Sale ...");
    const docRef = await addDoc(collection(db, "sales"), {
      customerID:props.customerID, 
      productID:productID, 
      finalPrice:finalPrice, 
      noPayments: noPayments, 
      firstPayment:firstPayment
    });
    console.log("New Sale Saved: @", docRef.id);
    closeConfirmation();
  }

  function closeConfirmation(){
    setProductID("");
    setFinalPrice("");
    setNoPayments("");
    setFirstPayment("");
  }

  return (
    <div className='newSale' style={{display: props.showNewSale? "block":"none"}}>
        <div className="navigationBar">
            <button className="btnBack" id="left" onClick={()=>props.setShowNewSale()}> <i className="bi bi-chevron-left"></i> Back </button>
            <h2> New Sale </h2>
            {/* <button className="btnSaveNavigation" id="right" onClick={()=>props.setShowNewSale()}> Save </button> */}
        </div>
        
        <div className="formNewSale">
            <input className={"inputs"}  type={"text"}   value={productID}    onChange={e => setProductID(e.target.value)} placeholder={"Product ID"}></input>
            <input className={"inputs"}  type={"number"} value={finalPrice}   onChange={e => setFinalPrice(e.target.value)} placeholder={"Final Price"}></input>
            <input className={"inputs"}  type={"tel"}    value={noPayments}   onChange={e => setNoPayments(e.target.value)} placeholder={"No of payments"}></input>
            <input className={"inputs"}  type={"number"} value={firstPayment} onChange={e => setFirstPayment(e.target.value)} placeholder={"1st Patment"}></input>
            {props.customerID}
            <button className='btnSave' onClick={saveNewSale}> Save </button>
        </div>
    </div>
  )
}

export default NewSale
