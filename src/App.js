import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alerts from "./Components/Alerts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("dark mode has been enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
     {/* <Router> */}
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <div className="container my-3">
        {/* <Switch> */}
            {/* <Route exact path="/about">
              <About />
            </Route> */}
          
            {/* <Route exact path="/"> */}
              <TextForm
              showAlert={showAlert}
              heading="Enter the text to analyze below"
              mode={mode}
              />
            {/* </Route> */}
        {/* </Switch> */}
       
      </div>
    {/* </Router> */}
    </>
  );
}
          
            

        


// export default App;
