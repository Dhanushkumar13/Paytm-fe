import { useNavigate } from "react-router-dom"
import { Button } from "./Button"

export const Appbar = ({user}) => {
    const navigate = useNavigate();
    const handleLogout = () =>{
        localStorage.removeItem('token');
        navigate('/signin')
    }
    return <div className="shadow h-14 flex justify-between">
        <div onClick={()=>{
            navigate('/dashboard')
        }} className="flex flex-col justify-center h-full ml-4">
            PayTM App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
                Welcome
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user?.[0]?.toUpperCase() || "U"}
                </div>
            </div>
            <div className="flex flex-col justify-center align-middle">
                <Button onClick={handleLogout} label='Logout'></Button>
            </div>
        </div>
    </div>
}