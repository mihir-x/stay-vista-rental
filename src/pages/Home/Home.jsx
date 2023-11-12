import Categories from "../../components/Rooms/Categories/Categories"
import Rooms from "../../components/Rooms/Rooms"
import Container from "../../components/Shared/Container"

const Home = () => {
  return (
    <div>

    {/* category section */}
    <Container><Categories></Categories></Container>
    {/* room section */}
    <Rooms></Rooms>
    </div>
  )
}

export default Home
