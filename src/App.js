import React from "react";
import "./App.css";
import  Mainpage from "./components/Mainpage";
import DailyAssignmentsPage from "./components/header/DailyAssignmentsPage";
import AssignmentPage from "./components/otherpages/Assignment";

function App() {
  return (
    <div className="App">
      <Mainpage/>
      {/* <AssignmentPage/> */}
    </div>
  );
}

export default App;
