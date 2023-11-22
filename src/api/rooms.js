import axiosSecure from ".";


//get all rooms from database
export const getAllRooms = async () =>{
    const {data} = await axiosSecure('/rooms')
    return data
}

//get all rooms for host
export const getHostRooms = async (email) =>{
    const {data} = await axiosSecure.get(`/rooms/${email}`)
    return data
}

//get individual rooms from database
export const getRoom = async (id) =>{
    const {data} = await axiosSecure.get(`/room/${id}`)
    return data
}

//save a room to database
export const addRoom = async(roomData) =>{
    const {data} = await axiosSecure.post('/rooms', roomData)
    return data
}
