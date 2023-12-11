import React,{ useEffect,useState } from 'react'
import {getAllRooms, getAllRoomTypes} from "../utils/ApiFunction.js";

const RoomTypeSelector=()={
    const [RoomTypes,setRoomTypes]=useState([])
    const [showNewRoomTypeInput,setShowNewRoomTypeInput]=useState(false)
    const [newRoomType,setNewRoomType]=useState("")

   useEffect(() => {
       getAllRoomTypes().then((data)=>{
           setRoomTypes(data)
       })
   },[])
    const handleNewRoomInputChange=(e)=>{
        setNewRoomType(e.target.value)
    }
    const handleAddNewRoomType=()=>{
        if(newRoomType!==""){
            setRoomTypes([...RoomTypes,newRoomType])
            setNewRoomType("")
            setShowNewRoomTypeInput(false)
        }
    }
}

    return(<div></div>)



export default RoomTypeSelector;