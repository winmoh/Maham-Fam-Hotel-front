import axios from 'axios'

export const api=axios.create({
    baseURL:"http://loacalhost:8080/api"
})

export async function addRoom(room){
    const roomDTO=new FormData();
    roomDTO.append("roomType",room.roomType)
    roomDTO.append("roomPrice",room.roomPrice)
    roomDTO.append("rnumber",room.rnumber)
    roomDTO.append("photo",room.photo)

    const response=await api.post("/room/addRoom",roomDTO)
    if(response.status===201){
        return "room addedd succefully"
    }
    else{
        return "the room wasn't added! review your solution"
    }


}

export async function getAllRooms  (){
    try{
        const response=await api.get("/room/getAll")
        return response.data;

    }
    catch(error){
        throw new Error("a problem occured when trying to get th available rooms")
    }

}
export async function getAllRoomTypes(){
    try {
        const response=api.get("/room/getAllRoomTypes")
        return response.data;
    }catch(error){
     throw new Error("ther was a problem while retreiving room types" )
    }
}
