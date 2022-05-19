import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';
import {useState} from 'react';

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setMessageEror] = useState(``);

  const login = async() => {
    //Fecth register post
    const response = await axios.post('https://servernekoapp.herokuapp.com/auth', {
        username,
        password
    });
    if(response.data.user && typeof response.data.error == `undefined`){
        //Set localStorage token
        localStorage.setItem('token', response.data.user.token);
        //Window location to app 
        window.location.href = '/channels/@me';
    } else{
        setError(true)
        setMessageEror(response.data.message)
    }
}
    return <>
       <div 
       id={`form-login`}
       style={{opacity: 1, transform: 'scale(1) translateY(0px) translateZ(0px)', animation: `loadIN-2xbP0S 0.4s linear`}}>
          <div>
            <form 
            onSubmit={(e) => {
              e.preventDefault();
              login();
            }}
            className="authBoxExpanded-AN2aH1 authBox-1HR6Ha theme-dark">
              <div className="centeringWrapper-dGnJPQ">
                <div className="flex-2S1XBF flex-3BkGQD horizontal-112GEH horizontal-1Piu5- flex-3BkGQD directionRow-2Iu2A9 justifyStart-2Mwniq alignCenter-14kD11 noWrap-hBpHBz" style={{flex: '1 1 auto'}}>
                  <div className="mainLoginContainer-wHmAjP">
                    <div className="header-6M5OpB">
                      <h3 className="title-3FQ39e marginBottom8-emkd0_ base-21yXnu size24-17l95E">Boas-vindas de volta!</h3>
                      <div className="colorHeaderSecondary-g5teka size16-rrJ6ag">Estamos muito animados em te ver novamente!</div>
                    </div>
                    <div className="block-3uVSn4 marginTop20-2T8ZJx">
                      <div className="marginBottom20-315RVT">
                      <h5 className={`colorStandard-21JIj7 size14-3fJ-ot h5-2RwDNl title-3hptVQ defaultMarginh5-3Jxf6f
                          ${error ? 'error-3EBD81' : ''}`
                      } id="uid_8">Usuário{ error && <> <span className="errorMessage-1kMqS5"><span className="errorSeparator-f__rwE">-</span>{errorMessage.toUpperCase()}</span></> }</h5>
                        <div className="input-2g-os5 input-2yCVqe">
                          <div className="outerContainer-3jAq9y hidden-2yz_ny">
                            <div className="container-1pMEoC" style={{width: '0px'}}>
                              <div className="innerContainer-1xzAzu">
                                <div className="countryCode-5htqQm" aria-controls="popout_6" aria-expanded="false" role="button" tabIndex={0}>BR +55</div>
                                <div className="separator-1R_Zrp" />
                              </div>
                            </div>
                          </div>
                          <div className="inputWrapper-1YNMmM inputWrapper-3ESIDR">
                            <input className="inputDefault-3FGxgL input-2g-os5 inputField-2RZxdl" 
                            name="username" type="text" placeholder aria-label="Usuario" 
                            onKeyUp={(e) => {
                              setUsername(e.target.value);
                            }}
                            onFocus={(e) => {
                              setUsername(e.target.value);
                            }}
                            onBlur={(e) => {
                              setUsername(e.target.value);
                            }}
                            autoComplete="off" maxLength={999} spellCheck="false" aria-labelledby="uid_5"  />
                          </div>
                        </div>
                      </div>
                      <div>
                      <h5 className={`colorStandard-21JIj7 size14-3fJ-ot h5-2RwDNl title-3hptVQ defaultMarginh5-3Jxf6f
                          ${error ? 'error-3EBD81' : ''}`
                      } id="uid_8">Senha{ error && <> <span className="errorMessage-1kMqS5"><span className="errorSeparator-f__rwE">-</span>{errorMessage.toUpperCase()}</span></> }</h5>
                        <div className="inputWrapper-1YNMmM">
                          <input className="inputDefault-3FGxgL input-2g-os5" 
                          onKeyUp={(e) => {
                            setPassword(e.target.value);
                          }}
                          onFocus={(e) => {
                            setPassword(e.target.value);
                          }}
                          onBlur={(e) => {
                            setPassword(e.target.value);
                          }}
                          name="password" type="password" placeholder aria-label="Senha" autoComplete="off" maxLength={999} spellCheck="false" aria-labelledby="uid_7" />
                        </div>
                      </div>
                      <button type="button" className="marginBottom20-315RVT marginTop4-2JFJJI linkButton-2ax8wP button-f2h6uQ lookLink-15mFoz lowSaturationUnderline-Z6CW6z colorLink-1Md3RZ sizeMin-DfpWCE grow-2sR_-F">
                        <div className="contents-3ca1mk">Esqueceu sua senha?</div>
                      </button>
                      <button type="submit" className="marginBottom8-emkd0_ button-1cRKG6 button-f2h6uQ lookFilled-yCfaCM colorBrand-I6CyqQ sizeLarge-3mScP9 fullWidth-fJIsjq grow-2sR_-F">
                        <div className="contents-3ca1mk">Entrar</div>
                      </button>
                      <div className="marginTop4-2JFJJI">
                        <span className="needAccount-MrvMN7">Precisando de uma conta?</span>
                        <Link
                        to={`/register`}
                        >
                          <button 
                          onClick={() => {
                            props.setPage(`register`)
                          }}
                          type="button" className="smallRegisterLink-1qEJhz linkButton-2ax8wP button-f2h6uQ lookLink-15mFoz lowSaturationUnderline-Z6CW6z colorLink-1Md3RZ sizeMin-DfpWCE grow-2sR_-F">
                            <div className="contents-3ca1mk">Registre-se</div>
                          </button>
                        </Link>
                        
                      </div>
                    </div>
                  </div>
                  <div className="verticalSeparator-2r9gHa" />
                  <div className="transitionGroup-bPT0qU qrLogin-1ejtpI">
                    <div className="measurementFill-3yvxWy measurement-RBq28W measurementFillStatic-1QTNRn">
                      <div className="animatedNode-zo4rIT" style={{overflow: 'visible', opacity: 1, height: '100%', transform: 'translateX(0%)'}}>
                        <div className="qrLoginInner-1phtZ_">
                          <div className="qrCodeContainer-1qlybH">
                            <img 
                            style={{
                              width: `100%`,
                              boxShadow: `0px 0px 0px 1px rgba(0,0,0,0.1)`,
                              filter: `drop-shadow(0px 0px 0px 20px rgba(0,0,0,0.1))`,
                              borderRadius: `50px`
                            }}
                            src={`https://pbs.twimg.com/profile_images/827454069384036352/8H-jBvaz_400x400.jpg`}/>
                          </div>
                          <h3 className="title-3FQ39e marginBottom8-emkd0_ base-21yXnu size24-17l95E">NekoApp</h3>
                          <div className="colorHeaderSecondary-g5teka size16-rrJ6ag"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
    </>
}

export default Login