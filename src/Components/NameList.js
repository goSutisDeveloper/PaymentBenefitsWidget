import React from "react";
import Name from  "./Name"


function NameList(props) {
  return (
    <div className="nameList">
        {props.names.map( n => <Name key = {n.id} id = {n.id} name = {n.name}/>)}      
    </div>
  );
}

export default NameList;