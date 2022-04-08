import { useEffect, useRef, useState } from "react"

const Ajustes = props => {
    const [tab, setTab] = useState(0)
    useEffect(() => {
      //Press esc
      document.addEventListener("keydown", (e) => {
        if (e.keyCode === 27) {
          props.setAjustes(!props.ajustes)
        }
      })
    }, )
    
    return <div 
    style={{
      zIndex: 5000
    }}
    className="layers-OrUESM layers-1YQhyW">
    
    <div aria-hidden="true" className="layer-86YKbF baseLayer-W6S8cY stop-animations" style={{opacity: 1, transform: 'scale(0.93) translateZ(0px)'}}>
      <div className="pictureInPicture-1GQX91" />
    </div>
    <div aria-hidden="false" className="layer-86YKbF" style={{animation: `openModal2 0.4s ease-in-out`}}>
      <div className="standardSidebarView-E9Pc3j">
        <div className="sidebarRegion-1VBisG">
          <div className="sidebarRegionScroller-FXiQOh thin-31rlnD scrollerBase-_bVAAt fade-1R6FHN" dir="ltr" style={{overflow: 'hidden scroll', paddingRight: '0px'}}>
            <nav className="sidebar-nqHbhN">
              <div className="side-2ur1Qk" role="tablist" aria-orientation="vertical" aria-label="Configurações de Usuário">
                <div className="header-2Kx1US" tabIndex={-1} role="button">Configurações de Usuário</div>
                <div 
                onClick={() => {
                  setTab(0)
                }}
                className={`item-3XjbnG ${tab == 0 ? `selected-g-kMVV` : ``} themed-2-lozF`} role="tab" aria-selected="true" aria-controls="profile-customization-tab" aria-disabled="false" tabIndex={0} aria-label="Perfil do usuário">Perfil do usuário</div>
                <div className="separator-2wx7h6" />
                <div 
                onClick={() => {
                  setTab(1)
                }}
                className={`item-3XjbnG ${tab == 1 ? `selected-g-kMVV` : ``} themed-2-lozF`} role="tab" aria-selected="true" aria-controls="appearance-tab" aria-disabled="false" tabIndex={0}>
                  Aparência
                </div>
                <div className="separator-2wx7h6" />
                <div 
                className="item-3XjbnG themed-2-lozF" role="tab" aria-selected="false" aria-controls="logout-tab" aria-disabled="false" tabIndex={-1} aria-label="Sair">
                  <div 
                  onClick={() => {
                    window.localStorage.setItem(`token`, ``)
                    window.location.reload()
                  }}
                  className="tabBarItemContainer-2HdIlr">Sair <svg aria-hidden="false" width={16} height={16} viewBox="0 0 24 24">
                      <path fill="currentColor" d="M18 2H7C5.897 2 5 2.898 5 4V11H12.59L10.293 8.708L11.706 7.292L16.414 11.991L11.708 16.706L10.292 15.294L12.582 13H5V20C5 21.103 5.897 22 7 22H18C19.103 22 20 21.103 20 20V4C20 2.898 19.103 2 18 2Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </nav>
            <div aria-hidden="true" style={{position: 'absolute', pointerEvents: 'none', minHeight: '0px', minWidth: '1px', flex: '0 0 auto', height: '0px'}} />
          </div>
        </div>
        <div className="contentRegion-3HkfJJ">
          <div className="contentTransitionWrap-1YD530">
            <div className="contentRegionScroller-2_GT_N contentRegionShownSidebar-fHXkEg auto-2K3UW5 scrollerBase-_bVAAt" dir="ltr" style={{overflow: 'hidden scroll', paddingRight: '0px'}}>
              <div className="contentColumn-1C7as6 contentColumnDefault-3eyv5o" role="tabpanel" id="profile-customization-tab" tabIndex={-1}>
                <div className="profileCustomizationSection-2OOT4p">
                  <div className="sectionTitle-3j2YI1">
                    <h1 className="colorStandard-21JIj7 size14-3fJ-ot h1-34Txb0 title-3hptVQ defaultColor-2cKwKo defaultMarginh1-EURXsm" id="uid_54">Perfil do usuário</h1>
                  </div>
                  <div className="children-1xdcWE">
                    { tab == 0 && <UserProfile
                    socket={props.socket}
                    setTab={setTab}
                    user={props.user}
                    />}
                    { tab == 1 && <Aparencia
                    setTab={setTab}
                    user={props.user}/>}
                  </div>
                </div>
              </div>
              <div className="toolsContainer-25FL6V">
                <div 
                onClick={() => {
                  props.setAjustes(!props.ajustes)
                }}
                className="tools-kIrEGr">
                  <div className="container-O54IuJ">
                    <div className="closeButton-PCZcma" aria-label="Fechar" role="button" tabIndex={0}>
                      <svg aria-hidden="true" width={18} height={18} viewBox="0 0 24 24">
                        <path fill="hsl(210, calc(var(--saturation-factor, 1) * 2.9%), 86.7%)" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z" />
                      </svg>
                    </div>
                    <div 
                    className="keybind-13vtq8" aria-hidden="true">ESC</div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" style={{position: 'absolute', pointerEvents: 'none', minHeight: '0px', minWidth: '1px', flex: '0 0 auto', height: '0px'}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

const Aparencia = props => {
  return (
      <div className="marginTop8-24uXGp">
    <h5 className="colorStandard-21JIj7 size14-3fJ-ot h5-2RwDNl title-3hptVQ defaultMarginh5-3Jxf6f" id="uid_55">Tema</h5>
    <div role="radiogroup" aria-labelledby="uid_55" aria-orientation="vertical" aria-disabled="false">
      <div 
      className="item-2idW98 marginBottom8-emkd0_ horizontal-1Piu5- flex-3BkGQD directionRow-2Iu2A9 itemFilled-1cPbtg" role="radio" aria-checked={window.localStorage.getItem(`theme`) == `theme-dark`} tabIndex={0}>
        <div 
        onClick={() => {
          window.localStorage.setItem(`theme`, `theme-dark`)
          window.document.querySelector(`#root`).classList.remove(`theme-light`);
          window.document.querySelector(`#root`).classList.add(`theme-dark`);
          props.setTab(0)
          setTimeout(() => {
            props.setTab(1)
          }, 200)
        }}
        className="radioBar-3w9XY-" style={{padding: '10px'}}>
          <div>
            <svg aria-hidden="false" width={24} height={24} viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" />
              <circle cx={12} cy={12} r={5} className="radioIconForeground-2BMavi" fill="currentColor" />
            </svg>
          </div>
          <div className="info-2FZci4">
            <div className="size16-rrJ6ag title-1yyp9V">Escuro</div>
          </div>
        </div>
      </div>
      <div 
      onClick={() => {
        window.localStorage.setItem(`theme`, `theme-light`)
        window.document.querySelector(`#root`).classList.remove(`theme-dark`);
        window.document.querySelector(`#root`).classList.add(`theme-light`);
        props.setTab(3)
          setTimeout(() => {
            props.setTab(1)
          }, 1)

      }}
      className="item-2idW98 marginBottom8-emkd0_ horizontal-1Piu5- flex-3BkGQD directionRow-2Iu2A9 itemFilled-1cPbtg" role="radio" 
      aria-checked={window.localStorage.getItem(`theme`) == `theme-light`} tabIndex={-1}>
        <div className="radioBar-3w9XY-" style={{padding: '10px'}}>
          <div>
          <svg aria-hidden="false" width={24} height={24} viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" />
              <circle cx={12} cy={12} r={5} className="radioIconForeground-2BMavi" fill="currentColor" />
            </svg>
          </div>
          <div className="info-2FZci4">
            <div className="size16-rrJ6ag title-1yyp9V">Claro</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

const UserProfile = props => {
  const inputFile = useRef(null) 
  const onChangeFile = (event) => {
    event.stopPropagation();
    event.preventDefault();
    var file = event.target.files[0];
    var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          var avatar = reader.result;
          props.socket.emit("change-avatar", {avatar, token: window.localStorage.getItem("token")})
        }
}
  return (
    <>
    <input 
    onChange={onChangeFile.bind(this)}
    type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
    <div className="divider-ogkn3u" />
                    <div className="baseLayout-8AMrwn">
                      <div>
                        <div className="customizationSection-IGy2fS">
                          <h5 className="colorStandard-21JIj7 size14-3fJ-ot h5-2RwDNl title-3hptVQ defaultMarginh5-3Jxf6f">Avatar</h5>
                          <div className="buttonsContainer-12kYno">
                            <button 
                            onClick={() => {
                              inputFile.current.click();
                            }}
                            type="button" className="button-f2h6uQ lookFilled-yCfaCM colorBrand-I6CyqQ sizeSmall-wU2dO- grow-2sR_-F">
                              <div className="contents-3ca1mk">Mudar avatar</div>
                            </button>
                          </div>
                        </div>
                        <div className="customizationSection-IGy2fS profileColorSection-2BQBEp">
                          <h5 className="colorStandard-21JIj7 size14-3fJ-ot h5-2RwDNl title-3hptVQ defaultMarginh5-3Jxf6f">Cor do perfil</h5>
                          <div className="buttonsContainer-3rygH4" aria-label="Cor do perfil" role="radiogroup" aria-orientation="horizontal" aria-disabled="false">
                            <div className="colorSwatch-3KbHGH">
                              <div className role="radio" tabIndex={0} aria-label="Usar cor de perfil padrão, calculada a partir do seu avatar. #fca41c" aria-checked="true">
                                <div className="swatch-35F5kl" style={{backgroundColor: 'rgb(252, 164, 28)'}}>
                                  <svg aria-hidden="false" width={32} height={24} viewBox="0 0 24 24">
                                    <path fill="hsl(0, calc(var(--saturation-factor, 1) * 0%), 100%)" fillRule="evenodd" clipRule="evenodd" d="M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z" />
                                  </svg>
                                </div>
                                <div className="colorHeaderSecondary-g5teka size12-oc4dx4 swatchDescription--ZWxV0" aria-hidden="true">Padrão</div>
                              </div>
                            </div>
                            <div className="colorSwatch-3KbHGH">
                              <div className role="radio" tabIndex={-1} aria-label="Usar cor de perfil personalizada. Selecionada: #36393f" aria-checked="false">
                                <div className="customSwatch-I4jK4z swatch-35F5kl defaultSwatch-1tVtRe" style={{backgroundColor: 'rgb(54, 57, 63)'}} />
                                <div className="colorHeaderSecondary-g5teka size12-oc4dx4 swatchDescription--ZWxV0" aria-hidden="true">Personalizadas</div>
                              </div>
                              <div className="dropperIconButton-15Dl5X" aria-controls="popout_55" aria-expanded="false" aria-label="Selecionar cor personalizada" role="button" tabIndex={0}>
                                <svg className="dropperIcon-1Efpqn" width={14} height={14} viewBox="0 0 16 16">
                                  <g fill="none">
                                    <path d="M-4-4h24v24H-4z" />
                                    <path fill="hsl(0, calc(var(--saturation-factor, 1) * 0%), 100%)" d="M14.994 1.006C13.858-.257 11.904-.3 10.72.89L8.637 2.975l-.696-.697-1.387 1.388 5.557 5.557 1.387-1.388-.697-.697 1.964-1.964c1.13-1.13 1.3-2.985.23-4.168zm-13.25 10.25c-.225.224-.408.48-.55.764L.02 14.37l1.39 1.39 2.35-1.174c.283-.14.54-.33.765-.55l4.808-4.808-2.776-2.776-4.813 4.803z" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="customizationSection-IGy2fS">
                          <h5 className="colorStandard-21JIj7 size14-3fJ-ot h5-2RwDNl title-3hptVQ defaultMarginh5-3Jxf6f">Faixa do perfil <svg aria-label="Exclusivo do Nitro" className="nitroWheel-3wt-sz" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24">
                              <path fill="currentColor" d="M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z" />
                            </svg>
                          </h5>
                          <div className="colorStandard-21JIj7 size14-3fJ-ot description-30xx7u formText-2ngGjI sectionDescription-ol6C7B modeDefault-2fEh7a">Recomendamos uma imagem de, pelo menos, 600x240. Você pode enviar um PNG, JPG ou um GIF animado com menos de 10MB.</div>
                          <button type="button" className="shinyButton-2Q9MDB button-f2h6uQ lookFilled-yCfaCM colorGreen-3y-Z79 sizeMedium-2bFIHr grow-2sR_-F">
                            <div className="contents-3ca1mk nitroUpsellButtonInner-KVmxak">
                              <svg className="nitroUpsellButtonWheel-1l4Xo0" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z" />
                              </svg>Desbloquear com Nitro <div className="shineContainerDefault-3f8X_o shineContainer-NmlfaV buttonShine-p5V5TB">
                                <div className="flex-2S1XBF flex-3BkGQD horizontal-112GEH horizontal-1Piu5- flex-3BkGQD directionRow-2Iu2A9 justifyCenter-rrurWZ alignCenter-14kD11 noWrap-hBpHBz shine-ZNDEKg" style={{flex: '1 1 auto'}}>
                                  <div className="shineInner-OI1Z2S" />
                                </div>
                              </div>
                            </div>
                          </button>
                        </div>
                        <div className="customizationSection-IGy2fS">
                          <h5 className="colorStandard-21JIj7 size14-3fJ-ot h5-2RwDNl title-3hptVQ defaultMarginh5-3Jxf6f" id="uid_46">Sobre mim</h5>
                          <div className="colorStandard-21JIj7 size14-3fJ-ot description-30xx7u formText-2ngGjI sectionDescription-ol6C7B modeDefault-2fEh7a">Você pode usar markdown e links, se desejar.</div>
                          <div className="channelTextArea-1VQBuV">
                            <div className="bioTextArea-dDGOeC scrollableContainer-15eg7h webkit-QgSAqd">
                              <div className="inner-NQg18Y">
                                <div className="profileBioInput-1CcOUr textArea-2CLwUE textAreaSlate-9-y-k2 slateContainer-3x9zil" style={{height: '44px'}}>
                                  <div>
                                    <div className="placeholder-1rCBhr slateTextArea-27tjG0 fontSize16Padding-XoMpjI textAreaWithoutAttachmentButton-1as0NS" aria-hidden="true" />
                                    <div role="textbox" spellCheck="false" aria-haspopup="listbox" aria-labelledby="uid_46" aria-describedby="uid_47" aria-invalid="false" aria-autocomplete="list" className="markup-eYLPri editor-H2NA06 slateTextArea-27tjG0 fontSize16Padding-XoMpjI textAreaWithoutAttachmentButton-1as0NS" autoCorrect="false" data-can-focus="true" aria-multiline="true" autoCapitalize="false" data-slate-editor="true" data-slate-node="value" contentEditable="true" zindex={-1} style={{position: 'relative', outline: 'none', whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>
                                      <div data-slate-node="element">
                                        <span data-slate-node="text">
                                          <span data-slate-leaf="true" className="emptyText-1o0WH_">
                                            <span data-slate-zero-width="n" data-slate-length={0}>
                                              <br />
                                            </span>
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="buttons-uaqb-5">
                                  <div className="expression-picker-chat-input-button buttonContainer-2lnNiN">
                                    <button tabIndex={0} aria-label="Selecionar emoji" type="button" className="emojiButtonNormal-35P0_i emojiButton-3FRTuj emojiButton-1fMsf3 button-3BaQ4X button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F">
                                      <div className="contents-3ca1mk">
                                        <div className="sprite-2lxwfc" style={{backgroundPosition: '0px 0px', backgroundSize: '242px 110px', transform: 'scale(1)', filter: 'grayscale(100%)'}} />
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="characterCount-8yNPfb">
                              <div className="flairContainer-xF7I3K">
                                <span aria-hidden="true" aria-label="190 caracteres restantes">190</span>
                              </div>
                              <span className="hiddenVisually-2ydA7k">190 caracteres restantes</span>
                            </div>
                          </div>
                          <span id="uid_47" className="hiddenVisually-2ydA7k">Máximo de 190 caracteres.</span>
                        </div>
                      </div>
                      <div className="customizationSection-IGy2fS preview-Z55SA3">
                        <h5 className="colorStandard-21JIj7 size14-3fJ-ot h5-2RwDNl title-3hptVQ defaultMarginh5-3Jxf6f">Prévia</h5>
                        <div className="profileBannerPreview-3mLIdO">
                          <div className="bannerNormal-2jf-df banner-3D8GgT" style={{backgroundColor: 'rgb(252, 164, 28)'}}>
                            <div className="bannerNitroUpsell-2iP18z" role="button" tabIndex={0}>
                              <h3 className="bannerNitroUpsellText-Ll6vKY base-21yXnu size12-oc4dx4 uppercase-2unHJn">Desbloquear faixa</h3>
                            </div>
                          </div>
                          <div 
                          onClick={() => {
                            inputFile.current.click();
                          }}
                          className="imageUploader-1X7wVc avatarUploaderNormal-2m2hFm avatarUploader-qEFQS2">
                            <div className="imageUploaderInner-IIRaFr avatarUploaderInner-p38nm2" 
                            style={{backgroundImage: `url("${ typeof props.user.photo != `object` ? props.user.photo : window[`getPath`]() + `assets/default.webp`}")`}}>
                              <span aria-hidden="true" />
                              <div className="imageUploaderHint-33zkjZ" aria-hidden="true">Mudar avatar</div>
                              <div className="fileInput-1LZSb9" aria-label="Mudar
                              avatar" role="button" tabIndex={0} />
                              <div 
                              style={{
                                backgroundImage: `url("${ window[`getPath`]() + `assets/4a1000a95b1aad334e98f9d15b9d0ec4.svg`}")`
                              }}
                              className="imageUploaderIcon-2OHmFu" />
                            </div>
                          </div>
                          <div className="headerTop-3GPUSF">
                            <div className="profileBadges-2pItdR container-1gYwHN" aria-label="Emblemas de Usuário" role="group" />
                            <div className="headerText-1-WmDq">
                              <div className="headerTagNoNickname-3tGHj6 headerTag-3GXZkV nameTag-H6kSJ0">
                                <span className="username-3JLfHz headerTagUsernameNoNickname-1TjuLc headerTagUsernameBase-XYisdh">{props.user.username}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
    </>
  )
}

export default Ajustes