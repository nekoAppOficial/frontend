import {Link} from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const MyFriends = (props) => {
    const [myFriends, setMyFriends] = useState(props.myFriends)

    useEffect(() => {
        setMyFriends(props.myFriends)

        props.socket.on(`getFriends`, friends => {
            setMyFriends(friends)
        })

        props.socket.on('onlineB', friend => {
            const InterVal = setInterval(() => {
                if(myFriends.length > 0){
                    const newFriends = [...myFriends]
                    //Set online friend in myFriends
                    newFriends.map(f => {
                        if(f.id == friend.id && friend.statusAmizade == 'accept'){
                            f.status = 'online'
                        }
                    })
                    setMyFriends(newFriends)
                    clearInterval(InterVal)
                }
            }, 100)
        })
        
        props.socket.on('offlineB', friend => {
            const InterVal = setInterval(() => {
                if(myFriends.length > 0){
                    const newFriends = [...myFriends]
                    //Set online friend in myFriends
                    newFriends.map(f => {
                        if(f.id == friend.id && friend.statusAmizade == 'accept'){
                            f.status = 'offline'
                        }
                    })
                    setMyFriends(newFriends)
                    clearInterval(InterVal)
                }
            }, 100)
        })
    }, [false])

    
    const [filterFriends, setFilterFriends] = useState(``)
    return <div className="peopleColumn-1wMU14" role="tabpanel" id="online-tab" tabIndex={-1}>
    <div className="searchBar-2aylmZ container-2oNtJn medium-2NClDM">
    <div className="inner-2pOSmK">
        <input 
        onChange={(e) => setFilterFriends(e.target.value)}
        className="input-2m5SfJ" placeholder="Buscar" aria-label="Buscar" />
        <div className="iconLayout-3Bjizv medium-2NClDM" tabIndex={-1} aria-hidden="true" role="button">
        <div className="iconContainer-6pgShY">
            <svg className="icon-3CDcPB visible-CwPfRb" aria-label="Buscar" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24">
            <path fill="currentColor" d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 7.863 17.167 5.854 15.656 4.344C14.146 2.832 12.137 2 10 2C7.863 2 5.854 2.832 4.344 4.344C2.833 5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 18 10 18C11.799 18 13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397 16 6.891 15.376 5.758 14.243C4.624 13.11 4 11.603 4 10C4 8.398 4.624 6.891 5.758 5.758C6.891 4.624 8.397 4 10 4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 16 8.398 16 10C16 11.603 15.376 13.11 14.242 14.243C13.109 15.376 11.603 16 10 16Z" />
            </svg>
            <svg className="clear-3102V9 icon-3CDcPB" aria-label="Limpar" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24">
            <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z" />
            </svg>
        </div>
        </div>
    </div>
    </div>
    <div>
    <h2 className="title-x4dI75 container-q97qHp">
        {props.typeFriend == `accept` ? `ACEITOS` : `PENDENTES`}
         — {myFriends.filter(friend => friend.statusAmizade === props.typeFriend && friend.username.includes(filterFriends)).length}</h2>
    </div>
    <div className="peopleList-2VBrVI auto-2K3UW5 scrollerBase-_bVAAt" dir="ltr" role="list" tabIndex={0} data-list-id="people" style={{overflow: 'hidden scroll', paddingRight: '0px'}}>
    { myFriends.filter(friend => friend.statusAmizade === props.typeFriend && friend.username.includes(filterFriends)).length == 0 && <NoHaveFriends/> }
    {
        myFriends.filter(friend => friend.statusAmizade === props.typeFriend && friend.username.includes(filterFriends)).map(friend => (
            <div>
                <CardFriend 
                toolTipShowBottom={props.toolTipShowBottom} 
                toolTipHideBottom={props.toolTipHideBottom}
                socket={props.socket}
                me={props.me}
                toolTipBottom={props.toolTipBottom}
                friend={friend}/>
            </div>
    ))}
    <div aria-hidden="true" style={{position: 'absolute', pointerEvents: 'none', minHeight: '0px', minWidth: '1px', flex: '0 0 auto', height: '8px'}} />
    </div>
</div>
}

const CardFriend = (props) => {
    const acceptFriendButton = useRef(null) 
    const recuseFriendButton = useRef(null) 
    const chatFriendButton = useRef(null) 
    return <div>
    <div className="peopleListItem-u6dGxF" role="listitem" data-list-item-id="people___294144189464313857" tabIndex={-1} style={{height: '62px', opacity: 1}}>
    <div className="listItemContents-2n2Uy9">
        <div className="userInfo-2WpsYG">
        <div className="avatar-2MSPKk wrapper-1VLyxH" role="img" aria-hidden="false" style={{width: '32px', height: '32px'}}>
            <svg width={40} height={32} viewBox="0 0 40 32" className="mask-1FEkla svg-2azL_l" aria-hidden="true">
            <foreignObject x={0} y={0} width={32} height={32} mask="url(#svg-mask-avatar-status-round-32)">
                <div className="avatarStack-3vfSFa">
                <img 
                style={{
                    borderRadius: `50%`
                }}
                src={`${ typeof props.friend.photo != `object` ? props.friend.photo : window[`getPath`]() + `assets/default.webp`}`} alt=" " className="avatar-b5OQ1N" aria-hidden="true" />
                </div>
            </foreignObject>
            <rect 
            rx={"32"}
            width={10} height={10} x={22} y={22} 
            fill={props.friend.status == `online` ? `#00B348` : `#D3D3D3`}
            mask="url(#svg-mask-status-online)" className="pointerEvents-9SZWKj" />
            </svg>
        </div>
        <div className="text-3j8t_e">
            <div className="discordTag-3HiQI9 nameTag-H6kSJ0">
            <span className="username-3JLfHz username-Qpc78p">{props.friend.username}</span>
            <span className="discriminator-WV5K5s"></span>
            </div>
            <div className="subtext-xfubwR">
            { props.friend.statusAmizade == `accept` && 
            <div className="text-MPIeXO">{props.friend.status == `offline` ? `Offline` : `Online`}</div>
            }
            { props.friend.statusAmizade !== `accept` && 
            <div className="subtext-xfubwR">
                { props.friend.createdBy != props.me.id &&
                `Pedido de amizade recebido`
                }  
                { props.friend.createdBy == props.me.id &&
                `Pedido de amizade enviado`
                }       
                </div>
            }
            </div>
        </div>
        </div>
        { props.friend.statusAmizade === `pending` && 
            <div className="actions-2ZgdH4">
            {  props.friend.createdBy != props.me.id && 
            <div 
            ref={acceptFriendButton}
            onClick={() => {
                props.socket.emit(`acceptFriend`, {
                    token: localStorage.getItem(`token`),
                    userID: props.friend.id
                })
                props.toolTipHideBottom()
            }}
            onMouseOver={(e) => {
                if(!props.toolTipBottom){
                    props.toolTipShowBottom(`Aceitar`, acceptFriendButton.current.offsetLeft + 304, acceptFriendButton.current.offsetTop + 130)
                }
            }}
            onMouseLeave={(e) => {
                props.toolTipHideBottom()
            }}
            className="actionButton-3-B2x- actionAccept-2nmnLv" aria-label="Aceitar" role="button" tabIndex={0}>
            <svg className="icon-1WVg4I" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24">
                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z" />
            </svg>
            </div>
            }
            <div 
            ref={recuseFriendButton}
            onClick={() => {
                props.socket.emit(`recuseFriend`, {
                    token: localStorage.getItem(`token`),
                    userID: props.friend.id
                })
                props.toolTipHideBottom()
            }}
            onMouseOver={(e) => {
                if(!props.toolTipBottom){
                    props.toolTipShowBottom(`Recusar`, recuseFriendButton.current.offsetLeft + 300, recuseFriendButton.current.offsetTop + 130)
                }
            }}
            onMouseLeave={(e) => {
                props.toolTipHideBottom()
            }}
            className="actionButton-3-B2x- actionDeny-1pQVuZ" aria-label="Ignorar" role="button" tabIndex={0}>
            <svg className="icon-1WVg4I" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24">
                <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z" />
            </svg>
            </div>
        </div>
        }
        { props.friend.statusAmizade === `accept` &&
        <div className="actions-YHvpIT">
            <Link 
            ref={chatFriendButton}
            onMouseOver={(e) => {
                if(!props.toolTipBottom){
                    props.toolTipShowBottom(`Mensagem`, chatFriendButton.current.offsetLeft + 293, chatFriendButton.current.offsetTop + 130)
                }
            }}
            onMouseLeave={(e) => {
                props.toolTipHideBottom()
            }}
            onClick={() => {
                props.toolTipHideBottom()
            }}
            to={`/channels/@me/${props.friend.id}`}>
                <div className="actionButton-3-B2x-" aria-label="Mensagem" role="button" tabIndex={0}>
                    <svg className="icon-1WVg4I" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path fill="currentColor" d="M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z" />
                    </svg>
                </div>
            </Link>
            <div
            ref={recuseFriendButton}
            onMouseOver={(e) => {
                if(!props.toolTipBottom){
                    props.toolTipShowBottom(`Desfazer Amizade`, recuseFriendButton.current.offsetLeft + 250, recuseFriendButton.current.offsetTop + 130)
                }
            }}
            onMouseLeave={(e) => {
                props.toolTipHideBottom()
            }}
            onClick={() => {
                props.toolTipHideBottom()
                props.socket.emit(`recuseFriend`, {
                    token: localStorage.getItem(`token`),
                    userID: props.friend.id
                })
            }}
            className="actionButton-3-B2x-" aria-label="Mais" role="button" tabIndex={0}>
                <svg className="icon-1WVg4I" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z" />
                </svg>
            </div>
        </div>
        }
    </div>
    </div>
</div>
}

const NoHaveFriends = () => {
    return <div className="emptyStateContainer-1NHrfT">
      <div className="friendsEmpty-gs15T1" style={{opacity: 1}}>
        <div className="flex-2S1XBF flex-3BkGQD vertical-3aLnqW flex-3BkGQD directionColumn-3pi1nm justifyCenter-rrurWZ alignCenter-14kD11 noWrap-hBpHBz wrapper-5BaSTh" style={{flex: '1 1 auto'}}>
          <div className="image-20MDYu marginBottom40-fvAlAV" style={{flex: '0 1 auto', width: '421px', height: '218px', backgroundImage: 'url("../assets/b36de980b174d7b798c89f35c116e5c6.svg")'}} />
          <div className="flexChild-3PzYmX" direction="vertical-3aLnqW flex-3BkGQD directionColumn-3pi1nm" style={{flex: '0 1 auto'}}>
            <div className="text-27cdrj marginTop8-24uXGp">Ninguém por perto para brincar com o Wumpus.</div>
          </div>
        </div>
      </div>
    </div>
}

export default MyFriends