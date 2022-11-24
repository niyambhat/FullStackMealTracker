import React from 'react'
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";

const routes:any =[];

function AppRoutes() {
  return (
   <>
   <Router>
    <Routes>
      {routes.map((Route:any, index:number)=>{
       return(
        <Route path={Route.path} key={index} exact={routes.exact}>
          <routes.Comonent/>
        </Route>
       ) 
      })}
    </Routes>
   </Router>
   </>
  )
}

export default AppRoutes