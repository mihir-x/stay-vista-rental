import axiosSecure from "."

//save user data in database
export const saveUser = async user =>{
    const currentUser = {
        email: user.email,
        role: 'guest',
        status: 'verified'
    }
    const {data} = await axiosSecure.put(`/users/${user?.email}`, currentUser)
    return data
}

//get token from server
export const getToken = async email =>{
    const {data} = await axiosSecure.post('/jwt', email)
    console.log('token received form server: ', data)
    return data
}

//clear token from browser upon logout
export const clearCookie = async () =>{
    const {data} = await axiosSecure.get('/logout')
    console.log('token cleared from browser: ', data)
    return data
}