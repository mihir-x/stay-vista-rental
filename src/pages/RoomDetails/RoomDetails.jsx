import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";
import RoomReservation from "../../components/RoomDetails/RoomReservation";


const RoomDetails = () => {

    const { id } = useParams()
    const [rooms, setRooms] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch('/rooms.json')
            .then(res => res.json())
            .then(data => {
                const filtered = data.find(item => item._id === id)
                setRooms(filtered)
                setLoading(false)
            })
    }, [id])

    if (loading) {
        return <Loader></Loader>
    }


    return (
        <Container>
            <Helmet>
                <title>{rooms.title}</title>
            </Helmet>
            <div className=" max-w-screen-md mx-auto">
                <div className="flex flex-col gap-6">
                    {/* header */}
                    <Header room={rooms}></Header>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-7 gap-10 mt-6">
                    {/* Room Info */}
                    <RoomInfo room={rooms}></RoomInfo>
                    <div className=" order-first md:order-last md:col-span-3">
                        {/* Room Reservation */}
                        <RoomReservation room={rooms}></RoomReservation>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default RoomDetails;