import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading/Heading";
import Loader from '../Shared/Loader'

const Rooms = () => {

    const [rooms, setRooms] = useState([])
    const [params, setParams] = useSearchParams()
    const [loading, setLoading] = useState(true)
    const selectedCategory = params.get('category')

    useEffect(() => {
        setLoading(true)
        fetch('/rooms.json')
            .then(res => res.json())
            .then(data => {
                if (selectedCategory) {
                    const filtered = data.filter(item => item.category === selectedCategory)
                    setRooms(filtered)
                }
                else {
                    setRooms(data)
                }
                setLoading(false)
            })
    }, [selectedCategory])
    
    if(loading){
        return <Loader></Loader>
    }

    return (
        <Container>
            {
                rooms && rooms.length > 0 ?
                    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                        {
                            rooms.map(room => <Card key={room._id} room={room}></Card>)
                        }
                    </div>
                    : <div className=" flex justify-center items-center min-h-[calc(100vh-300px)]">
                        <Heading title={'No Rooms Available In This Category'} subtitle={'Please Select Other Category'} center={true}></Heading>
                    </div>
            }
        </Container>
    );
};

export default Rooms;