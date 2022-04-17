import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Resident=()=>{

    const id =useParams().id;
    const [residents,setResidents]=useState({});
    useEffect(()=>{
       
        getData();
    },[]);
    const getData=()=>{
        axios.get( `http://localhost:2345/flats/flat/${id}`)
        .then(res=>{
            setResidents(res.data.Residents);
            
        })
        .catch(err=>{
            console.log(err);
        })
    }
   

    return(
        <div>
            <h1>Residents</h1>
            
                    <div>
                        <div>{residents.Name}</div>
                        <div>{residents.Flat_Owner}</div>
                        
                        <div>{residents.Residents}</div>
                       
                    </div>
               
           
            
        </div>
    )
}
    