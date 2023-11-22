
import useAuth from "./useAuth";
import { getRole } from "../api/Auth";
import { useQuery } from "@tanstack/react-query";


const useRole = () => {
    const {user, loading} = useAuth()
    console.log('user in userole: ',user?.email)
    // const [role, setRole] = useState(null)
    // const [roleLoading, setRoleLoading] = useState(true)

    // useEffect(()=>{
    //     setRoleLoading(true)
    //     getRole(user?.email)
    //     .then(data => {
    //         setRole(data?.role)
    //         setRoleLoading(false)
    //     })
    // },[user?.email])

    // return [role, roleLoading] 

    //replacing above code with tanstack query
    const {data:role, isLoading} = useQuery({
        enabled: !loading && !!user?.email,
        queryFn: async() => await getRole(user?.email),   
        queryKey: ['role'],
    })
    console.log('role from tanstack userole: ',role);

    return [role, isLoading]

};

export default useRole;