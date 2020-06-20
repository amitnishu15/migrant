import React,{useState,useEffect} from 'react'

function DarkMode() {

    const[dark,setMode] = useState(false);
   
    return (
        <div>
            <label className="switch">
                <input type="checkbox" onChange={()=>setMode(!dark)} />
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default DarkMode;