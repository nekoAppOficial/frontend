import MyFriends from './myFriends';
import AddFriendTab from './AddFriendTab';

import {useState, useEffect} from 'react';

const Friends = (props) => {
    const [tab, setTab] = useState(`add`)
    const [myFriends, setMyFriends] = useState([])
    const [typeFriend, setTypeFriend] = useState(`accept`)

    useEffect(() => {
        setMyFriends(props.myFriends)
    }, [props.myFriends])

    return <div 
    className="base-2jDfDU">
        <div className="container-2cd8Mz" 
        style={{
            height: '100%',
            position: `absolute`
        }}>
        <section className="container-ZMc96U themed-Hp1KC_">
        <div className="children-3xh0VB">
            <div className="iconWrapper-2awDjA">
            <svg x={0} y={0} className="icon-2xnN2Y" aria-hidden="true" width={24} height={24} viewBox="0 0 24 24">
                <g fill="none" fillRule="evenodd">
                <path fill="currentColor" fillRule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)" />
                <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z" />
                </g>
            </svg>
            </div>
            <h3 className="title-17SveM base-21yXnu size16-rrJ6ag">Amigos</h3>
            <div className="divider-q3P9HC" />
            <div className="tabBar-ra-EuL topPill-3DJJNV" role="tablist" aria-orientation="horizontal" aria-label="Amigos">
            <div 
            onClick={() => {
                setTab(`myFriends`)
                setTypeFriend(`accept`)
            }}
            className={`item-3mHhwr item-3XjbnG themed-2-lozF ${tab == `myFriends` && typeFriend == `accept` ? 'selected-g-kMVV' : ``}`} role="tab" aria-selected="true" aria-controls="online-tab" aria-disabled="false" tabIndex={0}>
                Amigos
            </div>
            
            <div 
             onClick={() => {
                setTab(`myFriends`)
                setTypeFriend(`pending`)
            }}
            className={`item-3mHhwr item-3XjbnG themed-2-lozF ${tab == `myFriends` && typeFriend == `pending` ? 'selected-g-kMVV' : ``}`} role="tab" aria-selected="false" aria-controls="pending-tab" aria-disabled="false" tabIndex={-1} aria-label="Pendente">
                Pendente 
                {props.myFriends.filter(friend => friend.statusAmizade === 'pending' && friend.createdBy != props.me.id).length > 0 &&
                <div className="badge-3wMLmL numberBadge-37OJ3S base-3IDx3L baseShapeRound-3epLEv" style={{backgroundColor: 'var(--status-danger)', width: '16px', paddingRight: '0px'}}>
                {props.myFriends.filter(friend => friend.statusAmizade === 'pending' && friend.createdBy != props.me.id).length}
                     </div> }
                </div>
            
            <div 
            onClick={() => {
                setTab(`add`)
            }}
            className={`item-3mHhwr item-3XjbnG themed-2-lozF ${tab == `add` ? 'selectAdds' : `notSelectAdds`}`} role="tab" aria-selected="false" aria-controls="add_friend-tab" aria-disabled="false" tabIndex={-1} aria-label="Adicionar amigo">
                <span aria-hidden="true">Adicionar amigo</span>
            </div>
            </div>
        </div>
        <div className="toolbar-3_r2xA">
            <div className="inviteToolbar-2k2nqz">
            <div className="iconWrapper-2awDjA clickable-ZD7xvu" role="button" aria-label="Novo grupo privado" tabIndex={0}>
                <svg x={0} y={0} className="icon-2xnN2Y" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24">
                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M20.998 0V3H23.998V5H20.998V8H18.998V5H15.998V3H18.998V0H20.998ZM2.99805 20V24L8.33205 20H14.998C16.102 20 16.998 19.103 16.998 18V9C16.998 7.896 16.102 7 14.998 7H1.99805C0.894047 7 -0.00195312 7.896 -0.00195312 9V18C-0.00195312 19.103 0.894047 20 1.99805 20H2.99805Z" />
                </svg>
            </div>
            <div className="divider-q3P9HC" />
            </div>
            <div className="iconWrapper-2awDjA clickable-ZD7xvu" role="button" aria-label="Caixa de Entrada" tabIndex={0}>
            <svg x={0} y={0} className="icon-2xnN2Y" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24" fill="none">
                <path d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z" fill="currentColor" />
            </svg>
            </div>
            <a tabIndex={-1} className="anchor-1MIwyf anchorUnderlineOnHover-2qPutX" href="https://support.discord.com" rel="noreferrer noopener" target="_blank">
            <div className="iconWrapper-2awDjA clickable-ZD7xvu" role="button" aria-label="Ajuda" tabIndex={0}>
                <svg x={0} y={0} className="icon-2xnN2Y" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z" />
                </svg>
            </div>
            </a>
        </div>
        </section>
        <div className="tabBody-2dgbAs">
        { tab == `add` &&
        <AddFriendTab me={props.me} socket={props.socket}/>
        }
        { tab == `myFriends` &&
        <MyFriends 
        me={props.me}
        typeFriend={typeFriend}
        myFriends={myFriends}
        socket={props.socket}/>
        }
        </div>
    </div>
    </div>
}

export default Friends