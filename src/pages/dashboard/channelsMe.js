import PapersMe from './papersMe';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const ChannelsMe = props => {
    const [myFriends, setMyFriends] = useState(props.myFriends)
    const [userId, setUserID] = useState(0)

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
                  newFriends.map((f, index) => {
                      if(f.id == friend.id){
                          f.status = 'online'
                          newFriends[index].photo = friend.photo
                          newFriends[index].coverPhoto = friend.coverPhoto
                          newFriends[index].backgroundColor = friend.backgroundColor
                          newFriends[index].aboutMe = friend.aboutMe
                          newFriends[index].admin = friend.admin
                      }
                  })
                  setMyFriends(newFriends)
                  clearInterval(InterVal)
              }
          }, 200)
      })

      props.socket.on(`refreshFriends`, friend => {
        const InterVal = setInterval(() => {
            if(myFriends.length > 0){
                const newFriends = [...myFriends]
                //Set online friend in myFriends
                newFriends.map((f, index) => {
                    if(f.id == friend.id){
                      newFriends[index].photo = friend.photo
                      newFriends[index].coverPhoto = friend.coverPhoto
                      newFriends[index].backgroundColor = friend.backgroundColor
                      newFriends[index].aboutMe = friend.aboutMe
                      newFriends[index].admin = friend.admin
                    }
                })
                setMyFriends(newFriends)
                clearInterval(InterVal)
            }
        }, 200)
    })
      
      props.socket.on('offlineB', friend => {
          const InterVal = setInterval(() => {
              if(myFriends.length > 0){
                  const newFriends = [...myFriends]
                  //Set online friend in myFriends
                  newFriends.map(f => {
                      if(f.id == friend.id){
                          f.status = 'offline'
                      }
                  })
                  setMyFriends(newFriends)
                  clearInterval(InterVal)
              }
          }, 500)
      })
    }, [props.myFriends])

   

    return <div className="sidebar-1tnWFu">
    <nav className="privateChannels-oVe7HL" aria-label="Canais privados">
      <div className="searchBar-3TnChZ">
        <button type="button" className="searchBarComponent-3N7dCG">Encontre ou comece uma conversa</button>
      </div>
      <div className="scroller-WSmht3 thin-31rlnD scrollerBase-_bVAAt fade-1R6FHN" tabIndex={0} data-list-id="private-channels-uid_975" data-jump-section="global" style={{overflow: 'hidden scroll', paddingRight: '0px'}}>
        <ul role="list" aria-label="Mensagens diretas" className="content-2a4AW9" style={{height: '408px'}}>
          <div aria-hidden="true" style={{height: '8px'}} />
          <li className="channel-1Shao0 container-32HW5s" role="listitem" aria-posinset={1} aria-setsize={8}>
            <div className={`interactive-1vLZ_I interactive-iyXY_x linkButton-2NshQj ${window.location.pathname == `/channels/@me` || window.location.pathname == `/channels/@me/` ? `interativoBtn` : ``}`}>
              <Link className="link-39sEB3" data-list-item-id="private-channels-uid_975___friends" tabIndex={-1} to="/channels/@me">
                <div className="layout-1LjVue">
                  <div className="avatar-1HDIsL">
                    <svg className="linkButtonIcon-7rsZcu" aria-hidden="false" width={16} height={16} viewBox="0 0 24 24">
                      <g fill="none" fillRule="evenodd">
                        <path fill="currentColor" fillRule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)" />
                        <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z" />
                      </g>
                    </svg>
                  </div>
                  <div 
                  className="content-66wMin">
                    <div className="nameAndDecorators-2A8Bbk">
                      <div className="name-2m3Cms">Amigos </div>
                    </div>
                  </div>
                </div>
              </Link>
              {myFriends.filter(friend => friend.statusAmizade === 'pending' && friend.createdBy != props.user.id).length > 0 &&<div className="numberBadge-37OJ3S base-3IDx3L baseShapeRound-3epLEv" style={{backgroundColor: 'var(--status-danger)', width: '16px', paddingRight: '1px'}}>
                {myFriends.filter(friend => friend.statusAmizade === 'pending' && friend.createdBy != props.user.id).length}
              </div> }
            </div>
          </li>
          <h2 className="privateChannelsHeaderContainer-1UWASm container-q97qHp">
            <span className="headerText-1qIDDT">Mensagens diretas</span>
            <div className="privateChannelRecipientsInviteButtonIcon-1ObKXK iconWrapper-2awDjA clickable-ZD7xvu" role="button" aria-label="Criar MD" tabIndex={0}>
              <svg x={0} y={0} className="privateChannelRecipientsInviteButtonIcon-1ObKXK icon-2xnN2Y" aria-hidden="false" width={24} height={24} viewBox="0 0 18 18">
                <polygon fillRule="nonzero" fill="currentColor" points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8" />
              </svg>
            </div>
          </h2>
          { myFriends.filter(friend => friend.statusAmizade === `accept`).length == 0 && <svg width={184} height={428} viewBox="0 0 184 428" className="empty-yQo7LQ">
            <rect x={40} y={6} width={144} height={20} rx={10} />
            <circle cx={16} cy={16} r={16} />
            <rect x={40} y={50} width={144} height={20} rx={10} opacity="0.9" />
            <circle cx={16} cy={60} r={16} opacity="0.9" />
            <rect x={40} y={94} width={144} height={20} rx={10} opacity="0.8" />
            <circle cx={16} cy={104} r={16} opacity="0.8" />
            <rect x={40} y={138} width={144} height={20} rx={10} opacity="0.7" />
            <circle cx={16} cy={148} r={16} opacity="0.7" />
            <rect x={40} y={182} width={144} height={20} rx={10} opacity="0.6" />
            <circle cx={16} cy={192} r={16} opacity="0.6" />
            <rect x={40} y={226} width={144} height={20} rx={10} opacity="0.5" />
            <circle cx={16} cy={236} r={16} opacity="0.5" />
            <rect x={40} y={270} width={144} height={20} rx={10} opacity="0.4" />
            <circle cx={16} cy={280} r={16} opacity="0.4" />
            <rect x={40} y={314} width={144} height={20} rx={10} opacity="0.3" />
            <circle cx={16} cy={324} r={16} opacity="0.3" />
            <rect x={40} y={358} width={144} height={20} rx={10} opacity="0.2" />
            <circle cx={16} cy={368} r={16} opacity="0.2" />
            <rect x={40} y={402} width={144} height={20} rx={10} opacity="0.1" />
            <circle cx={16} cy={412} r={16} opacity="0.1" />
        </svg> }
        {  myFriends.filter(friend => friend.statusAmizade === `accept`).map((friend) => (
          <Friend 
          setUserID={setUserID}
          userId={userId}
          chat={props.chat}
          friend={friend}
          />
        )) }
        </ul>
      </div>
    </nav>
    <PapersMe
    toolTipBottom={props.toolTipBottom}
    toolTipHideBottom={props.toolTipHideBottom}
    toolTipShowBottom={props.toolTipShowBottom}
    setAjustes={props.setAjustes}
    ajustes={props.ajustes}
    user={props.user}/>
  </div>
}

const Friend = (props) => {

  useEffect(() => {
    if(window.location.pathname.split(`/`)[3] && window.location.pathname.split(`/`)[3] == props.friend.id){
        props.setUserID(props.friend.id)
    }
  }, [false])

  return <li className="channel-1Shao0 container-32HW5s" role="listitem" aria-setsize={8} aria-posinset={3}>
  <div className={`interactive-1vLZ_I interactive-iyXY_x ${window.location.pathname.split(`/`)[3] && props.chat && props.userId == props.friend.id 
  ? `interactiveSelected-29CP8y selected-3veCBZ` : ``}`}>
    <Link
    onClick={() => {
      props.setUserID(props.friend.id)
    }}
    className="link-39sEB3" aria-label="username (mensagem direta)" data-list-item-id="private-channels-uid_975___886332857520377867" tabIndex={-1} 
    to={`/channels/@me/${props.friend.id}`}>
      <div className="layout-1LjVue">
        <div className="avatar-1HDIsL">
          <div className="wrapper-1VLyxH" role="img" aria-label="username, Não perturbar" aria-hidden="false" style={{width: '32px', height: '32px'}}>
            <svg width={40} height={32} viewBox="0 0 40 32" className="mask-1FEkla svg-2azL_l" aria-hidden="true">
              <foreignObject x={0} y={0} width={32} height={32} mask="url(#svg-mask-avatar-status-round-32)">
                <div className="avatarStack-3vfSFa">
                  <img 
                  style={{borderRadius: `50%`}}
                  src={`${ typeof props.friend.photo != `object` ? props.friend.photo : window[`getPath`]() + `assets/default.webp`}`} alt=" " className="avatar-b5OQ1N" aria-hidden="true" />
                </div>
              </foreignObject>
              <rect 
              rx={"32"}
              width={10} height={10} x={22} y={22} 
              fill={props.friend.status == `online` ? `#00B348` : `#D3D3D3`} 
              mask="url(#svg-mask-status-dnd)" className="pointerEvents-9SZWKj" />
            </svg>
          </div>
        </div>
        <div className="content-66wMin">
          <div className="nameAndDecorators-2A8Bbk">
            <div className="name-2m3Cms">
              <div className="overflow-1wOqNV">{props.friend.username}</div>
            </div>
          </div>
          <div className="subText-3Sk0zy">
            <div className="activity-1-H7Zd subtext-14b69p">
              <div className="activityText-ev7Z1T">{props.friend.status.charAt(0).toUpperCase() + props.friend.status.slice(1)}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
    <div className="closeButton-mupH76" aria-label="Fechar mensagem direta" role="button" tabIndex={0}>
      <svg className="closeIcon-1NwtbI" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24">
        <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z" />
      </svg>
    </div>
  </div>
</li>
}

export default ChannelsMe