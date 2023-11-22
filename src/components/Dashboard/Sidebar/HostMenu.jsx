import { BsFillHouseAddFill } from "react-icons/bs";
import MenuItem from "./MenuItem";
import { MdHomeWork } from "react-icons/md";


const HostMenu = () => {
    return (
        <>
            <MenuItem icon={BsFillHouseAddFill} label='Add Room' address='add-room'></MenuItem>
            <MenuItem icon={MdHomeWork} label='My Listings' address='my-listings'></MenuItem>
        </>
    );
};

export default HostMenu;