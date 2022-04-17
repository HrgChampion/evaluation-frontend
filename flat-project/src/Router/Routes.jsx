import { Route, Routes } from "react-router-dom"
import { Flats } from "../Components/Flats/Flats"
import { Login } from "../Components/Login/Login"
import { Navbar } from "../Components/Navbar/Navbar"
import { Notfound } from "../Components/Notfound/Notfound"
import { Register } from "../Components/Register/Register"
import { Resident } from "../Components/Residents/Residents"

export const Routers=()=>{
    return(
        <div>
        <Navbar/>
            <Routes>
            <Route path="/" element={<Flats/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/:id" element={<Resident/>}/>
            <Route path="*" element={<Notfound/>}/>
            </Routes>

        </div>
    )
}

//https://flat-project.vercel.app
