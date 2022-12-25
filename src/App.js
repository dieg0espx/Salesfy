import { db } from "../src/config/connection.jsx";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  getDoc,
  updateDoc,
  doc,
  addDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Customer from "./components/Customer.jsx";
import { async } from "@firebase/util";
import Header from "./components/Header.jsx";
import SideMenu from "./components/SideMenu.jsx";
import UserOverall from "./components/UserOverall.jsx";
import CustomerInformation from "./components/CustomerInformation.jsx";
import NewCustomer from "./components/NewCustomer.jsx";

function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "customers");

  const [showMenu, setShowMenu] = useState(false);
  const [showCustomerInformation, setShowCustomerInformation] = useState(false);
  const [showNewCustomer, setShowNewCustomer] = useState(false);
  const [customerID, setCustomerID] = useState();

  const [userName, setUserName] = useState();
  const [userLastName, setUserLastName] = useState();
  const [userSales, setUserSales] = useState();

  //FETCHING DATA FROM FIREBASE
  const getUser = async() =>{
    const q = query(collection(db, "users"), where("name", "==", 'Diego'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // console.log(doc.data().name);
      setUserName(doc.data().name);
      setUserLastName(doc.data().lastName);
      setUserSales(doc.data().sales);
    });
  };
  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    const database = query(collection(db, "customers"));
    onSnapshot(database, () => {
      getUsers();
      getUser();
    });
  }, []);







  return (
    <div className="App">
      <Header setShowMenu={()=>setShowMenu(!showMenu)}/>
      <SideMenu setShowMenu={()=>setShowMenu(!showMenu)} showMenu={showMenu}/>
      <UserOverall name={userName} lastName={userLastName} sales={userSales}/>
      <CustomerInformation showCustomerInformation={showCustomerInformation} setShowCustomerInformation={()=>setShowCustomerInformation(false)} id={customerID}/>
      <NewCustomer showNewCustomer={showNewCustomer} setShowNewCustomer={()=>setShowNewCustomer(false)} />
     

      {users.map((user) => {
        return (
          <div>
            <Customer
              id={user.id}
              name={user.name}
              lastName={user.lastName}
              phone={user.phone}
              email={user.email}
              address={user.workAddress}
              setShowCustomerInformation={()=>setShowCustomerInformation(true)}
              setCustomerID={(id)=>setCustomerID(id)}
            />
          </div>
        );
      })}


    <button className="btn-newCustomer" onClick={()=>setShowNewCustomer(!showNewCustomer)}> <i className="bi bi-person-plus-fill"></i> </button>
    </div>
  );
}

export default App;
