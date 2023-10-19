import React  from "react";
import PropTypes from "prop-types";
import PopupWindow from "./PopUp";
import "./Name.css";
function Name(props) {
  const id = props.id; 
  function openPopup (){
    const popup = new PopupWindow();
    popup.openPopup(id);
  }
    return (
   <div className="contact"
   onClick={
    openPopup
   }>
        <span>{props.name}</span>
    </div>
    );

  }
  
  export default Name;
