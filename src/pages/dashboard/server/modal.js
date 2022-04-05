import {useState} from 'react'

const Modal = props => {
    const [step, setStep] = useState(0)
    return <>
    { props.openModalServer &&
    <div className="layerContainer-2v_Sit">
    <div className="backdrop-2ByYRN withLayer-2VVmpp" style={{
        opacity: '0.85', background: 'hsl(0, calc(var(--saturation-factor, 1) * 0%), 0%)'}} />
    <div className="layer-1Ixpg3">
      <div className="focusLock-2tveLW" role="dialog" aria-labelledby="uid_150" tabIndex={-1} aria-modal="true">
        <div 
            className="modal-3BwHH2 root-g14mjS medium-1ywRMv fullscreenOnMobile-ixj0e3" style={{
            animation: 'openModal 0.4s ease-in-out forwards',
            opacity: 1, transform: 'scale(1)', background: '#292929'}}>
        <button 
        style={{
            zIndex: '2147483647'
        }}
        onClick={() => {
            props.setOpenModalServer(false)
        }}
        aria-label="Fechar" type="button" className="closeButton-3nyHNb close-1mLglB button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F">
            <div className="contents-3ca1mk">
                <svg className="closeIcon-11LhXr" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24">
                <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z" />
                </svg>
            </div>
        </button>
          <div className="sidebar-2VDDXt">
            <div className="sidebar-2MOV-j">
              <div className="step1-Tzgix3 art-1l0MMj" />
              <div className="step24Clouds-3YdnEH art-1l0MMj step12Animation-9yjKBd show-1be-x2" />
              <div className="step34Flag-hQl3Jq art-1l0MMj step24Animation-3P7kDF" />
              <div className="step24Base-2d7y1b art-1l0MMj step12Animation-9yjKBd show-1be-x2" />
              <div className="step24Ground-3wtfRs art-1l0MMj step12Animation-9yjKBd show-1be-x2" />
              <div className="step2Base-2AYAOK art-1l0MMj step12Animation-9yjKBd show-1be-x2" />
              <div className="step2Character-ERsJEC art-1l0MMj step24Animation-3P7kDF show-1be-x2" />
              <div className="step34Base-2c8a12 art-1l0MMj step24Animation-3P7kDF" />
              <div className="step3Character-1YijNc art-1l0MMj step24Animation-3P7kDF" />
              <div className="step4Character-1LhczU art-1l0MMj step24Animation-3P7kDF" />
              <div 
              style={{backgroundImage: `
              url(${window[`getPath`]()}assets/30b0855344a020eac6b0ca6eac7032ec.svg)`
            }}
              className="step24Foreground-2aWJUq art-1l0MMj step12Animation-9yjKBd show-1be-x2" />
            </div>
          </div>
          { step === 0 &&
          <Inicio setStep={setStep}/>
          }
          { step === 1 &&
          <CreateServer setStep={setStep}/>
          }
          { step === 2 &&
          <EntrarServer setStep={setStep}/>
          }
        </div>
      </div>
    </div>
  </div> } </>
}

const CreateServer = (props) => {
    return <div style={{position: 'relative', overflow: 'hidden', width: '440px', height: '394px',}}>
    <div style={{
        animation: 'openContainer 0.4s ease-in-out forwards',
        position: 'absolute', flexDirection: 'column', backfaceVisibility: 'hidden', transform: 'scale(1, 1)', left: 'auto', right: 'auto'}}>
      <div className="container-1dhHuV standardFooter-2LtMwu">
        <div className="flex-2S1XBF flex-3BkGQD vertical-3aLnqW flex-3BkGQD directionColumn-3pi1nm justifyStart-2Mwniq alignCenter-14kD11 noWrap-hBpHBz header-1zd7se header-12n7su" id="uid_151" style={{flex: '0 0 auto'}}>
          
          <h3 className="title-OdeD-o base-21yXnu size24-17l95E">Nos conte mais sobre seu servidor</h3>
          <div className="colorHeaderSecondary-g5teka size16-rrJ6ag subtitle-1cc8Nz">Para podermos te ajudar com as configurações, seu novo servidor é para alguns amigos ou uma grande comunidade?</div>
        </div>
        <div className="content-2hZxGK optionsList-dmHy1l thin-31rlnD scrollerBase-_bVAAt" dir="ltr" style={{overflow: 'hidden scroll', paddingRight: '8px'}}>
          <button
          className="container-x8Y1ix">
            <img className="icon-AynerZ desaturate-_Twf3u" alt="" src={`${window[`getPath`]()}assets/45d6946387a0c66f4eb4e62a6e7758ea.svg`} />
            <div 
            style={{
                fontWeight: 700,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                color: 'var(--text-normal)'
            }}
            className="colorStandard-21JIj7 size16-rrJ6ag text-PdAsFQ">Para meus amigos e eu</div>
            <img className="arrow-2yY1Tm" alt="" src={`${window[`getPath`]()}assets/dea5252276408a8bfca6dda585ca5216.svg`} />
          </button>
          <button className="container-x8Y1ix">
            <img className="icon-AynerZ desaturate-_Twf3u" alt="" src={`${window[`getPath`]()}/assets/5d8898dd9356f25901bae20fc8c980d9.svg`} />
            <div className="colorStandard-21JIj7 size16-rrJ6ag text-PdAsFQ">Para um clube ou comunidade</div>
            <img className="arrow-2yY1Tm" alt="" src={`${window[`getPath`]()}assets/dea5252276408a8bfca6dda585ca5216.svg`} />
          </button>
          <div className="colorHeaderSecondary-g5teka size14-3fJ-ot skip-2hTIXL">Não sabe? Você pode <a className="anchor-1MIwyf anchorUnderlineOnHover-2qPutX" role="button" tabIndex={0}>pular essa pergunta</a> por enquanto. </div>
          <div aria-hidden="true" style={{position: 'absolute', pointerEvents: 'none', minHeight: '0px', minWidth: '1px', flex: '0 0 auto', height: '8px'}} />
        </div>
      </div>
    </div>
    <div className="flex-2S1XBF flex-3BkGQD horizontalReverse-60Katr horizontalReverse-2QssvL flex-3BkGQD directionRowReverse-HZatnx justifyBetween-wAERV6 alignStretch-Uwowzr noWrap-hBpHBz footer-31IekZ footer-1bRyji footerSeparator-VzAYwb" style={{flex: '0 0 auto'}}>
        <button 
        style={{
            color: `white`
        }}
        type="button" className="backButton-2Ps-B8 button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ sizeMin-DfpWCE grow-2sR_-F">
            <div 
            onClick={() => props.setStep(0)}
            className="contents-3ca1mk">Voltar</div>
        </button>
    </div>
  </div>
}

const Inicio = props => {
    return  <div className="content-rR1mSS theme-light">
    <div style={{position: 'relative', overflow: 'hidden', width: '440px', height: '414px'}}>
      <div style={{
          animation: 'closeContainer 0.4s ease-in-out forwards',
          position: 'absolute', flexDirection: 'column', backfaceVisibility: 'hidden', transform: 'scale(1, 1)', left: 'auto', right: 'auto'}}>
        <div className="container-1dhHuV shortFooter-2MNEOx">
          <div className="flex-2S1XBF flex-3BkGQD vertical-3aLnqW flex-3BkGQD directionColumn-3pi1nm justifyStart-2Mwniq alignCenter-14kD11 noWrap-hBpHBz header-1zd7se header-1c1AhF" id="uid_155" style={{flex: '0 0 auto'}}>
            <h3 className="title-1_TkpU base-21yXnu size24-17l95E">Crie seu primeiro servidor do Discord</h3>
            <div className="colorHeaderSecondary-g5teka size16-rrJ6ag subtitle-3m-md1">Seu servidor é onde você e seus amigos se reúnem. Crie o seu e comece a interagir.</div>
          </div>
          <div className="content-2hZxGK templatesList-uohY49 templates-gfci2z thin-31rlnD scrollerBase-_bVAAt" dir="ltr" style={{overflow: 'hidden scroll'}}>
            <button 
            onClick={() => props.setStep(1)}
            className="container-x8Y1ix">
              <img className="icon-AynerZ desaturate-_Twf3u" alt="" src={`${window[`getPath`]()}assets/f303eeb986430817ee8a52a9b81aea45.svg`} />
              <div className="colorStandard-21JIj7 size16-rrJ6ag text-PdAsFQ">Criar o meu</div>
              <img className="arrow-2yY1Tm" alt="" src={`${window[`getPath`]()}assets/dea5252276408a8bfca6dda585ca5216.svg`} />
            </button>
           
            <div aria-hidden="true" style={{position: 'absolute', pointerEvents: 'none', minHeight: '0px', minWidth: '1px', flex: '0 0 auto'}} />
          </div>
        </div>
      </div>
    </div>
    <button aria-label="Fechar" type="button" className="closeButton-3nyHNb close-1mLglB button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F">
      <div className="contents-3ca1mk">
        <svg className="closeIcon-11LhXr" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24">
          <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z" />
        </svg>
      </div>
    </button>
    <div className="flex-2S1XBF flex-3BkGQD horizontalReverse-60Katr horizontalReverse-2QssvL flex-3BkGQD directionRowReverse-HZatnx justifyBetween-wAERV6 alignStretch-Uwowzr noWrap-hBpHBz footer-31IekZ footer-1bRyji join-3GsLBF footerSeparator-VzAYwb" style={{flex: '0 0 auto'}}>
      <a 
      onClick={() => props.setStep(2)}
      className="anchor-1MIwyf anchorUnderlineOnHover-2qPutX joinCTA-3KUwZ9" role="button" tabIndex={0}>
        <div className="colorStandard-21JIj7 size14-3fJ-ot joinCTA-3KUwZ9">Já tem um convite? Entrar em um servidor</div>
      </a>
    </div>
  </div>
}

const EntrarServer = props => {
    return <div style={{position: 'relative', overflow: 'hidden', width: '440px', height: '394px',}}>
    <div style={{
        animation: 'openContainer 0.4s ease-in-out forwards',
        position: 'absolute', flexDirection: 'column', backfaceVisibility: 'hidden', transform: 'scale(1, 1)', left: 'auto', right: 'auto'}}>
    <div className="container-1dhHuV standardFooter-2LtMwu">
      <div className="flex-2S1XBF flex-3BkGQD vertical-3aLnqW flex-3BkGQD directionColumn-3pi1nm justifyStart-2Mwniq alignCenter-14kD11 noWrap-hBpHBz header-1zd7se header-gJE1Nw" id="uid_154" style={{flex: '0 0 auto'}}>
        <div className="colorHeaderPrimary-jN_yGr size24-17l95E title-2X7fMW">Entrar em um servidor</div>
        <div className="colorHeaderSecondary-g5teka size16-rrJ6ag">Insira um convite abaixo para entrar em um servidor existente</div>
      </div>
      <div className="content-2hZxGK thin-31rlnD scrollerBase-_bVAAt" dir="ltr" style={{overflow: 'hidden scroll', paddingRight: '8px'}}>
        <form className="inputForm-3_vwEM">
          <div>
            <h5 className="colorStandard-21JIj7 size14-3fJ-ot h5-2RwDNl title-3hptVQ formTitle-2fzABs" id="uid_176">Link de convite</h5>
            <div className="inputWrapper-1YNMmM input-3gROg1">
              <input className="inputDefault-3FGxgL input-2g-os5 inputInner-2I73d6" name type="text" placeholder maxLength={999} aria-labelledby="uid_176" />
            </div>
          </div>
        </form>
        <div className="colorHeaderSecondary-g5teka size12-oc4dx4">Exemplos: https://discord.gg/cool-people, hTKzmak</div>
        <div className="colorHeaderSecondary-g5teka size12-oc4dx4 connectCTA-2kpCsf">Procurando mais servidores para entrar? <a className="anchor-1MIwyf anchorUnderlineOnHover-2qPutX" role="button" tabIndex={0}>Conecte suas contas do Twitch ou do YouTube.</a>
        </div>
        <div aria-hidden="true" style={{position: 'absolute', pointerEvents: 'none', minHeight: '0px', minWidth: '1px', flex: '0 0 auto', height: '0px'}} />
      </div>
    </div>
  </div>
  <div className="flex-2S1XBF flex-3BkGQD horizontalReverse-60Katr horizontalReverse-2QssvL flex-3BkGQD directionRowReverse-HZatnx justifyBetween-wAERV6 alignStretch-Uwowzr noWrap-hBpHBz footer-31IekZ footer-1bRyji footerSeparator-VzAYwb" style={{flex: '0 0 auto'}}>
        <button 
        style={{
            color: `white`
        }}
        type="button" className="backButton-2Ps-B8 button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ sizeMin-DfpWCE grow-2sR_-F">
            <div 
            onClick={() => props.setStep(0)}
            className="contents-3ca1mk">Voltar</div>
        </button>
    </div>
  </div>
} 

export default Modal