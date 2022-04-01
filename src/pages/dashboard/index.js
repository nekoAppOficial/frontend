import Load from './load';
import { useEffect, useState } from 'react';
import axios from 'axios';
import socketClient  from "socket.io-client";
const socket = socketClient (`http://localhost:7000`);


const Dashboard = props => {
    const [loading, setLoading] = useState(false);
    const validationToken = async () => {
        const response = await axios.post('http://localhost:7000/auth/validationToken', {
            token: localStorage.getItem('token')
        });
        
        if(response.data.user){
            props.setLogged(true)
            setInterval(() => {
                socket.emit(`userConnect`, localStorage.getItem('token'))
            }, 1000)
        } else{
            props.setLogged(false)
            props.setPage(`login`)
        }
    }

    

    useEffect(() => {
        //Fecth register post
        validationToken()
        socket.on(`online`, user => {
            setLoading(true)
        })
    })
    return <>
    { !loading && <Load/>}
    </>
}

export default Dashboard