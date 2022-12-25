import React from 'react'
import { db } from "../config/connection.jsx";
import { useState, useEffect } from "react";
import { collection, getDocs, getDoc, updateDoc, doc, addDoc, onSnapshot, query, where,} from "firebase/firestore";

import useSound from 'use-sound';
import boopSfx from '../success.mp3';


function NewCustomer(props) {

    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [homeAddress, setHomeAddress] = useState();
    const [workPlace, setWorkPlace] = useState();
    const [workAddress, setWorkAddress] = useState();

    const [showConfirmation, setShowConfirmation] = useState(false);
    const [play] = useSound(boopSfx);

    async function save(){
        console.log("Saving New Customer ...");
        const docRef = await addDoc(collection(db, "customers"), {
            name: name,
            phone: phone,
            email:email,
            homeAddress:homeAddress, 
            workPlace:workPlace, 
            workAddress:workAddress
          });
        console.log("Document written with ID: ", docRef.id);
        setShowConfirmation(true);
        play(); 
    }

    function closeConfirmation(){
        setName("");
        setPhone("");
        setEmail("");
        setHomeAddress("");
        setWorkPlace("");
        setWorkAddress("");
        setShowConfirmation(false);
    }    
   return (
    <div className='newCustomer' style={{display: props.showNewCustomer ? "block" : "none"}}>
        <button className="btnBack" onClick={()=>props.setShowNewCustomer()}> <i className="bi bi-chevron-left"></i> Back </button>
        <div className="wrapper-newCustomer">
            <h2> New Customer </h2>
            <p> Enter the new customer Information: </p>

            <input className={"inputs"} value={name}  onChange={e => setName(e.target.value)} type={"text"} placeholder={"Full Name"}></input>
            <input className={"inputs"} value={phone} onChange={e => setPhone(e.target.value)} type={"phone"} placeholder={"Phone"}></input>
            <input className={"inputs"} value={email} onChange={e => setEmail(e.target.value)} type={"email"} placeholder={"Email address"}></input>
            <input className={"inputs"} value={homeAddress} onChange={e => setHomeAddress(e.target.value)} type={"text"} placeholder={"Home Address"}></input>
            <input className={"inputs"} value={workPlace} onChange={e => setWorkPlace(e.target.value)} type={"text"} placeholder={"Work Place "}></input>
            <input className={"inputs"} value={workAddress} onChange={e => setWorkAddress(e.target.value)} type={"text"} placeholder={"Work Address"}></input>
            <button className='btnSave' onClick={()=> save()}> Save </button>
        </div>
        <div className="confirmation-newCustomer" style={{display: showConfirmation? "block":"none"}}>
            <i className="bi bi-check-circle"></i>
            <p> New customer saved successfully !</p>
            <button onClick={closeConfirmation}> Close </button>
        </div>
    </div>
  )
}

export default NewCustomer
