import './App.css';
import React,{useState,useEffect,useRef,useImperativeHandle } from "react";
import {GettingStorage, SettingStorage} from "./Utils/GlobalFunction"; 
import Name from "./Components/Name";
import NameList from './Components/NameList';
  

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
  // }
  // const  testList = [
  //   { "id": 1, "name": "Leanne Graham" },
  //   { "id": 2, "name": "Ervin Howell" },
  //   { "id": 3, "name": "Clementine Bauch" },
  //   { "id": 4, "name": "Patricia Lebsack" }
  //  ]

  const testNames = [

  ]

  const Payment_Benefit_List = JSON.parse(GettingStorage("Payment_Benefit_List"));
  console.log(Payment_Benefit_List)

  Object.keys(Payment_Benefit_List).map((key) => {

    const value =  Payment_Benefit_List[key]; 
    testNames.push({"id":value , "name": key})

  });

// console.log(testNames);

  return (
    <div className="App">

        {/* <ul>{names}</ul>    */}

      <header className="App-header">
        <h1>
          In this related list you will see payment benefits List
        </h1>
        {/* <NameList names  = {testList} /> */}
        <NameList names  = {testNames} />

        
      </header>
    </div>
  );
}

export default App;
