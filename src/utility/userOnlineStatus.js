import React from "react";
import { useState,useEffect } from "react";

const useOnlineStatus = () => {

   const[online,setOnline] = useState(true);

   useEffect(() => {

         window.addEventListener("offline",() => {
            setOnline(false)
         });

         window.addEventListener("online",() => {
            setOnline(true);
         });

   },[])
     return online;
}

export default useOnlineStatus;