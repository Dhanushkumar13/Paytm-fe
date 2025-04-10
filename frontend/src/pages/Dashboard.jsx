import { use, useEffect, useState } from "react"
import { Appbar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from "axios"

const Dashboard = () => {
    const [user,setUser] = useState();
    const [balance, setBalance] = useState(0);

    useEffect(()=>{
        axios.get('http://localhost:3000/api/v1/account/balance',{
            headers:{
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then((res)=>{
            setUser(res.data.userId)
            setBalance(res.data.balance);
            console.log(res.data);
        }).catch((err)=>{
            console.log("Failed to fetch balance", err);
        })
    },[])

    return <div>
        <Appbar user={user} />
        <div className="m-8">
            <Balance value={balance.toLocaleString()} />
            <Users />
        </div>
    </div>
}

export default Dashboard;