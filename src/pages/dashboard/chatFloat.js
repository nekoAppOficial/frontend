import {Link, Navigate} from 'react-router-dom';
import { useEffect } from 'react';

const ChatFloat = props => {
    return <div className="scroller-WSmht3 thin-31rlnD scrollerBase-_bVAAt fade-1R6FHN" tabIndex={0} data-list-id="private-channels-uid_975" data-jump-section="global" 
    style={{overflow: 'hidden scroll', paddingRight: '0px', width: '240px', position: 'fixed', right: '20px', bottom: '382px', height: '156px'
    , borderRadius: `4px`, boxShadow:` 3px 2px 1px rgb(0 0 0 / 10%)`,
    filter: `drop-shadow(0px 0px 5px rgb(0 0 0 / 10%))`,
    zIndex: 5000
    }}>
    <ul role="list" aria-label="Mensagens diretas" className="content-2a4AW9" style={{height: '155px'}}>
      <div aria-hidden="true" style={{height: '8px'}} />
      { props.myFriends.length > 0 && props.myFriends.filter(friend => friend.statusAmizade === `accept`).length == 0 && <svg width={184} height={428} viewBox="0 0 184 428" className="empty-yQo7LQ">
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
        {  props.myFriends.filter(friend => friend.statusAmizade === `accept`).map((friend) => (
          <Friend 
          setUserID={props.setUserID}
          userId={props.userId}
          chat={props.chat}
          friend={friend}
          />
        )) }
        </ul>
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
      return <Navigate to={`/channels/@me/${props.friend.id}`}/>
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
              width={10} height={10} x={22} y={22} fill="hsl(359, calc(var(--saturation-factor, 1) * 82.6%), 59.4%)" mask="url(#svg-mask-status-dnd)" className="pointerEvents-9SZWKj" />
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

export default ChatFloat