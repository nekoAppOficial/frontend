const ModalProfile = props => {
    return (
    <>
    <div className="backdrop-2ByYRN withLayer-2VVmpp" style={{opacity: '0.85', background: 'hsl(0, calc(var(--saturation-factor, 1) * 0%), 0%)'}} />
    <div className="layer-1Ixpg3">
        <div className="focusLock-2tveLW" role="dialog" aria-label="Perfil de usuário" tabIndex={-1} aria-modal="true">
        <div className="root-8LYsGj root-g14mjS small-23Atuv fullscreenOnMobile-ixj0e3" style={{opacity: 1, transform: 'scale(1)'}}>
            <div className="topSection-13QKHs">
            <header>
                <div className="banner-1YaD3N profileBanner-1owKI5" style={{backgroundColor: 'rgb(12, 12, 12)'}} />
                <div className="header-S26rhB">
                <div>
                    <div className="avatar-3QF_VA wrapper-1VLyxH" role="img" aria-label="wallycoding, Offline" aria-hidden="false" style={{width: '120px', height: '120px'}}>
                    <svg width={138} height={120} viewBox="0 0 138 120" className="mask-1FEkla svg-2azL_l" aria-hidden="true">
                        <foreignObject x={0} y={0} width={120} height={120} mask="url(#svg-mask-avatar-status-round-120)">
                        <div className="avatarStack-3vfSFa">
                            <img src={window[`getPath`]() + `assets/default.webp`} alt=" " className="avatar-b5OQ1N" aria-hidden="true" />
                        </div>
                        </foreignObject>
                        <rect width={24} height={24} x={88} y={88} fill="hsl(214, calc(var(--saturation-factor, 1) * 9.9%), 50.4%)" mask="url(#svg-mask-status-offline)" className="pointerEvents-9SZWKj" />
                    </svg>
                    </div>
                </div>
                <div className="headerTop-1PNKck">
                    <div className="badgeList-2aoHPw container-1gYwHN" aria-label="Emblemas de Usuário" role="group" />
                    <div className="relationshipButtons-3ByBpj">
                    <button type="button" className="actionButton-iarQTd button-f2h6uQ lookFilled-yCfaCM colorGreen-3y-Z79 sizeSmall-wU2dO- grow-2sR_-F">
                        <div className="contents-3ca1mk">Enviar mensagem</div>
                    </button>
                    {/* <div className role="button" tabIndex={0}>
                        <svg className="additionalActionsIcon-3Cy8UU" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24">
                        <g fill="none" fillRule="evenodd">
                            <path d="M24 0v24H0V0z" />
                            <path fill="currentColor" d="M12 16c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2z" />
                        </g>
                        </svg>
                    </div> */}
                    </div>
                </div>
                </div>
                <div className="nameTagNoCustomStatus-3ocqoK nameTag-2Nlmsy nameTag-H6kSJ0">
                <span className="username-3JLfHz username-1g6Iq1">username</span>
                {/* <span className="discriminator-1bqsd3">#4876</span> */}
                </div>
            </header>
            <div className="tabBarContainer-sCZC4w">
                <div className="tabBar-2hXqzU top-K_jibn" role="tablist" aria-orientation="horizontal">
                <div className="tabBarItem-30Te4- item-3XjbnG selected-g-kMVV themed-2-lozF" role="tab" aria-selected="true" aria-controls="user_info-tab" aria-disabled="false" tabIndex={0}>Informações do usuário</div>
                <div className="tabBarItem-30Te4- item-3XjbnG themed-2-lozF" role="tab" aria-selected="false" aria-controls="mutual_guilds-tab" aria-disabled="false" tabIndex={-1}>Servidores em comum</div>
                <div className="tabBarItem-30Te4- item-3XjbnG themed-2-lozF" role="tab" aria-selected="false" aria-controls="mutual_friends-tab" aria-disabled="false" tabIndex={-1}>Amigos em comum</div>
                </div>
            </div>
            </div>
            <div className="body-1Ukv50">
            <div className="infoScroller-1QMpon thin-31rlnD scrollerBase-_bVAAt fade-1R6FHN" dir="ltr" style={{overflow: 'hidden scroll', paddingRight: '12px'}}>
                <div className="userInfoSection-2u2hir">
                <h3 className="userInfoSectionHeader-2mYYun base-21yXnu size12-oc4dx4 uppercase-2unHJn">Nota</h3>
                <div className="note-3M15gE">
                    <textarea placeholder="Clique para adicionar uma nota" aria-label="Nota" maxLength={256} autoCorrect="off" className="textarea-_59yqs inputDefault-3FGxgL input-2g-os5 scrollbarGhostHairline-2LpzZ9 scrollbar-3vVt8d" style={{height: '44px'}} defaultValue={""} />
                </div>
                </div>
                {/* <div className="userInfoSection-2u2hir">
                </div> */}
                <div aria-hidden="true" style={{position: 'absolute', pointerEvents: 'none', minHeight: '0px', minWidth: '1px', flex: '0 0 auto', height: '0px'}} />
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
    )
}

export default ModalProfile