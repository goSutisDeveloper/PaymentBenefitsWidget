import './App.css';
import React,{useState,useEffect,useRef,useImperativeHandle } from "react";
import {GettingStorage, SettingStorage} from "./Utils/GlobalFunction"; 

function App() {

const [LoadingState,setLoadingState]=useState(true);
const [AllUserEmail, setAllUserEmail] = useState([]);

useEffect(()=>{
  console.log("welcome")
  LoadWidgetDetails();
  
  
  },[])

  const LoadWidgetDetails=async()=>{
    setLoadingState(true);
    var LoadingWidgetResp=await window.InitiateWidget();
    console.log("FunctionResp----------------",LoadingWidgetResp)
    setLoadingState(false)
    const Payment_Benefit_List = JSON.parse(GettingStorage("Payment_Benefit_List"));
    Object.keys(Payment_Benefit_List).forEach(function(key) {
      console.log(key)

    });
  
  }

  const Payment_Benefit_List = JSON.parse(GettingStorage("Payment_Benefit_List"));
  const names =   Object.keys(Payment_Benefit_List).map((name) => 
  <li>{name}</li>
  );



  return (
    <div className="App">

        <ul>{names}</ul>   

      {/* <header className="App-header">
        <h1>
          In this related list you will see payment benefits List
        </h1>
        <ul>{names}</ul>

      </header> */}
    </div>
  );
}

export default App;
