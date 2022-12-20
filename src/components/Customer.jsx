import React from 'react'

function Customer(props) {
  const onClick = () => {
    props.setShowCustomerInformation();
    props.setCustomerID(props.id);
    console.log("Opening customer");
  }
  return (
    <div className='customer' onClick={onClick}>
        <div>
            <i className="bi bi-person-badge customerIcon"></i>
        </div>
        <div>
            <h2> {props.name} {props.lastName}</h2>
            <p> {props.phone} </p>
            <p> {props.email} </p>
            <p> {props.address} </p>
        </div>
        <div>
            <i className="bi bi-chevron-compact-right arrowIcon"></i>
        </div>
    </div>
  )
}

export default Customer
