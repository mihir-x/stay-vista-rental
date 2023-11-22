/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import { useState } from "react";
import { imageUpload } from "../../../api/utils";
import useAuth from "../../../hooks/useAuth";
import { addRoom } from "../../../api/rooms";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const AddRoom = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image')
    const {user} = useAuth()

    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    })

    const handleSubmit = async(e) =>{
        setLoading(true)
        e.preventDefault()
        const form = e.target 
        const location = form.location.value 
        const category = form.category.value 
        const title = form.title.value 
        const to = dates.endDate
        const from = dates.startDate
        const price = form.price.value 
        const guest = form.total_guest.value 
        const bathrooms = form.bathrooms.value 
        const description = form.description.value
        const bedrooms = form.bedrooms.value
        const image = form.image.files[0]
        const image_url = await imageUpload(image)
        const host = {
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
        }
        const roomData = {
            location, category, title, to, from, price, guest, bathrooms, description, bedrooms, image:image_url?.data?.display_url, host,
        }
        try{
            
            const data = await addRoom(roomData)
            setUploadButtonText('Uploaded')
            toast.success('New Room Is Added')
            navigate('/dashboard/my-listings')
        }
        catch(err){
            console.log(err)
            toast.error(err.message)
        }
        finally{
            setLoading(false)
        }
    }

    //handle date change from react date range calender
    const handleDates = (ranges) =>{
        console.log(ranges)
        setDates(ranges.selection)
    }

    //image upload button text
    const handleImageChange = (image) =>{
        setUploadButtonText(image.name)
    }

    return (
        <div>
            <Helmet>
                <title>Add Room | Dashboard</title>
            </Helmet>
            {/* Form */}
            <AddRoomForm handleSubmit={handleSubmit} handleDates={handleDates} dates={dates} uploadButtonText={uploadButtonText} handleImageChange={handleImageChange} loading={loading}></AddRoomForm>
        </div>
    );
};

export default AddRoom;