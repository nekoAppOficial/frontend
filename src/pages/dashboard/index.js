import Load from './load';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client'
import GuildsNav from './guildsNav';
import ChannelsMe from './channelsMe';
import Friends from './friends';
import Modal from './server/modal'
import ChatPrivate from './ChatPrivate';
let socket = null

const Dashboard = props => {
    const [loading, setLoading] = useState(false);
    const [openModalServer, setOpenModalServer] = useState(false);
    const [user, setUser] = useState({username: ''})
    const [myFriends, setMyFriends] = useState([])
    const validationToken = async () => {
        const response = await axios.post('https://server-nekoapp.herokuapp.com/auth/validationToken', {
            token: localStorage.getItem('token')
        });
        
        if(response.data.user){
            setUser(response.data.user)
            socket.emit(`userConnect`, localStorage.getItem('token'))
            setLoading(true)
        } else{
            props.setLogged(false)
            props.setPage(`login`)
        }
    }

    useEffect(() => {
        //Fecth validation post
        validationToken()
        socket = io('http://localhost:7000')
        socket.on(`online`, user => {
            setLoading(true)
        })
    }, false)

    React.useEffect(() => {
        socket.on(`getFriends`, friends => {
            setMyFriends(friends)
        })
        socket.on(`refreshFriends`, friend => {
            socket.emit(`getFriends`, localStorage.getItem('token'))
        })
        setLoading(true)
    }, [false])
    

    return <>
    { !loading && <Load/>}
    { loading &&
    <>
        <div className='container-1eFtFS'>
            <Modal
            openModalServer={openModalServer}
            setOpenModalServer={setOpenModalServer}
            />
            <div class="content-1SgpWY">
                <GuildsNav setOpenModalServer={setOpenModalServer}/>
                <ChannelsMe 
                chat={props.chat}
                myFriends={myFriends}
                user={user}/>
                <div
                className='base-2jDfDU theme-dark container-2cd8Mz'
                >
                    { !props.chat && <Friends 
                    myFriends={myFriends}
                    me={user}
                    socket={socket}/>}
                    { props.chat && 
                    <>
                    <ChatPrivate
                    myFriends={myFriends}
                    socket={socket}
                    me={user}
                    />
                    </>
                    }
                </div>
            </div>
        </div>
    </>
    } 
    </>
}

export default Dashboard