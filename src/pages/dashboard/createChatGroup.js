import { Navigate } from 'react-router-dom';

const CreateChatGroup = props => {
    return (
            <div id="popout_20" className="layer-2aCOJ3" style={{position: 'absolute', top: '44px', right: '113px'}}>
                <div className="focusLock-2tveLW" role="dialog" aria-labelledby={3} tabIndex={-1} aria-modal="true">
                <div className="popout-3gby1q root-g14mjS small-23Atuv fullscreenOnMobile-ixj0e3" style={{opacity: 1, transform: 'scale(1)'}}>
                    <div className="flex-2S1XBF flex-3BkGQD vertical-3aLnqW flex-3BkGQD directionColumn-3pi1nm justifyStart-2Mwniq alignStretch-Uwowzr noWrap-hBpHBz header-1zd7se" id={3} style={{flex: '0 0 auto'}}>
                    <h2 id="uid_14" className="wrapper-1HSdhi base-21yXnu size20-9iTTnl">Selecionar amigos</h2>
                    </div>
                    <div className="flex-2S1XBF flex-3BkGQD vertical-3aLnqW flex-3BkGQD directionColumn-3pi1nm justifyCenter-rrurWZ alignCenter-14kD11 noWrap-hBpHBz errorState-1R6bBt noFriends-1Y8EWR" style={{flex: '1 1 auto'}}>
                    <div 
                    style={{
                        backgroundImage: `url(${window[`getPath`]()}assets/1dabb8ee5d7cb5137c06f958e0091573.svg)`
                    }}
                    className="errorStateIcon-3y6XWh marginBottom20-315RVT" />
                    <div>Você não tem amigos para adicionar!</div>
                    <button 
                    onClick={() => {
                        console.log(`hey`)
                        return <Navigate to={`/channels/@me/friends/add`}/>
                    }}
                    type="button" className="marginTop20-2T8ZJx button-f2h6uQ lookFilled-yCfaCM colorGreen-3y-Z79 sizeSmall-wU2dO- fullWidth-fJIsjq grow-2sR_-F">
                        <div className="contents-3ca1mk">Adicionar amigo</div>
                    </button>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default CreateChatGroup