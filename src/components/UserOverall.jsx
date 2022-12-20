import userEvent from "@testing-library/user-event";
import React from "react";

function UserOverall(props) {
  return (
    <div className="userOverall">
      <div className="userOverallContent">
        <div>
            <h2> {props.name} {props.lastName}</h2>
            <p> Overall Sales</p>
            <h3> ${props.sales} </h3>
        </div>
        <i className="bi bi-bar-chart graphIcon"></i>
      </div>
    </div>
  );
}

export default UserOverall;
