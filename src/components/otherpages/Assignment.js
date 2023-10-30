import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; 
import DailyAssignmentsPage from "../header/DailyAssignmentsPage";
import Header2 from "../Header2";

function AssignmentPage() {
  return (
    <Router>
         <div className="App">
        <Header2/>
      <DailyAssignmentsPage />
    </div>
    </Router>
   
  );
}

export default AssignmentPage;