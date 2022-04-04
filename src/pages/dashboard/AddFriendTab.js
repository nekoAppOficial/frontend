import {useState, useEffect} from 'react'

const AddFriendTab = (props) => {
    const [username, setUsername] = useState('');
    const [error, setError] = useState(false);
    const [messageError, setMessageError] = useState('');
    const [sucess, setSucess] = useState(false);

    useState(() => {
      props.socket.on(`notifications`, (data) => {
        if(data.page == `addFriend`){
          setError(!data.sucess)
          setSucess(data.sucess)
          setMessageError(data.message)
        }
      })
    }, false)    

    return <div className="tabBody-2dgbAs" style={{
      width: `100%`
    }}>
    <div className="peopleColumn-1wMU14" role="tabpanel" id="add_friend-tab" tabIndex={-1}>
      <header className="header-30YxSJ">
        <h2 className="colorStandard-21JIj7 size14-3fJ-ot h2-1EaYVL title-3hptVQ defaultColor-2cKwKo title-3sFEQD">Adicionar amigo</h2>
        <form 
        onSubmit={(e) => {
          props.socket.emit(`addFriend`, {
            token: localStorage.getItem(`token`),
            userID: username
          })
          e.preventDefault()
        }}
        autoComplete="off">
          <div className="colorStandard-21JIj7 size14-3fJ-ot description-30xx7u formText-2ngGjI modeDefault-2fEh7a" id="uid_16-decription">Você pode adicionar amigos com a Discord Tag deles. CuIdAdO cOm As MaIúScUlAs!</div>
          <div 
          className={`addFriendInputWrapper-kkoSV9 ${error ? `error-31k8Cx` : ``}`}>
            <div className="inputWrapper-1YNMmM addFriendInput-1Ta-rO inputText-30IjXy">
              <input 
              onKeyUp={(e) => {
                setUsername(e.target.value);
              }}
              onFocus={(e) => {
                setUsername(e.target.value);
              }}
              onBlur={(e) => {
                setUsername(e.target.value);
              }}
              className="inputDefault-3FGxgL input-2g-os5 input-1bmui3 inputText-30IjXy" id="uid_16" maxLength={37} autoComplete="off" name="add-friend" data-lpignore="true" placeholder="Insira um nome de usuário" aria-label="Insira um nome de usuário" aria-describedby="uid_16-decription" type="text" />
            </div>
            <button 
            disabled={username.length < 1}
            type="submit" className="button-f2h6uQ lookFilled-yCfaCM colorBrand-I6CyqQ sizeSmall-wU2dO- grow-2sR_-F">
              <div className="contents-3ca1mk">Enviar pedido de amizade</div>
            </button>
          </div>
          <div 
          style={{
            color: `${sucess ? `var(--text-positive)` : ``}`
          }}
          className="colorStandard-21JIj7 size14-3fJ-ot error-30DGjS description-30xx7u formText-2ngGjI marginTop8-24uXGp modeDefault-2fEh7a" role="alert" id="uid_16-error">
            {messageError}
          </div>
        </form>
      </header>
      <div className="emptyState-30PyIN">
        <div className="friendsEmpty-gs15T1" style={{opacity: 1}}>
          <div className="flex-2S1XBF flex-3BkGQD vertical-3aLnqW flex-3BkGQD directionColumn-3pi1nm justifyCenter-rrurWZ alignCenter-14kD11 noWrap-hBpHBz wrapper-5BaSTh" style={{flex: '1 1 auto'}}>
            <div className="image-20MDYu marginBottom40-fvAlAV" 
            style={{flex: '0 1 auto', width: '376px', height: '162px', backgroundImage: 'url("../assets/b5eb2f7d6b3f8cc9b60be4a5dcf28015.svg")'}} />
            <div className="flexChild-3PzYmX" direction="vertical-3aLnqW flex-3BkGQD directionColumn-3pi1nm" style={{flex: '0 1 auto'}}>
              <div className="text-27cdrj marginTop8-24uXGp">Wumpus está esperando os amigos. Mas você não precisa esperar!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default AddFriendTab