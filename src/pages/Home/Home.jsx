
import { Helmet } from "react-helmet-async"
import Categories from "../../components/Rooms/Categories/Categories"
import Rooms from "../../components/Rooms/Rooms"
import Container from "../../components/Shared/Container"
import { useLoaderData } from "react-router-dom"

const Home = () => {

  const rooms = useLoaderData()
  console.log(rooms)

  return (
    <div>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>

      {/* category section */}
      <Container><Categories></Categories></Container>
      {/* room section */}
      <Rooms></Rooms>
    </div>
  )
}

export default Home
