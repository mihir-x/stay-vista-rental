import { useLoaderData } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";
import RoomReservation from "../../components/RoomDetails/RoomReservation";


const RoomDetails = () => {


    const room = useLoaderData()


    return (
        <Container>
            <Helmet>
                <title>{room.title}</title>
            </Helmet>
            <div className=" max-w-screen-md mx-auto">
                <div className="flex flex-col gap-6">
                    {/* header */}
                    <Header room={room}></Header>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-7 gap-10 mt-6">
                    {/* Room Info */}
                    <RoomInfo room={room}></RoomInfo>
                    <div className=" order-first md:order-last md:col-span-3">
                        {/* Room Reservation */}
                        <RoomReservation room={room}></RoomReservation>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default RoomDetails;