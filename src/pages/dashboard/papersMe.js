import {useRef} from 'react';

const PapersMe = props => {
    const ajustesButton = useRef(null);
    return <section className="panels-3wFtMD" aria-label="Área do usuário">
    <div className="wrapper-3Hk9OB" />
    <div className="container-YkUktl">
      <div className="avatarWrapper-1B9FTW" aria-controls="popout_23" aria-expanded="false" aria-label="Definir status" role="button" tabIndex={0}>
        <div className="avatar-1EWyVD wrapper-1VLyxH" role="img" aria-label="Mood" aria-hidden="false" style={{width: '32px', height: '32px'}}>
          <svg width={40} height={32} viewBox="0 0 40 32" className="mask-1FEkla svg-2azL_l" aria-hidden="true">
            <foreignObject x={0} y={0} width={32} height={32} mask="url(#svg-mask-avatar-status-round-32)">
              <div className="avatarStack-3vfSFa">
                <img 
                style={{borderRadius: `50%`}}
                src={`${ typeof props.user.photo != `object` ? props.user.photo : window[`getPath`]() + `assets/default.webp`}`} alt=" " className="avatar-b5OQ1N" aria-hidden="true" />
              </div>
            </foreignObject>
            <rect 
            rx={"32"}
            width={10} height={10} x={22} y={22} fill="hsl(359, calc(var(--saturation-factor, 1) * 82.6%), 59.4%)" mask="url(#svg-mask-status-dnd)" className="pointerEvents-9SZWKj" />
          </svg>
        </div>
      </div>
      <div className="nameTag-sc-gpq canCopy-IgTwyV" aria-label="Copiar nome de usuário" role="button" tabIndex={0}>
        <div className="colorStandard-21JIj7 size14-3fJ-ot usernameContainer-3PPkWq">
          <div className="size14-3fJ-ot title-338goq">{props.user.username}</div>
        </div>
      </div>
      <div className="flex-2S1XBF flex-3BkGQD horizontal-112GEH horizontal-1Piu5- flex-3BkGQD directionRow-2Iu2A9 justifyStart-2Mwniq alignStretch-Uwowzr noWrap-hBpHBz" style={{flex: '0 1 auto'}}>
        <button role="switch" aria-checked="false" aria-label="Silenciar" type="button" className="button-12Fmur enabled-9OeuTA button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F">
          <div className="contents-3ca1mk">
            <svg aria-hidden="false" width={20} height={20} viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z" fill="currentColor" />
              <path fillRule="evenodd" clipRule="evenodd" d="M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z" fill="currentColor" />
            </svg>
          </div>
        </button>
        <button role="switch" aria-checked="false" aria-label="Desativar áudio" type="button" className="button-12Fmur enabled-9OeuTA button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F">
          <div className="contents-3ca1mk">
            <svg aria-hidden="false" width={20} height={20} viewBox="0 0 24 24">
              <svg width={24} height={24} viewBox="0 0 24 24">
                <path d="M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z" fill="currentColor" />
              </svg>
            </svg>
          </div>
        </button>
        <button 
        ref={ajustesButton}
        onClick={() => {
          props.setAjustes(!props.ajustes)
          props.toolTipHideBottom()
        }}
        onMouseOver={() => {
          if(!props.toolTipBottom){
            props.toolTipShowBottom(`Configurações de Usuário`, ajustesButton.current.offsetLeft - 60, ajustesButton.current.offsetTop - 35)
          }
        }}
        onMouseLeave={() => {
          props.toolTipHideBottom()
        }}
        aria-label="Configurações de Usuário" type="button" className="button-12Fmur enabled-9OeuTA button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F">
          <div className="contents-3ca1mk">
            <svg aria-hidden="false" width={20} height={20} viewBox="0 0 24 24">
              <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  </section>
}

export default PapersMe