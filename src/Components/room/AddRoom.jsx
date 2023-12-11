import React,{ useState } from 'react'
import {addRoom} from '../utils/addRoom';
import {Button} from "react-bootstrap";

const AddRoom= () => {
    const[newRoom,setNewRoom]=useState({
        photo:null,
        rnumber:0,
        roomType:"",
        roomPrice:0

    })
    const[imagePreview ,setImagePreview]=useState("")
    const[successMessage,setSuccessMessage]=useState("")
    const[ErrorMessage,setErrorMessage]=useState("")

    const handleInputChange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

        if(name=== "roomPrice" || name=="rnumber"){
            if(!isNaN(value)){
                value=parseInt(value)
            }
            else{
                value=""
            }
            setNewRoom({...newRoom,[name]:value})
        }
    }
    const handleImageChange=(e)=>{
        const newImage=e.target.file[0]
        setNewRoom({...newRoom,photo:newImage})
        setImagePreview(URL.createObjectURL(newImage))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        try{
            const res= addRoom(newRoom);
            if(res!==undefined){
                setSuccessMessage("A new room was added successufly")
                setNewRoom({
                    photo: null,
                    roomPrice: 0,
                    roomType: "",
                    rnumber: 0
                })
                setErrorMessage("")
                setImagePreview("")

            }else{
                setErrorMessage("there was an error while trying to add the room")
            }


        }
        catch(error){
            setErrorMessage(error.message)
        }
    }


    return (
        <>
        <section className="container,mt-5 mb-5">
            <div className="row justify-countent-center">
                <div className="col-md-8 col-lg-6">
                    <h2 className="mt-5 mb-5">
                        Add a naw room
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="roomType" className="form-label">Room Type</label>
                            <input id="roomType"
                                   value={newRoom.roomType}
                                   className="form-control"
                                   onChange={handleInputChange}
                                   name="roomType"
                                   type="text">
                            </input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="roomPrice" className="form-label">Room Price</label>
                            <input id="roomPrice"
                                   value={newRoom.roomPrice}
                                   className="form-control"
                                   onChange={handleInputChange}
                                   name="roomPrice"
                                   type="number">
                            </input>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="rnumber" className="form-label">Room Number</label>
                            <input id="rnumber"
                                   value={newRoom.rnumber}
                                   className="form-control"
                                   onChange={handleInputChange}
                                   name="rnumber"
                                   type="number">
                            </input>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="photo" className="form-label">Room Photo</label>
                            <input id="photo"
                                   className="form-control"
                                   onChange={handleImageChange}
                                   name="photo"
                                   type="file">
                            </input>
                            {imagePreview  &&(
                                <img src={imagePreview}
                                     alt="Preview room image "
                                    style={{maxWidth:"400px",maxHeight:"400px"}}
                                     className="mb-3"/>
                            )}
                        </div>
                        <div className="d-grid d-md-flex mt-2">
                            <Button className="btn btn-outline-primary ml-5">
                                Save Room
                            </Button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default  AddRoom