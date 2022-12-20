import React from 'react'

function SideMenu(props) {
  return (
    <div>
      <div className="overlay" style={{ display: props.showMenu ? "block" : "none" }} onClick={() => props.setShowMenu()}></div>
      <div className="menu" style={{ display: props.showMenu ? "block" : "none" }}>
        <button> Ventas </button>
        <button> Clientes </button>
        <button> Cobranzas </button>        
      </div>
    </div>
  )
}

export default SideMenu
