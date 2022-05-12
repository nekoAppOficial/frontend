const PopOutProfile = props => {
    console.log(props.user.cond)
    return <>
    <div 
    onClick={() => {
      props.setPopUser({user: {username: null}})
    }}
    style={{
      position: `fixed`,
      width: `100%`,
      height: `100%`,
      background: `transparent`,
      top: 0,
      left: 0,
      zIndex: 900
    }}>

    </div>
    <div aria-label="moonDareKn" className="userPopout-2j1gM4" role="dialog" tabIndex={-1} aria-modal="true" style={{width: '300px',
    position: `absolute`,
    animation: `popOutProfile 0.2s ease-out both`,
    left: `70px`,
    marginLeft: `${props.user.cond ? `30px`: ``}`,
    top: props.user.clientY - 100+`px`,
    zIndex: 901
    }}>
    <div className="headerNormal-3Zn_yu">
      <div className="banner-1YaD3N popoutBanner-3cqRD9" style={{backgroundColor: props.user.user.backgroundColor}}>
      { props.user.user.coverPhoto && <img 
            style={{
           width: `100%`,
           objectFit: `cover`,
           height: `100%`
        }}
        src={props.user.user.coverPhoto}/>}
        <div className="pencilContainer-18TrEJ" aria-label="Editar perfil" role="button" tabIndex={0}>
          <svg aria-label="Editar perfil" className="pencilIcon-z04-c5" aria-hidden="false" width={18} height={18} viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
    <div style={{
        borderRadius: `50%`
      }}
      className="avatarWrapperNormal-ahVUaC avatarWrapper-eenWra avatarPositionNormal-2jWoC2 clickable-GKg4Qy" role="button" tabIndex={0}>
      <div 
      style={{
        borderRadius: `50%`
      }}
      className="avatarHoverTarget-1zzfRL">
        <div 
        className="avatar-2Vndt_ wrapper-1VLyxH" role="img" aria-hidden="false" style={{width: '80px', height: '80px', borderRadius: `50%`}}>
          <svg width={92} height={80} viewBox="0 0 92 80" className="mask-1FEkla svg-2azL_l" aria-hidden="true">
            <foreignObject x={0} y={0} width={80} height={80} mask="url(#svg-mask-avatar-status-round-80)">
              <div className="avatarStack-3vfSFa">
                <img 
                style={{
                  borderRadius: `50%`
                }}
                src={`${ typeof props.user.user.photo != `object` ? props.user.user.photo : window[`getPath`]() + `assets/default.webp`}`} alt=" " className="avatar-b5OQ1N" aria-hidden="true" />
              </div>
            </foreignObject>
            
          </svg>
        </div>
      </div>
      <svg 
      width={80} height={80} className="avatarHint-k7pYop" viewBox="0 0 80 80">
        <foreignObject
        x={0} y={0} width={80} height={80} overflow="visible" mask="url(#svg-mask-avatar-status-round-80)">
          <div className="avatarHintInner-2HUAWj">Ver perfil</div>
        </foreignObject>
      </svg>
    </div>
    <div className="headerTop-3GPUSF">
      <div className="profileBadges-2pItdR container-1gYwHN" aria-label="Emblemas de Usuário" role="group" />
      <div className="headerText-1-WmDq">
        <div className="headerTagNoNickname-3tGHj6 headerTag-3GXZkV nameTag-H6kSJ0">
          <span className="username-3JLfHz headerTagUsernameNoNickname-1TjuLc headerTagUsernameBase-XYisdh">{props.user.user.username}</span>
        </div>
      </div>
    </div>
    <div className="body-2wLx-E thin-31rlnD scrollerBase-_bVAAt" dir="ltr" style={{overflow: 'hidden scroll', paddingRight: '8px'}}>
      <div className="divider-1wtgZ3" />
      <div className="bodyInnerWrapper-2bQs1k">
        <h3 className="bodyTitle-2Az3VQ base-21yXnu size12-oc4dx4 muted-eZM05q uppercase-2unHJn">Nota</h3>
        <div className="note-Go5ZP2">
          <textarea placeholder="Clique para adicionar uma nota" aria-label="Nota" maxLength={256} autoCorrect="off" className="textarea-_59yqs inputDefault-3FGxgL input-2g-os5 scrollbarGhostHairline-2LpzZ9 scrollbar-3vVt8d" style={{height: '36px'}} defaultValue={""} />
        </div>
      </div>
      <div aria-hidden="true" style={{position: 'absolute', pointerEvents: 'none', minHeight: '0px', minWidth: '1px', flex: '0 0 auto', height: '14px'}} />
    </div>
  </div></>
}

export default PopOutProfile