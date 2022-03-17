import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const ResidentInfo = ({ residentUrl }) => {
  const [resident, setResident] = useState([]);

  useEffect(() => {
    axios.get(residentUrl).then((res) => setResident(res.data));
  }, [residentUrl]);
  console.log(resident)
  return (
    <div id="ResidentInfo">
        <img src={resident.image} alt="personaje"/>
        <h2>{resident.name}</h2>
        <p>-------------------------------</p>
        <p><b>Status:</b> {resident.status}</p>
        <p><b>Origin:</b> {resident.origin?.name}</p>
        <p><b>Episodes:</b> {resident.episode?.length}</p>
       
      
    </div>
  );
};

export default ResidentInfo;