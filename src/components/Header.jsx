import React from 'react'

function Header(props) {
  return (
    <div className='header'>
      <div id="headerLeft">
          <i className="bi bi-shop salesIcon"></i> Salesfy
        </div>
        <div>
          <i
            className="bi bi-list showMenuIcon"
            style={{ display: props.showMenu ? "none" : "block" }}
            onClick={()=> props.setShowMenu()}
          />
          <i
            className="bi bi bi-x hideMenuIcon"
            style={{ display: props.showMenu ? "block" : "none" }}
            onClick={()=> props.setShowMenu()}
          />
        </div>
    </div>
  )
}

export default Header
