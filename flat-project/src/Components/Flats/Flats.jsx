import Button from '@mui/material/Button';
import { useState,useEffect } from 'react'; 
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch ,useSelector} from "react-redux";
import "./Flats.css";
import axios from "axios";
import {Link} from "react-router-dom";
export const Flats=()=>{
    const [flats,setFlats]=useState([]);
    const [page,setPage]=useState(1);
    const [limit,setLimit]=useState(0);

    const dispatch=useDispatch();
    useEffect(()=>{
        getALLFlats();
    },[]);

    const getALLFlats=()=>{
        axios.get("http://localhost:2345/flats")
        .then(res=>{
            
            setFlats(res.data.flats);
            setLimit(res.data.totalPages);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    


    const handleChangeBlock=(event)=>{
        axios.get(`http://localhost:2345/flats/block/${event.target.value}`)
        .then(res=>{
           // console.log(res,event.target.value)
            setFlats(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const handleChangeResident=(event)=>{
        axios.get("http://localhost:2345/flats/"+event.target.value)
        .then(res=>{
            //console.log(res.data);
            setFlats(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    const sortAsc=()=>{
        axios.get("http://localhost:2345/flats/sort/asc")
        .then(res=>{
            console.log(res.data.finalflats);
            setFlats(res.data.finalflats);
        })
        .catch(err=>{
            console.log(err);
        })
    
    
    }
    const sortDesc=()=>{
        axios.get("http://localhost:2345/flats/sort/dsc")
        .then(res=>{
            
            setFlats(res.data.finalflats);
        })
        .catch(err=>{
            console.log(err);
        })

    }
    const handlePage=(value)=>{
        let newvalue=page+value;
        if(newvalue<1){
            newvalue=1;
        }
       if(newvalue>limit){
              newvalue=limit;
         }
        setPage(newvalue);

        axios.get(`http://localhost:2345/flats?page=${newvalue}`)
        .then(res=>{
            
            setFlats(res.data.flats);
            setLimit(res.data.totalPages);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return(
        <div className='flat-container'>
            <div className='flat-container-header'>
           <Button onClick={sortAsc}>Sort By Asc</Button>
              <Button onClick={sortDesc}>Sort By Desc</Button>
              <br/><br/><br/>
              <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Block</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          
         
          onChange={handleChangeBlock}
        >
          <MenuItem value="A">A</MenuItem>
          <MenuItem value="B">B</MenuItem>
          
        </Select>
        </FormControl>
     </Box>

     <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Resident_Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          
         
          onChange={handleChangeResident}
        >
          <MenuItem value="Owner">Owner</MenuItem>
          <MenuItem value="Tenant">Tenant</MenuItem>
          
        </Select>
        </FormControl>
     </Box>
     <Button onClick={()=>{
         handlePage(-1);
     }}>Prev</Button>
              <Button  onClick={()=>{
         handlePage(1);
     }}>Next</Button>
</div>

     <br/>

     <div className='table-container'>
        <table>
            <thead>
                <tr>
                    <th >
                    <th >Resident Type</th>
                    <th>Flat No</th>
                    <th>Block</th>
                    <th>Total Residents</th>
                    <th>Image</th>
                    </th>
                    
                </tr>
            </thead>
            <br/><br/>
          {flats.map((flat,index)=>{
                return(
                    <tbody key={flat._id}>
                    <Link to={`/${flat._id}`} >
                        <tr>
                        
                            <td className='widthclass'>{flat.Resident_Type}</td>
                            <td className='widthclass'>{flat.Flat_No}</td>
                            <td className='widthclass'>{flat.Block}</td>
                            <td className='widthclass'>{flat.Total_Residents}</td>
                            <td ><img  className="flat-img" src={flat.Image} alt="flat"/></td>
                            
                        </tr>
                        </Link>
                    </tbody>
                    
                )
            })}


        </table>
               
     </div>
        </div>
    )
}


