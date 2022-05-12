import {useEffect, useState, useRef} from 'react';
import ChatFloat from './chatFloat'
import NotFriendMessage from './notFriendMessage'
import PopOutProfile from './profile/popout'
import ParseMessage from './util/messageParse'

const ChatPrivate = (props) => {
    const [message, setMessage] = useState('');
    const [userId, setUserId] = useState(window.location.pathname.split(`@me/`)[1]);
    const [user, setUser] = useState({messages: [], user: {username: ``}});
    const [messages, setMessagens] = useState([]);
    const [popUser, setPopUser] = useState({user: {username: null}})
    const spoilerButton = useRef(null);
    const modificarButton = useRef(null);
    const removerButton = useRef(null);
    const anexarArquivo = useRef(null);
    const [spoiler, setSpoiler] = useState(false);
    const [anexoImage, setAnexoImage] = useState(null)



      props.socket.on('onlineB', friend => {
        if(friend.id == userId){
          const userOld = user
          userOld.user.status = `online`
          userOld.user.photo = friend.photo
          userOld.user.coverPhoto = friend.coverPhoto
          userOld.user.backgroundColor = friend.backgroundColor
          userOld.user.aboutMe = friend.aboutMe
          userOld.user.admin = friend.admin
          setUser(userOld)
        }
      })

      props.socket.on('offlineB', friend => {
        if(friend.id == userId){
          const userOld = user
          userOld.user.status = `offline`
          setUser(userOld)
        }
      })

      props.socket.on(`refreshFriends`, friend => {
       const userOld = user
       userOld.user.photo = friend.photo
       userOld.user.coverPhoto = friend.coverPhoto
       userOld.user.backgroundColor = friend.backgroundColor
       userOld.user.aboutMe = friend.aboutMe
       userOld.user.admin = friend.admin
    })

    const inputFile = useRef(null) 
    const onChangeFile = (event) => {
      event.stopPropagation();
      event.preventDefault();
      var file = event.target.files[0];
      var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = function () {
            const image = reader.result;
            setAnexoImage(image)
          }
    }

    const timer = setInterval(() => {
     if( userId != window.location.pathname.split(`@me/`)[1] ){
       if(typeof window.location.pathname.split(`@me/`)[1] != `undefined`){
          setUserId(window.location.pathname.split(`@me/`)[1])
       }
     }
    }, 1000);

    useEffect(() => {
     props.socket.emit(`getUser`, {userID: userId, token: localStorage.getItem('token')})
    }, [false, userId])

    useEffect(() => {
      props.socket.on(`getUserProfile`, (user) => {
        // console.log(user)
        setUser(user);
        console.log(user)
        setMessagens(user.messages)
        //Scroll to the bottom
        try {
          setTimeout(() => {
            document.querySelector(`.scroller-kQBbkU`).scrollTo(0, 9999999999999999999999)
          }, 200)
        } catch (error) {
          
        }
      })
      props.socket.on(`message`, (message) => {
        if(message.userDe.id == userId || message.userPara.id == userId){
          setMessagens(old => [...old, message])
          //Scroll to the bottom
          try {
            document.querySelector(`.scroller-kQBbkU`).scrollTo(0, 9999999999999999999999)
          } catch (error) {
            
          }
        } 
      })
    }, false)
    

    return <>
    { user.user.username == `` && <ChatFloatB/> }
    { user.user.username !== `` && 
    props.chatFloating && <ChatFloat myFriends={props.myFriends}
    chatFloating={props.chatFloating}
    socket={props.socket}
    me={props.user}
    setUserID={setUserId}
    />}
    { user.user.username !== `` && 
    <div 
    className={`chat-2ZfjoI ${props.chatFloating ? `chatFloat` : ``}`}>
    <input 
    onChange={onChangeFile.bind(this)}
    type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
    <div className="uploadArea-2uvx-B uploadArea-2Nu_Vc">
      <div className="uploadDropModal-13Kd20">
        <div className="bgScale-1iWuPF" />
        <div className="inner-rBP-MS">
          <div className="icons-1UZPvE">
            <div className="wrapOne-2VKwBJ">
              <div className="icon-HW4tZ- one-NzgGbt document-1u6V3N" />
            </div>
            <div className="wrapThree-3wCMkN">
              <div className="icon-HW4tZ- three-fZYihQ code-rRQnfi" />
            </div>
            <div className="wrapTwo-3T9wbh">
              <div className="icon-HW4tZ- two-1t2_74 image-2ssF8k" />
            </div>
          </div>
          <div className="title-3ChJ_v">Enviar para <strong>@{user.user.username}</strong>
          </div>
        </div>
      </div>
    </div>
    <section className="title-31SJ6t container-ZMc96U themed-Hp1KC_" aria-label="Cabeçalho do canal">
      <div className="children-3xh0VB">
        <div className="iconWrapper-2awDjA">
          <svg x={0} y={0} className="icon-2xnN2Y" aria-hidden="true" width={24} height={24} viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12C2 17.515 6.486 22 12 22C14.039 22 15.993 21.398 17.652 20.259L16.521 18.611C15.195 19.519 13.633 20 12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12V12.782C20 14.17 19.402 15 18.4 15L18.398 15.018C18.338 15.005 18.273 15 18.209 15H18C17.437 15 16.6 14.182 16.6 13.631V12C16.6 9.464 14.537 7.4 12 7.4C9.463 7.4 7.4 9.463 7.4 12C7.4 14.537 9.463 16.6 12 16.6C13.234 16.6 14.35 16.106 15.177 15.313C15.826 16.269 16.93 17 18 17L18.002 16.981C18.064 16.994 18.129 17 18.195 17H18.4C20.552 17 22 15.306 22 12.782V12C22 6.486 17.514 2 12 2ZM12 14.599C10.566 14.599 9.4 13.433 9.4 11.999C9.4 10.565 10.566 9.399 12 9.399C13.434 9.399 14.6 10.565 14.6 11.999C14.6 13.433 13.434 14.599 12 14.599Z" />
          </svg>
        </div>
        <span className="hiddenVisually-2ydA7k">Mensagem direta</span>
        <h3 role="button" className="cursorPointer-3JF56F title-17SveM base-21yXnu size16-rrJ6ag">{user.user.username}</h3>
        <div aria-label="Não perturbar" className="status-12NUUC disableFlex-3I_kDH">
          <svg width={10} height={15} viewBox="0 0 10 15" className="mask-2Me5HY">
            <mask id="1266c8e2-8cdd-4e53-8969-fee6e2a6d1e9">
              <rect x={0} y="2.5" width={10} height={10} rx={5} ry={5} fill="white" />
              <rect x="1.25" y="6.25" width="7.5" height="2.5" rx="1.25" ry="1.25" fill="black" />
              <polygon points="-2.16506,-2.5 2.16506,0 -2.16506,2.5" fill="black" transform="scale(0) translate(5.625 7.5)" style={{transformOrigin: '5.625px 7.5px'}} />
              <circle fill="black" cx={5} cy="7.5" r={0} />
            </mask>
            <rect x={0} y={0} width={10} height={15} 
            fill={user.user.status == `online` ? `#00B348` : `#D3D3D3`}  mask="url(#1266c8e2-8cdd-4e53-8969-fee6e2a6d1e9)" />
          </svg>
        </div>
        <div className="spacer-1F8G1H" />
      </div>
      <div className="toolbar-3_r2xA">
        <div className="iconWrapper-2awDjA clickable-ZD7xvu" role="button" aria-label="Iniciar chamada de voz" tabIndex={0}>
          <svg x={0} y={0} className="icon-2xnN2Y" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24">
            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11 5V3C16.515 3 21 7.486 21 13H19C19 8.589 15.411 5 11 5ZM17 13H15C15 10.795 13.206 9 11 9V7C14.309 7 17 9.691 17 13ZM11 11V13H13C13 11.896 12.105 11 11 11ZM14 16H18C18.553 16 19 16.447 19 17V21C19 21.553 18.553 22 18 22H13C6.925 22 2 17.075 2 11V6C2 5.447 2.448 5 3 5H7C7.553 5 8 5.447 8 6V10C8 10.553 7.553 11 7 11H6C6.063 14.938 9 18 13 18V17C13 16.447 13.447 16 14 16Z" />
          </svg>
        </div>
        <div className="iconWrapper-2awDjA clickable-ZD7xvu" role="button" aria-label="Iniciar chamada de vídeo" tabIndex={0}>
          <svg x={0} y={0} className="icon-2xnN2Y" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24">
            <path fill="currentColor" d="M21.526 8.149C21.231 7.966 20.862 7.951 20.553 8.105L18 9.382V7C18 5.897 17.103 5 16 5H4C2.897 5 2 5.897 2 7V17C2 18.104 2.897 19 4 19H16C17.103 19 18 18.104 18 17V14.618L20.553 15.894C20.694 15.965 20.847 16 21 16C21.183 16 21.365 15.949 21.526 15.851C21.82 15.668 22 15.347 22 15V9C22 8.653 21.82 8.332 21.526 8.149Z" />
          </svg>
        </div>
        <div className="iconWrapper-2awDjA clickable-ZD7xvu" role="button" aria-label="Mensagens fixadas" tabIndex={0}>
          <svg x={0} y={0} className="icon-2xnN2Y" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24">
            <path fill="currentColor" d="M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87801V9.88001L5.73596 8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z" />
          </svg>
        </div>
        <div className="iconWrapper-2awDjA clickable-ZD7xvu" role="button" aria-label="Adicionar amigos à MD" tabIndex={0}>
          <svg x={0} y={0} className="icon-2xnN2Y" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24">
            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13 2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z" />
          </svg>
        </div>
        <div className="search-39IXmY">
          <div className="search-2Mwzzq">
            <div className="searchBar-jGtisZ">
              <div className="DraftEditor-root">
                <div className="public-DraftEditorPlaceholder-root">
                  <div className="public-DraftEditorPlaceholder-inner" id="placeholder-tava" style={{whiteSpace: 'pre-wrap'}}>Buscar</div>
                </div>
                <div className="DraftEditor-editorContainer">
                  <div aria-describedby="placeholder-tava" aria-expanded="false" aria-label="Buscar" className="notranslate public-DraftEditor-content" role="combobox" spellCheck="false" aria-haspopup="listbox" style={{outline: 'none', userSelect: 'text', whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>
                    <div data-contents="true">
                      <div className data-block="true" data-editor="tava" data-offset-key="9vuis-0-0">
                        <div data-offset-key="9vuis-0-0" className="public-DraftStyleDefault-block public-DraftStyleDefault-ltr">
                          <span data-offset-key="9vuis-0-0">
                            <br data-text="true" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="icon-tZMHgY iconLayout-SqV3nb small-1hw8IT" tabIndex={-1} aria-hidden="true" aria-label="Limpar busca" role="button">
                <div className="iconContainer-1RqWJj">
                  <svg className="icon-18rqoe visible-2yTnyW" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 7.863 17.167 5.854 15.656 4.344C14.146 2.832 12.137 2 10 2C7.863 2 5.854 2.832 4.344 4.344C2.833 5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 18 10 18C11.799 18 13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397 16 6.891 15.376 5.758 14.243C4.624 13.11 4 11.603 4 10C4 8.398 4.624 6.891 5.758 5.758C6.891 4.624 8.397 4 10 4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 16 8.398 16 10C16 11.603 15.376 13.11 14.242 14.243C13.109 15.376 11.603 16 10 16Z" />
                  </svg>
                  <svg className="icon-18rqoe" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="iconWrapper-2awDjA clickable-ZD7xvu" role="button" aria-label="Caixa de Entrada" tabIndex={0}>
          <svg x={0} y={0} className="icon-2xnN2Y" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24" fill="none">
            <path d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z" fill="currentColor" />
          </svg>
        </div>
        {/* <a tabIndex={-1} className="anchor-1MIwyf anchorUnderlineOnHover-2qPutX" rel="noreferrer noopener" target="_blank">
          <div className="iconWrapper-2awDjA clickable-ZD7xvu" role="button" aria-label="Ajuda" tabIndex={0}>
          <svg
          onClick={() => {
            
            if(props.chatFloating){
              props.setChatFloating(!props.chatFloating)
              return <Navigate to={`/channels/@me/${userId}`}/>
            } else{
              props.setChatFloating(!props.chatFloating)
            }
          }}
          className="opacity-100"
          width={24} height={24} viewBox="0 0 500.000000 500.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
              <path 
              fill={`${props.chatFloating ? `hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)` : `hsl(139, calc(var(--saturation-factor, 1) * 2%), 43.9%)`}`}
              d="M585 3903 c-35 -9 -87 -54 -101 -89 -11 -27 -14 -129 -14 -535 0
    -554 -1 -546 64 -592 24 -17 45 -22 91 -22 46 0 67 5 91 22 64 46 64 48 64
    497 l0 406 1720 0 1720 0 0 -1090 0 -1090 -882 -2 c-863 -3 -884 -3 -916 -23
    -101 -60 -101 -206 -2 -268 l35 -22 970 -3 970 -2 44 22 c25 13 54 36 65 51
    21 28 21 32 21 1337 0 1305 0 1309 -21 1337 -11 15 -40 38 -64 51 l-44 22
    -1896 -1 c-1042 -1 -1904 -4 -1915 -6z" />
              <path 
              fill={`${props.chatFloating ? `hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)` : `hsl(139, calc(var(--saturation-factor, 1) * 2%), 43.9%)`}`}
              d="M552 2323 c-18 -9 -43 -30 -55 -47 l-22 -31 0 -527 c0 -516 0 -527
    21 -555 11 -15 40 -38 64 -50 l44 -23 646 0 646 0 44 23 c24 12 53 35 64 50
    20 28 21 41 23 545 l3 517 -23 39 c-46 80 -8 76 -757 76 -592 0 -669 -2 -698
    -17z m1168 -603 l0 -310 -470 0 -470 0 0 310 0 310 470 0 470 0 0 -310z" />
            </g>
          </svg>
          </div>
        </a> */}
      </div>
    </section>
    <div className="content-1jQy2l">
      <main className="chatContent-3KubbW" aria-label=" (canal)">
        <div className="messagesWrapper-RpOMA3 group-spacing-16">
          <div className="scroller-kQBbkU auto-2K3UW5 scrollerBase-_bVAAt disableScrollAnchor-6TwzvM managedReactiveScroller-1lEEh3" dir="ltr" data-jump-section="global" tabIndex={-1} role="group">
            <div className="scrollerContent-2SW0kQ content-2a4AW9">
              <ol className="scrollerInner-2PPAp2" aria-label="Mensagens em " role="list" data-list-id="chat-messages" tabIndex={0}>
                <span className="navigationDescription-3xDmE2" id="messagesNavigationDescription" aria-hidden="true">Use as setas para cima e para baixo para navegar rapidamente entre as mensagens. As mensagens novas que chegarem serão adicionadas ao final da lista.</span>
                <div className="container-1yy5xN" id="chat-messages-959841144785739826">
                  <div className="wrapper-1VLyxH" role="img" aria-label={user.username} aria-hidden="false" style={{width: '80px', height: '80px'}}>
                    <svg width={92} height={80} viewBox="0 0 92 80" className="mask-1FEkla svg-2azL_l" aria-hidden="true">
                      <foreignObject x={0} y={0} width={80} height={80} mask="url(#svg-mask-avatar-default)">
                        <div className="avatarStack-3vfSFa">
                          <img 
                          style={{
                            borderRadius: '50%',
                          }}
                          src={`${ typeof user.user.photo != `object` ? user.user.photo : window[`getPath`]() + `assets/default.webp`}`} alt=" " className="avatar-b5OQ1N" aria-hidden="true" />
                        </div>
                      </foreignObject>
                    </svg>
                  </div>
                  <h1 className="header-1dhDWV base-21yXnu size32-5yOQel">{user.username}</h1>
                  <div className="size16-rrJ6ag description-22d6ux">Este é o começo do seu histórico de mensagens diretas com <strong>@{user.user.username}</strong>. <div className="container-12Vzf8">
                      <div className="colorHeaderSecondary-g5teka size14-3fJ-ot">Nenhum servidor em comum</div>
                      {/* <div className="divider-2BCfFf" /> */}
                      {/* <button 
                      onClick={() => {
                        props.socket.emit(`recuseFriend`, {
                            token: localStorage.getItem(`token`),
                            userID: userId
                        })
                      }}
                      type="button" className="action-1R6ERA button-f2h6uQ lookFilled-yCfaCM colorPrimary-2AuQVo sizeTiny-3y2SSK grow-2sR_-F">
                        <div className="contents-3ca1mk">Desfazer amizade</div>
                      </button> */}
                    </div>
                  </div>
                </div>
                <div className="divider-IqmEqJ hasContent-1y12-u divider-2rZFJK hasContent-31hcsn" role="separator" aria-label="">
                  <span className="content-3spvdd"></span>
                </div>
                { messages.map((message, index) => (
                  <Message
                  stranger={userId}
                  index={index}
                  userStranger={user}
                  me={props.me}
                  message={message}
                  realTime={false}
                  popUser={popUser}
                  setPopUser={setPopUser}
                  />
                ))}
                <br/>
                <div className="scrollerSpacer-3AqkT9 empty-26e_55" />
                
              </ol>
            </div>
          </div>
        </div>
        <form 
        onSubmit={(e) => {
          props.socket.emit(`sendMessagePrivate`, {
            token: localStorage.getItem(`token`),
            userID: userId,
            message: message,
            image: anexoImage
          })
          document.querySelector(`#inputElement`).value = ``
          setMessage(``)
          setAnexoImage(null)
          e.preventDefault()
        }}
        className="form-3gdLxP">
          <div className="channelTextArea-1FufC0 channelTextArea-1VQBuV">
            <div 
            style={{
              overflow: 'hidden',
            }}
            className="scrollableContainer-15eg7h webkit-QgSAqd">
              { anexoImage && (
              <ul role="list" tabIndex={0} data-list-id="attachments" className="channelAttachmentArea-HwpkuQ scrollbarGhost-dCZKgZ scrollbar-3vVt8d">
                <li role="listitem" data-list-item-id="attachments___upload7" tabIndex={-1} className="upload-vLbqu-">
                  <div className="uploadContainer-TCg-Ji">
                    <div className="imageContainer-ZRSemj">
                      { spoiler ? (
                      <div aria-hidden="false">
                      <div className="spoilerWrapper-3mOkZz">
                      <div className="spoilerContainer-yhWf7D hidden-3B-Rum spoilerContainer-3wsC0k" aria-expanded="false" role="button" tabIndex={0} aria-label="Spoiler">
                        <div className="spoilerWarning-8ovW0v">Spoiler</div>
                        <div aria-hidden="true">
                          <div className="spoilerWrapper-3mOkZz">
                            <img className="image-1091CL spoiler-_2cX4d" aria-hidden="true" alt="" 
                            src={anexoImage} />
                            <div className="tags-QS4-_T" />
                          </div>
                        </div>
                      </div>
                        <div className="tags-QS4-_T" />
                      </div>
                      </div>
                      ) : (
                        <div className="spoilerWrapper-3mOkZz">
                            <img className="image-1091CL" aria-hidden="true" alt="" 
                            src={anexoImage} />
                            <div className="tags-QS4-_T" />
                        </div>
                      ) }
                      <div className="spoilerContainer-yhWf7D spoilerContainer-3wsC0k" aria-expanded="true" role="presentation" tabIndex={-1}>
                       
                      </div>
                    </div>
                    <div className="filenameContainer-2qwz8w">
                      <div className="colorStandard-21JIj7 size14-3fJ-ot filename-jyRDv_">Imagem</div>
                    </div>
                    <div 
                    ref={spoilerButton}
                    className="actionBarContainer-2BJ5hs">
                      <div className="actionBar-1ozugS" aria-label="Ferramentas de envio de anexo">
                        <div 
                        className="wrapper-2vIMkT">
                          <div 
                          onClick={() => {
                            props.toolTipHideBottom()
                            setSpoiler(!spoiler)
                          }}
                          onMouseOver={() => {
                            props.toolTipShowBottom(`Anexo com spoiler`, spoilerButton.current.offsetLeft + 236, (spoilerButton.current.offsetTop + window.innerHeight - 335))
                          }}
                          onMouseLeave={() => {
                            props.toolTipHideBottom()
                          }}
                          className="button-3bklZh" aria-label="Anexo com spoiler" role="button" tabIndex={0}>
                            { spoiler ? (<svg className="actionBarIcon-2vVzNZ" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24"><rect fill="hsl(359, calc(var(--saturation-factor, 1) * 82.6%), 59.4%)" x={2} y="21.2154" width={26} height={2} transform="rotate(-45 2 21.2154)" /><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z" /></svg>) :
                            (<svg className="actionBarIcon-2vVzNZ" aria-hidden="false" width={16} height={16} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 5C5.648 5 1 12 1 12C1 12 5.648 19 12 19C18.352 19 23 12 23 12C23 12 18.352 5 12 5ZM12 16C9.791 16 8 14.21 8 12C8 9.79 9.791 8 12 8C14.209 8 16 9.79 16 12C16 14.21 14.209 16 12 16Z" />
                            <path fill="currentColor" d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" />
                          </svg>)
                            }
                          </div>
                          <div 
                          ref={modificarButton}
                          onClick={() => {
                            props.toolTipHideBottom()
                            inputFile.current.click();
                          }}
                          onMouseOver={() => {
                            props.toolTipShowBottom(`Modificar anexo`, modificarButton.current.offsetLeft + 460, (modificarButton.current.offsetTop + window.innerHeight - 335))
                          }}
                          onMouseLeave={() => {
                            props.toolTipHideBottom()
                          }}
                          className="button-3bklZh" aria-label="Modificar anexo" role="button" tabIndex={0}>
                            <svg className="actionBarIcon-2vVzNZ" aria-hidden="false" width={16} height={16} viewBox="0 0 24 24">
                              <path fillRule="evenodd" clipRule="evenodd" d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z" fill="currentColor" />
                            </svg>
                          </div>
                          <div 
                          ref={removerButton}
                          onClick={() => {
                           props.toolTipHideBottom()
                           setAnexoImage(null)
                          }}
                          onMouseOver={() => {
                            props.toolTipShowBottom(`Remover anexo`, removerButton.current.offsetLeft + 460, (removerButton.current.offsetTop + window.innerHeight - 335))
                          }}
                          onMouseLeave={() => {
                            props.toolTipHideBottom()
                          }}
                          className="button-3bklZh dangerous-Y36ifs" aria-label="Remover anexo" role="button" tabIndex={0}>
                            <svg className="actionBarIcon-2vVzNZ" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24">
                              <path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z" />
                              <path fill="currentColor" d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul> )}
              <div className="inner-NQg18Y sansAttachButton-1ERHue">
                <div className="uploadInput-YH_iku">
                  <input className="file-input" type="file" tabIndex={-1} multiple accept aria-hidden="true" style={{position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', opacity: 0, cursor: 'pointer', fontSize: '0px'}} />
                </div>
                <div className="attachWrapper-3slhXI">
                  <button 
                  ref={anexarArquivo}
                  onClick={() => {
                   props.toolTipHideBottom()
                   inputFile.current.click();
                  }}
                  onMouseOver={() => {
                    props.toolTipShowBottom(`Anexar imagem`, anexarArquivo.current.offsetLeft + 318, (anexarArquivo.current.offsetTop + window.innerHeight - 100))
                  }}
                  onMouseLeave={() => {
                    props.toolTipHideBottom()
                  }}
                  aria-controls="popout_35" aria-expanded="false" aria-label="Envie um arquivo ou convites" type="button" className="attachButton-_ACFSu attachButton-1ijpt9 button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F">
                    <div className="contents-3ca1mk attachButtonInner-2mwer8">
                      <svg width={24} height={24} viewBox="0 0 24 24">
                        <path className="attachButtonPlus-3IYelE" fill="currentColor" d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z" />
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="textArea-2CLwUE textA reaSlate-9-y-k2 slateContainer-3x9zil">
                  <div>
                    <div
                    className="markup-eYLPri editor-H2NA06 slateTextArea-27tjG0 fontSize16Padding-XoMpjI" style={{position: 'relative', outline: 'none', whiteSpace: 'no-wrap', overflow: `hidden`}}>
                      <div 
                      data-slate-node="element">
                        <input 
                        id={`inputElement`}
                        onKeyDown={(e) => {
                          setMessage(e.target.value)
                        }}
                        autoComplete={`off`}
                        autoCorrect={false}
                        autoCapitalize={true}
                        style={{
                          width: `100%`,
                          height: `40px`,
                          padding: `0px`,
                          marginTop: `-10px`,
                          background: `transparent`,
                          outline: `none`,
                          border: `none`,
                          color: `white`
                        }}
                        placeholder={`Conversar em @${user.user.username}`}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div 
                className="buttons-uaqb-5">
                  {/* <button aria-label="Enviar um presente" type="button" className="button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F">
                    <div className="contents-3ca1mk button-2fCJ0o button-3BaQ4X">
                      <div className="buttonWrapper-3YFQGJ" id="children" style={{opacity: 1, transform: 'none'}}>
                        <svg width={24} height={24} aria-hidden="false" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z" />
                        </svg>
                      </div>
                    </div>
                  </button> */}
                  <div className="expression-picker-chat-input-button buttonContainer-2lnNiN">
                    <button aria-label="Abrir o selecionador de GIFs" type="button" className="button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F">
                      <div className="contents-3ca1mk button-2fCJ0o button-3BaQ4X">
                        <div className="buttonWrapper-3YFQGJ" id="icon" style={{opacity: 1, transform: 'none'}}>
                          <svg width={24} height={24} className="icon-1d5zch" aria-hidden="false" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M2 2C0.895431 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 22H22C23.1046 22 24 21.1046 24 20V4C24 2.89543 23.1046 2 22 2H2ZM9.76445 11.448V15.48C8.90045 16.044 7.88045 16.356 6.74045 16.356C4.11245 16.356 2.66045 14.628 2.66045 12.072C2.66045 9.504 4.23245 7.764 6.78845 7.764C7.80845 7.764 8.66045 8.004 9.32045 8.376L9.04445 10.164C8.42045 9.768 7.68845 9.456 6.83645 9.456C5.40845 9.456 4.71245 10.512 4.71245 12.06C4.71245 13.62 5.43245 14.712 6.86045 14.712C7.31645 14.712 7.64045 14.616 7.97645 14.448V12.972H6.42845V11.448H9.76445ZM11.5481 7.92H13.6001V16.2H11.5481V7.92ZM20.4724 7.92V9.636H17.5564V11.328H19.8604V13.044H17.5564V16.2H15.5164V7.92H20.4724Z" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="expression-picker-chat-input-button buttonContainer-2lnNiN">
                    <button aria-label="Abrir selecionador de figurinhas" type="button" className="button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F">
                      <div className="contents-3ca1mk button-2fCJ0o button-3BaQ4X stickerButton-1-nFh2">
                        <div className="buttonWrapper-3YFQGJ" id="children" style={{opacity: 1, transform: 'none'}}>
                          <svg width={24} height={24} className="stickerIcon-3Jx5SE" aria-hidden="false" viewBox="0 0 20 20">
                            <path fill="currentColor" className fillRule="evenodd" clipRule="evenodd" d="M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM11.9998 12.2201C11.9998 13.3245 11.1046 14.2198 10.0002 14.2198C8.8958 14.2198 8.00052 13.3245 8.00052 12.2201H6.66742C6.66742 14.0607 8.15955 15.5529 10.0002 15.5529C11.8408 15.5529 13.3329 14.0607 13.3329 12.2201H11.9998ZM4.44559 13.331C4.44559 13.9446 3.94821 14.442 3.33467 14.442C2.72112 14.442 2.22375 13.9446 2.22375 13.331C2.22375 12.7175 2.72112 12.2201 3.33467 12.2201C3.94821 12.2201 4.44559 12.7175 4.44559 13.331ZM16.6657 14.442C17.2793 14.442 17.7766 13.9446 17.7766 13.331C17.7766 12.7175 17.2793 12.2201 16.6657 12.2201C16.0522 12.2201 15.5548 12.7175 15.5548 13.331C15.5548 13.9446 16.0522 14.442 16.6657 14.442Z" />
                            <path fill="currentColor" className="hidden-334jci" fillRule="evenodd" clipRule="evenodd" d="M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM12 13H11.2H8.8H8C8 14.1046 8.89543 15 10 15C11.1046 15 12 14.1046 12 13ZM17.7766 13.331C17.7766 13.9446 17.2793 14.442 16.6657 14.442C16.0522 14.442 15.5548 13.9446 15.5548 13.331C15.5548 12.7175 16.0522 12.2201 16.6657 12.2201C17.2793 12.2201 17.7766 12.7175 17.7766 13.331ZM2 12.2361L2.53532 11L5.62492 12.7835C5.79161 12.8797 5.79161 13.1203 5.62492 13.2165L2.53532 15L2 13.7639L3.32339 13L2 12.2361Z" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="expression-picker-chat-input-button buttonContainer-2lnNiN">
                    <button tabIndex={0} aria-label="Selecionar emoji" type="button" className="emojiButtonNormal-35P0_i emojiButton-3FRTuj emojiButton-1fMsf3 button-3BaQ4X button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F">
                      <div className="contents-3ca1mk">
                        <div className="sprite-2lxwfc" style={{
                          backgroundImage: `${`${window[`getPath`]()}assets/7e5013a9afc1404b0b89d99aaec0b398.png`}`,
                          backgroundPosition: '0px 0px', backgroundSize: '242px 110px', transform: 'scale(1)', filter: 'grayscale(100%)'}} />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="characterCount-8yNPfb">
              <div className="flairContainer-xF7I3K" />
              <span className="hiddenVisually-2ydA7k">2000 caracteres restantes</span>
            </div>
            <div className="container-1ZA19X hidden-tnoHf9 stickerIconOffset-2zxofV" tabIndex={-1} aria-hidden="true" role="button" style={{minWidth: '120px'}}>
              <div className="stickerResults-cD_yeI" tabIndex={-1} role="list" data-list-id="expression-suggestions-stickers" />
              <div className="bottomInformationTextContainer-3xmddX">
                <div className="textDivider-34kVsR" />
                <div className="colorStandard-21JIj7 size14-3fJ-ot descriptionText-yl6pN6" style={{maxWidth: '120px'}}>
                  <div className="keybindShortcut-3zF1P9 keybind-1ejq-9">
                    <span>
                      <svg width={10} height={10} xmlns="http://www.w3.org/2000/svg" className="bindArrow-EmK4SC up-17zw24">
                        <g fill="#FFFFFF">
                          <polygon transform="translate(5.025000, 5.000000) scale(1, -1) translate(-5.025000, -5.000000) " points="4.16666667 10 4.16666672 3.33333333 1.25 6.25 0.05 5 5.00000005 0 9.99999967 5 8.75 6.25 5.83333338 3.33333333 5.83333333 10" />
                        </g>
                      </svg>
                    </span>
                  </div> para selecionar
                </div>
              </div>
              <div className="containerBackground-Ang24O" />
            </div>
          </div>
        </form>
        <div className="layerContainer-2v_Site"
        >
        {  popUser.user.username &&
        <>
          <PopOutProfile 
          user={popUser}
          setPopUser={setPopUser}
          /> 
        </>
        }
        
        </div>
      </main>
    </div>
  </div> } </> 
}

const Message = props => {
  const openPopOut = (el, user, cond) => {
    let {clientX, clientY} = el
    props.setPopUser({
      user, clientX, clientY, cond
    })
  }
  const openPopOutT = (el, user, cond) => {
    let {clientX, clientY} = el
    props.setPopUser({
      user: user.user, clientX, clientY, cond
    })
  }
  const [hover, setHover] = useState(false)
  return <li id="chat-messages-959854144162758668" className="messageListItem-ZZ7v6g" aria-setsize={-1}>
  <div 
  onMouseOut={() => setHover(false)}
  onMouseOver={() => setHover(true)}
  className={`
  message-2CShn3 cozyMessage-1DWF9U groupStart-3Mlgv1 wrapper-30-Nkg cozy-VmLDNB zalgo-26OfGz
  ${hover ? `message-2CShn3 selected-2LX7Jy` : ``}
  ${props.message.error ? `cozyMessage-1DWF9U ephemeral-2nDdnn groupStart-3Mlgv1 wrapper-30-Nkg cozy-VmLDNB zalgo-26OfGz`: ``}
  `} role="article" data-list-item-id="chat-messages___chat-messages-959854144162758668" tabIndex={-1} aria-setsize={-1} aria-roledescription="Mensagem" aria-labelledby="message-username-959854144162758668 uid_1 message-content-959854144162758668 uid_2 message-timestamp-959854144162758668">
    <div className="contents-2MsGLg">
      { !props.message.error && <>
      { !props.realTime && props.message.createdBy == props.me.id && 
      <img
      onClick={(el) => {
        openPopOut(el, props.me, false)
      }}
      src={`${ typeof props.me.photo != `object` ? props.me.photo : window[`getPath`]() + `assets/default.webp`}`}
      aria-hidden="true" className="avatar-2e8lTP clickable-31pE3P" alt=" " />}
      { !props.realTime && props.message.createdBy != props.me.id && 
      <img 
      onClick={(el) => {
        openPopOutT(el, props.userStranger, false)
      }}
      src={`${ typeof props.userStranger.user.photo != `object` ? props.userStranger.user.photo : window[`getPath`]() + `assets/default.webp`}`}
      aria-hidden="true" className="avatar-2e8lTP clickable-31pE3P" alt=" " />}
      <h2 className="header-2jRmjb" aria-labelledby="message-username-959854144162758668 message-timestamp-959854144162758668">
        <span id="message-username-959854144162758668" className="headerText-2z4IhQ">
          <span 
          onClick={(el) => {
            openPopOut(el, !props.realTime && props.message.createdBy == props.me.id ? props.me : props.userStranger.user, true)
          }}
          className="username-h_Y3Us desaturateUserColors-1O-G89 clickable-31pE3P" aria-controls="popout_40" aria-expanded="false" role="button" tabIndex={0}>
            { !props.realTime && props.message.createdBy == props.me.id ? props.me.username : props.userStranger.user.username}
            </span>
        </span>
        <span className="timestamp-p1Df1m timestampInline-_lS3aK">
          <time aria-label="Hoje às 13:37" id="message-timestamp-959854144162758668" dateTime="2022-04-02T16:37:41.196Z">
            <i className="separator-AebOhG" aria-hidden="true"> — </i>
            {/* Hoje às 13:37  */}
            </time>
        </span>
      </h2>
      <div id="message-content-959854144162758668" className="markup-eYLPri messageContent-2t3eCI">
        { ParseMessage(props.message.message)  }
        { typeof props.message.photo == `string` && props.message.photo.length > 100 && 
        ( <div id="message-accessories-963540623007293481" className="container-2sjPya">
        <div className="messageAttachment-CZp8Iv">
          <div className="imageWrapper-oMkQl4 imageZoom-3yLCXY clickable-LksVCf embedWrapper-1MtIDg" style={{width: '201px', height: '300px'}}>
            <a tabIndex={-1} aria-hidden="true" className="originalLink-Azwuo9" href={props.message.photo} data-role="img" />
            <div className="clickableWrapper-2WTAkL" tabIndex={0} aria-label="Imagem" aria-describedby="uid_4" role="button">
              <img alt="Imagem" src={props.message.photo} style={{width: '201px', height: '300px', objectFit: `cover`}} />
            </div>
          </div>
        </div>
      </div>) }
      </div>
      </>}
      { props.message.error &&
        <NotFriendMessage/>
      }
    </div>
    <div id="message-accessories-959854144162758668" className="container-2sjPya" />
    { !props.message.error && 
    <div className="buttonContainer-1502pf">
      <div 
      style={{
        opacity: `${hover ? 1 : 0}`,
      }}
      className="buttons-3dF5Kd container-2gUZhU isHeader-2bbX-L" aria-label="Ações de mensagem">
        <div className="wrapper-2vIMkT">
          <div className="button-3bklZh" aria-label="Adicionar reação" aria-controls="popout_41" aria-expanded="false" role="button" tabIndex={0}>
            <svg className="icon-1zidb7" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24">
              <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12.2512 2.00309C12.1677 2.00104 12.084 2 12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 11.916 21.999 11.8323 21.9969 11.7488C21.3586 11.9128 20.6895 12 20 12C15.5817 12 12 8.41828 12 4C12 3.31052 12.0872 2.6414 12.2512 2.00309ZM10 8C10 6.896 9.104 6 8 6C6.896 6 6 6.896 6 8C6 9.105 6.896 10 8 10C9.104 10 10 9.105 10 8ZM12 19C15.14 19 18 16.617 18 14V13H6V14C6 16.617 8.86 19 12 19Z" />
              <path d="M21 3V0H19V3H16V5H19V8H21V5H24V3H21Z" fill="currentColor" />
            </svg>
          </div>
          <div className="button-3bklZh" aria-label="Editar" role="button" tabIndex={0}>
            <svg className="icon-1zidb7" aria-hidden="false" width={16} height={16} viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z" fill="currentColor" />
            </svg>
          </div>
          <div className="button-3bklZh" aria-label="Mais" aria-controls="popout_42" aria-expanded="false" role="button" tabIndex={0}>
            <svg className="icon-1zidb7" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24">
              <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z" />
            </svg>
          </div>
        </div>
      </div>
    </div> }
  </div>
</li>
}

const ChatFloatB = () => {
  return <div className="noChannel-1GDIAZ">
  <div className="flex-2S1XBF flex-3BkGQD vertical-3aLnqW flex-3BkGQD directionColumn-3pi1nm justifyCenter-rrurWZ alignCenter-14kD11 noWrap-hBpHBz wrapper-5BaSTh" style={{flex: '1 1 auto'}}>
    <div className="image-20MDYu marginBottom40-fvAlAV" style={{flex: '0 1 auto', width: '272px', height: '222px', 
    backgroundImage: `url("${window[`getPath`]()}assets/ed2007aab2da31a5436e70a28b4d59f9.svg")`}} />
    <div className="flexChild-3PzYmX" direction="vertical-3aLnqW flex-3BkGQD directionColumn-3pi1nm" style={{flex: '0 1 auto'}}>
      <h4 className="title-2CL_z0">Sem canais de texto</h4>
      <div className="text-27cdrj marginTop8-24uXGp">Você se vê em um lugar estranho. Você não tem acesso a nenhum canal de texto, ou não há nenhum neste servidor.</div>
    </div>
    <br/><br/>
    <div className="spinner-2RT7ZC spinningCircle-CmRLnP">
    <div className="spinningCircleInner-C1kTEL inner-26JK4f">
      <svg className="circular-3Fmqjd" viewBox="25 25 50 50">
        <circle className="path-lhsLSV path3-3tVOpU" cx={50} cy={50} r={20} />
        <circle className="path-lhsLSV path2-F-M5gP" cx={50} cy={50} r={20} />
        <circle className="path-lhsLSV" cx={50} cy={50} r={20} />
      </svg>
    </div>
  </div>
  </div>
</div>
}

export default ChatPrivate