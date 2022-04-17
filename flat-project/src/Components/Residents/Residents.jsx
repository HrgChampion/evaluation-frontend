import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Resident=()=>{

    const id =useParams().id;
    const [residents,setResidents]=useState([]);
    useEffect((id)=>{
       
        getData(id);
    },[]);
    const getData=(id)=>{
        axios.get( `http://localhost:2345/flats/flat/${id}`)
        .then(res=>{
            //setResidents(res.data);
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    }
   

    return(
        <div>
            <h1>Residents</h1>
            <div>{id}</div>
            {/* {residents.map(resident=>{
                return(
                    <div>
                        <div>{resident.Name}</div>
                        <div>{resident.flat_id}</div>
                    </div>
                )
            })} */}
            
        </div>
    )
}
    