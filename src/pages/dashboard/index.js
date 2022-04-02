import Load from './load';
import { useEffect, useState } from 'react';
import axios from 'axios';
import socketClient  from "socket.io-client";
import GuildsNav from './guildsNav';
import ChannelsMe from './channelsMe';
import Friends from './friends';
let socket = null

const Dashboard = props => {
    const [loading, setLoading] = useState(false);
    const validationToken = async () => {
        const response = await axios.post('http://localhost:7000/auth/validationToken', {
            token: localStorage.getItem('token')
        });
        
        if(response.data.user){
            socket.emit(`userConnect`, localStorage.getItem('token'))
            setLoading(true)
        } else{
            props.setLogged(false)
            props.setPage(`login`)
        }
    }

    useEffect(() => {
        if(!loading){
            setLoading(true)
            //Fecth validation post
            validationToken()
            socket = socketClient (`http://localhost:7000`);
            socket.on(`online`, user => {
                setLoading(true)
            })
        }
    })
    return <>
    { !loading && <Load/>}
    { loading &&
    <>
        <div className='container-1eFtFS'>
            <div class="content-1SgpWY">
                <GuildsNav/>
                <ChannelsMe/>
                <div
                className='base-2jDfDU theme-dark container-2cd8Mz'
                >
                    <Friends socket={socket}/>
                </div>
            </div>
        </div>
    </>
    } 
    </>
}

export default Dashboard