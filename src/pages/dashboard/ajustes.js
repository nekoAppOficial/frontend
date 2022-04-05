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
      <div className="container-1eFtFS">
        <nav className="wrapper-1_HaEi guilds-2JjMmN" aria-label="Barra lateral dos servidores">
          <ul role="tree" tabIndex={0} data-list-id="guildsnav" data-jump-section="global" className="tree-3agP2X">
            <div className="unreadMentionsIndicatorTop-2bTgUU">
              <div className="bar-2eAyLE unreadMentionsBar-ZXXoOH unread-2wipsx active-334r9u" aria-hidden="true" style={{transform: 'translateY(-180%)'}}>
                <span className="text-2GsXbW">novo</span>
              </div>
            </div>
            <div className="scroller-3X7KbA none-2-_0dP scrollerBase-_bVAAt" dir="ltr" style={{overflow: 'hidden scroll', paddingRight: '0px'}}>
              <div className="tutorialContainer-1pL9QS">
                <div className="listItem-3SmSlK">
                  <div className="pill-L_aLMQ wrapper-z5ab_q" aria-hidden="true">
                    <span className="item-2LIpTv" style={{opacity: 1, height: '40px', transform: 'none'}} />
                  </div>
                  <div className="listItemWrapper-3d87LP selected-3a1QGn">
                    <div className="wrapper-28eC3z">
                      <svg width={48} height={48} viewBox="0 0 48 48" className="svg-2zuE5p" overflow="visible">
                        <defs>
                          <path d="M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z" id="59ecd3f0-b757-4680-959c-130222d0ec59-blob_mask" />
                          <rect id="59ecd3f0-b757-4680-959c-130222d0ec59-upper_badge_masks" x={28} y={-4} width={24} height={24} rx={12} ry={12} transform="translate(20 -20)" />
                          <rect id="59ecd3f0-b757-4680-959c-130222d0ec59-lower_badge_masks" x={28} y={28} width={24} height={24} rx={12} ry={12} transform="translate(0 0)" />
                        </defs>
                        <mask id="59ecd3f0-b757-4680-959c-130222d0ec59" fill="black" x={0} y={0} width={48} height={48}>
                          <use href="#59ecd3f0-b757-4680-959c-130222d0ec59-blob_mask" fill="white" />
                          <use href="#59ecd3f0-b757-4680-959c-130222d0ec59-upper_badge_masks" fill="black" />
                          <use href="#59ecd3f0-b757-4680-959c-130222d0ec59-lower_badge_masks" fill="black" />
                        </mask>
                        <mask id="59ecd3f0-b757-4680-959c-130222d0ec59-stroke_mask">
                          <rect width="150%" height="150%" x="-25%" y="-25%" fill="white" />
                          <use href="#59ecd3f0-b757-4680-959c-130222d0ec59-upper_badge_masks" fill="black" />
                          <use href="#59ecd3f0-b757-4680-959c-130222d0ec59-lower_badge_masks" fill="black" />
                        </mask>
                        <foreignObject mask="url(#59ecd3f0-b757-4680-959c-130222d0ec59)" x={0} y={0} width={48} height={48}>
                          <div className="wrapper-3kah-n selected-1Drb7Z" role="listitem" data-list-item-id="guildsnav___home" tabIndex={-1} aria-label="Início">
                            <div className="childWrapper-1j_1ub">
                              <svg className="homeIcon-r0w4ny" aria-hidden="false" width={28} height={20} viewBox="0 0 28 20">
                                <path fill="currentColor" d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z" />
                              </svg>
                            </div>
                          </div>
                        </foreignObject>
                      </svg>
                      <div className="lowerBadge-3WTshO" style={{opacity: 1, transform: 'translate(0px, 0px)'}}>
                        <div className="numberBadge-37OJ3S base-3IDx3L baseShapeRound-3epLEv" style={{backgroundColor: 'var(--status-danger)', width: '16px', paddingRight: '1px'}}>1</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listItem-3SmSlK">
                <div className="guildSeparator-a4uisj" />
              </div>
              <div aria-label="Servidores">
                <div className="listItem-3SmSlK">
                  <div className="pill-2RsI5Q wrapper-z5ab_q" aria-hidden="true">
                    <span className="item-2LIpTv" style={{opacity: 1, height: '8px', transform: 'none'}} />
                  </div>
                  <div>
                    
                  </div>
                </div>
              </div>
              <div className="tutorialContainer-2jwoiB">
                <div className="listItem-3SmSlK">
                  <div className="listItemWrapper-3d87LP">
                    <div className="wrapperSimple-Js2rIO wrapper-28eC3z">
                      <svg width={48} height={48} viewBox="0 0 48 48" className="svg-2zuE5p" overflow="visible">
                        <foreignObject mask="url(#179bd0ac-951e-444e-9ae7-2295e69fb36f)" x={0} y={0} width={48} height={48}>
                          <div className="circleIconButton-1VxDrg" aria-label="Adicionar um servidor" role="listitem" data-list-item-id="guildsnav___create-join-button" tabIndex={-1}>
                            <svg className="circleIcon-3489FI" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24">
                              <path fill="currentColor" d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z" />
                            </svg>
                          </div>
                        </foreignObject>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="wrapper-3XVBev" aria-hidden="true">
                  <div data-dnd-name="Acima fim da lista" className="target-1eRTCg" />
                </div>
              </div>
              <div className="listItem-3SmSlK">
                <div className="pill-1NRFie">
                  <div className="wrapper-z5ab_q" aria-hidden="true" />
                </div>
                <div className="listItemWrapper-3d87LP">
                  <div className="wrapperSimple-Js2rIO wrapper-28eC3z">
                    <svg width={48} height={48} viewBox="0 0 48 48" className="svg-2zuE5p" overflow="visible">
                      <foreignObject mask="url(#c2515250-2f70-48a7-a62f-a10481a7bd14)" x={0} y={0} width={48} height={48}>
                        <div className="circleIconButton-1VxDrg" aria-label="Explore servidores públicos" role="listitem" data-list-item-id="guildsnav___guild-discover-button" tabIndex={-1}>
                          <svg aria-hidden="false" className="circleIcon-3489FI" width={24} height={24} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z" />
                          </svg>
                        </div>
                      </foreignObject>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="listItem-3SmSlK">
                <div className="guildSeparator-a4uisj" />
              </div>
              <div className="listItem-3SmSlK">
                <div className="pill-1NRFie">
                  <div className="wrapper-z5ab_q" aria-hidden="true" />
                </div>
                <div className="listItemWrapper-3d87LP">
                  <div className="wrapperSimple-Js2rIO wrapper-28eC3z">
                    <svg width={48} height={48} viewBox="0 0 48 48" className="svg-2zuE5p" overflow="visible">
                      <foreignObject mask="url(#5c0be27d-700c-451a-8b84-ca06eefffac6)" x={0} y={0} width={48} height={48}>
                        <div className="circleIconButton-1VxDrg" aria-label="Baixar apps" role="listitem" data-list-item-id="guildsnav___app-download-button" tabIndex={-1}>
                          <svg className="circleIcon-3489FI" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24">
                            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 20V18H6V20H18Z" />
                          </svg>
                        </div>
                      </foreignObject>
                    </svg>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" style={{position: 'absolute', pointerEvents: 'none', minHeight: '0px', minWidth: '1px', flex: '0 0 auto', height: '0px'}} />
            </div>
            <div className="unreadMentionsIndicatorBottom-3RJMnQ">
              <div className="bar-2eAyLE unreadMentionsBar-ZXXoOH unread-2wipsx active-334r9u" aria-hidden="true" style={{transform: 'translateY(180%)'}}>
                <span className="text-2GsXbW">novo</span>
              </div>
            </div>
          </ul>
        </nav>
        <div className="base-2jDfDU">
          <div className="content-1SgpWY">
            <div className="sidebar-1tnWFu hasNotice-1s68so">
              <nav className="privateChannels-oVe7HL" aria-label="Canais privados">
                <div className="searchBar-3TnChZ">
                  <button type="button" className="searchBarComponent-3N7dCG">Encontre ou comece uma conversa</button>
                </div>
                <div className="scroller-WSmht3 thin-31rlnD scrollerBase-_bVAAt fade-1R6FHN" tabIndex={0} data-list-id="private-channels-uid_19" data-jump-section="global" style={{overflow: 'hidden scroll', paddingRight: '0px'}}>
                  <ul role="list" aria-label="Mensagens diretas" className="content-2a4AW9" style={{height: '144px'}}>
                    <div aria-hidden="true" style={{height: '8px'}} />
                    <li className="channel-1Shao0 container-32HW5s" role="listitem" aria-posinset={1} aria-setsize={2}>
                      <div className="interactive-1vLZ_I interactive-iyXY_x linkButton-2NshQj interactiveSelected-29CP8y selected-3veCBZ">
                        <a className="link-39sEB3" data-list-item-id="private-channels-uid_19___friends" tabIndex={-1} href="/channels/@me">
                          <div className="layout-1LjVue">
                            <div className="avatar-1HDIsL">
                              <svg className="linkButtonIcon-7rsZcu" aria-hidden="false" width={16} height={16} viewBox="0 0 24 24">
                                <g fill="none" fillRule="evenodd">
                                  <path fill="currentColor" fillRule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)" />
                                  <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z" />
                                </g>
                              </svg>
                            </div>
                            <div className="content-66wMin">
                              <div className="nameAndDecorators-2A8Bbk">
                                <div className="name-2m3Cms">Amigos</div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="numberBadge-37OJ3S base-3IDx3L baseShapeRound-3epLEv" style={{backgroundColor: 'var(--status-danger)', width: '16px', paddingRight: '1px'}}>1</div>
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
                    <li className="channel-1Shao0 container-32HW5s" role="listitem" aria-setsize={2} aria-posinset={2}>
                      <div className="interactive-1vLZ_I interactive-iyXY_x">
                        <a className="link-39sEB3" aria-label="Mood (mensagem direta)" data-list-item-id="private-channels-uid_19___959841144785739826" tabIndex={-1} href="/channels/@me/959841144785739826">
                          <div className="layout-1LjVue">
                            <div className="avatar-1HDIsL">
                              <div className="wrapper-1VLyxH" role="img" aria-label="Mood, Offline" aria-hidden="false" style={{width: '32px', height: '32px'}}>
                                <svg width={40} height={32} viewBox="0 0 40 32" className="mask-1FEkla svg-2azL_l" aria-hidden="true">
                                  <foreignObject x={0} y={0} width={32} height={32} mask="url(#svg-mask-avatar-status-round-32)">
                                    <div className="avatarStack-3vfSFa">
                                      <img src="https://cdn.discordapp.com/avatars/886285460924678196/bef7129b3dcc6947c3cdd33894d493bb.webp?size=32" alt=" " className="avatar-b5OQ1N" aria-hidden="true" />
                                    </div>
                                  </foreignObject>
                                  <rect width={10} height={10} x={22} y={22} fill="hsl(214, calc(var(--saturation-factor, 1) * 9.9%), 50.4%)" mask="url(#svg-mask-status-offline)" className="pointerEvents-9SZWKj" />
                                </svg>
                              </div>
                            </div>
                            <div className="content-66wMin">
                              <div className="nameAndDecorators-2A8Bbk">
                                <div className="name-2m3Cms">
                                  <div className="overflow-1wOqNV">Mood</div>
                                </div>
                              </div>
                              <div className="subText-3Sk0zy" />
                            </div>
                          </div>
                        </a>
                        <div className="closeButton-mupH76" aria-label="Fechar mensagem direta" role="button" tabIndex={0}>
                          <svg className="closeIcon-1NwtbI" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z" />
                          </svg>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
              <section className="panels-3wFtMD" aria-label="Área do usuário">
                <div className="wrapper-3Hk9OB" />
                <div className="container-YkUktl">
                  <div className="avatarWrapper-1B9FTW" aria-controls="popout_20" aria-expanded="false" aria-label="Definir status" role="button" tabIndex={0}>
                    <div className="avatar-1EWyVD wrapper-1VLyxH" role="img" aria-label="moonDareKn, Disponível" aria-hidden="false" style={{width: '32px', height: '32px'}}>
                      <svg width={40} height={32} viewBox="0 0 40 32" className="mask-1FEkla svg-2azL_l" aria-hidden="true">
                        <foreignObject x={0} y={0} width={32} height={32} mask="url(#svg-mask-avatar-status-round-32)">
                          <div className="avatarStack-3vfSFa">
                            <img src="/assets/6f26ddd1bf59740c536d2274bb834a05.png" alt=" " className="avatar-b5OQ1N" aria-hidden="true" />
                          </div>
                        </foreignObject>
                        <rect width={10} height={10} x={22} y={22} fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" mask="url(#svg-mask-status-online)" className="pointerEvents-9SZWKj" />
                      </svg>
                    </div>
                  </div>
                  <div className="nameTag-sc-gpq canCopy-IgTwyV" aria-label="Copiar nome de usuário" role="button" tabIndex={0}>
                    <div className="colorStandard-21JIj7 size14-3fJ-ot usernameContainer-3PPkWq">
                      <div className="size14-3fJ-ot title-338goq">moonDareKn</div>
                    </div>
                    <div className="size12-oc4dx4 subtext-2HDqJ7">#3323</div>
                  </div>
                  <div className="flex-2S1XBF flex-3BkGQD horizontal-112GEH horizontal-1Piu5- flex-3BkGQD directionRow-2Iu2A9 justifyStart-2Mwniq alignStretch-Uwowzr noWrap-hBpHBz" style={{flex: '0 1 auto'}}>
                    <button role="switch" aria-checked="true" aria-label="Silenciar" type="button" className="button-12Fmur enabled-9OeuTA button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F">
                      <div className="contents-3ca1mk">
                        <svg aria-hidden="false" width={20} height={20} viewBox="0 0 24 24">
                          <path d="M6.7 11H5C5 12.19 5.34 13.3 5.9 14.28L7.13 13.05C6.86 12.43 6.7 11.74 6.7 11Z" fill="currentColor" />
                          <path d="M9.01 11.085C9.015 11.1125 9.02 11.14 9.02 11.17L15 5.18V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 11.03 9.005 11.0575 9.01 11.085Z" fill="currentColor" />
                          <path d="M11.7237 16.0927L10.9632 16.8531L10.2533 17.5688C10.4978 17.633 10.747 17.6839 11 17.72V22H13V17.72C16.28 17.23 19 14.41 19 11H17.3C17.3 14 14.76 16.1 12 16.1C11.9076 16.1 11.8155 16.0975 11.7237 16.0927Z" fill="currentColor" />
                          <path d="M21 4.27L19.73 3L3 19.73L4.27 21L8.46 16.82L9.69 15.58L11.35 13.92L14.99 10.28L21 4.27Z" className="strikethrough-2Kl6HF" fill="currentColor" />
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
                    <button aria-label="Configurações de Usuário" type="button" className="button-12Fmur enabled-9OeuTA button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F">
                      <div className="contents-3ca1mk">
                        <svg aria-hidden="false" width={20} height={20} viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </section>
            </div>
            <div className="container-2cd8Mz">
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
                    <div className="item-3mHhwr item-3XjbnG themed-2-lozF" role="tab" aria-selected="false" aria-controls="online-tab" aria-disabled="false" tabIndex={-1}>Disponível</div>
                    <div className="item-3mHhwr item-3XjbnG themed-2-lozF" role="tab" aria-selected="false" aria-controls="all-tab" aria-disabled="false" tabIndex={-1}>Todos</div>
                    <div className="item-3mHhwr item-3XjbnG selected-g-kMVV themed-2-lozF" role="tab" aria-selected="true" aria-controls="pending-tab" aria-disabled="false" tabIndex={0} aria-label="Pendente">Pendente <div className="badge-3wMLmL numberBadge-37OJ3S base-3IDx3L baseShapeRound-3epLEv" style={{backgroundColor: 'var(--status-danger)', width: '16px', paddingRight: '0px'}}>1</div>
                    </div>
                    <div className="item-3mHhwr item-3XjbnG themed-2-lozF" role="tab" aria-selected="false" aria-controls="blocked-tab" aria-disabled="false" tabIndex={-1}>Bloqueado</div>
                    <div className="item-3mHhwr item-3XjbnG themed-2-lozF" role="tab" aria-selected="false" aria-controls="add_friend-tab" aria-disabled="false" tabIndex={-1} aria-label="Adicionar amigo" style={{backgroundColor: 'hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)', color: 'hsl(0, calc(var(--saturation-factor, 1) * 0%), 100%)'}}>
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
                        <path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </section>
              <div className="tabBody-2dgbAs">
                <div className="peopleColumn-1wMU14" role="tabpanel" id="pending-tab" tabIndex={-1}>
                  <div className="searchBar-2aylmZ container-2oNtJn medium-2NClDM">
                    <div className="inner-2pOSmK">
                      <input className="input-2m5SfJ" placeholder="Buscar" aria-label="Buscar" defaultValue />
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
                    <h2 className="title-x4dI75 container-q97qHp">Pendente — 1</h2>
                  </div>
                  <div className="peopleList-2VBrVI auto-2K3UW5 scrollerBase-_bVAAt" dir="ltr" role="list" tabIndex={0} data-list-id="people" style={{overflow: 'hidden scroll', paddingRight: '0px'}}>
                    <div>
                      <div className="peopleListItem-u6dGxF" role="listitem" data-list-item-id="people___886285460924678196" tabIndex={-1} style={{height: '62px', opacity: 1}}>
                        <div className="listItemContents-2NFd61">
                          <div className="userInfo-2WpsYG userInfo-3NoxwU">
                            <div className="avatar-2MSPKk wrapper-1VLyxH" role="img" aria-label="Mood" aria-hidden="false" style={{width: '32px', height: '32px'}}>
                              <svg width={40} height={32} viewBox="0 0 40 32" className="mask-1FEkla svg-2azL_l" aria-hidden="true">
                                <foreignObject x={0} y={0} width={32} height={32} mask="url(#svg-mask-avatar-default)">
                                  <div className="avatarStack-3vfSFa">
                                    <img src="https://cdn.discordapp.com/avatars/886285460924678196/bef7129b3dcc6947c3cdd33894d493bb.webp?size=32" alt=" " className="avatar-b5OQ1N" aria-hidden="true" />
                                  </div>
                                </foreignObject>
                              </svg>
                            </div>
                            <div className="text-3j8t_e">
                              <div className="discordTag-3HiQI9 nameTag-H6kSJ0">
                                <span className="username-3JLfHz username-Qpc78p">Mood</span>
                                <span className="discriminator-WV5K5s">#7604</span>
                              </div>
                              <div className="subtext-xfubwR">Pedido de amizade recebido</div>
                            </div>
                          </div>
                          <div className="actions-2ZgdH4">
                            <div className="actionButton-3-B2x- actionAccept-2nmnLv" aria-label="Aceitar" role="button" tabIndex={0}>
                              <svg className="icon-1WVg4I" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z" />
                              </svg>
                            </div>
                            <div className="actionButton-3-B2x- actionDeny-1pQVuZ" aria-label="Ignorar" role="button" tabIndex={0}>
                              <svg className="icon-1WVg4I" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" style={{position: 'absolute', pointerEvents: 'none', minHeight: '0px', minWidth: '1px', flex: '0 0 auto', height: '8px'}} />
                  </div>
                </div>
                <div className="nowPlayingColumn-1eCBCN">
                  <div className="container-1oAagU">
                    <div className="scroller-hE2gWq thin-31rlnD scrollerBase-_bVAAt" dir="ltr" style={{overflow: 'hidden scroll', paddingRight: '8px'}}>
                      <h3 className="header-Imy05m base-21yXnu size20-9iTTnl">Ativo agora</h3>
                      <div className="emptyCard-KDifrB">
                        <h5 className="emptyHeader-2tT-AY base-21yXnu size16-rrJ6ag">Por enquanto, está quieto...</h5>
                        <div className="size14-3fJ-ot emptyText-29ycwI">Quando um(a) amigo(a) começa uma atividade, como jogar um jogo ou bater papo por voz, mostraremos aqui!</div>
                      </div>
                      <div aria-hidden="true" style={{position: 'absolute', pointerEvents: 'none', minHeight: '0px', minWidth: '1px', flex: '0 0 auto', height: '16px'}} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        window.localStorage.setItem(`theme`, `theme-white`)
        window.document.querySelector(`#root`).classList.remove(`theme-dark`);
        window.document.querySelector(`#root`).classList.add(`theme-light`);

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
          console.log(avatar)
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