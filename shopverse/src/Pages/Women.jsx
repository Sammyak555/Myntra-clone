import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getwomendata } from '../Components/Api'
import Clothcard from '../Components/Clothcard'

import   '../Styles/Women.css'



const Women = () => {
    const[searchparams,setSearchparams]=useSearchParams()
    const initialtitle=searchparams.getAll("title")
    const [title,settitle]=useState(initialtitle||[])
     const[data,setData]=useState([])
     console.log(initialtitle)
    useEffect(()=>{
        const wparams={
            params:{
                title:title,
                _limit:20
            }
        }
        setSearchparams(wparams.params)
        getwomendata(setData,wparams)
    },[setData,title,setSearchparams])

    const handleCheckbox=(e)=>{
        const newtitle=[...title]
        if(newtitle.includes(e.target.value)){
            newtitle.splice(newtitle.indexOf(e.target.value),1)
        }else{
            newtitle.push(e.target.value)
        }
        settitle(newtitle)
    }
    console.log(title)
   
  return (
    <div>
        <div className='sorting'></div>
        <div className='flexbox'>
            <div className='wfilter'>
            <h2 style={{fontWeight:"500"}}>Filter By Brand</h2>
            <div>
                <input type="checkbox" value="KALINI"
                onChange={handleCheckbox}
                checked={title.includes("KALINI")}
                />
                <label >Kalini</label>
            </div>
            <div>
                <input type="checkbox" value="Khushal K"
                onChange={handleCheckbox}
                checked={title.includes("Khushal K")}
                />
                <label >Khushal K</label>
            </div>
            <div>
                <input type="checkbox" value="Anouk"
                onChange={handleCheckbox}
                checked={title.includes("Anouk")}
                />
                <label>Anouk</label>
            </div>
            </div>
            <div className='wproducts'>
                {
                    data.length>0&&
                    data.map((item)=>{
                        return(<Clothcard key={item.id} {...item}/>)
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Women