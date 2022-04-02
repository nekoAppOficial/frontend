import { Outlet, Link } from "react-router-dom";
import axios from 'axios';
import {useState} from 'react';

const Register = props => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setMessageEror] = useState(``);

    const register = async() => {
        //Fecth register post
        const response = await axios.post('https://server-nekoapp.herokuapp.com/auth/register', {
            username,
            password,
            email 
        });
        if(response.data.sucess){
            //Set localStorage token
            localStorage.setItem('token', response.data.token);
            //Window location to app 
            window.location.href = '/channels/@me';
        } else{
            setError(true)
            setMessageEror(response.data.message)
        }
    }
    return <>
        <div style={{opacity: 1, transform: 'scale(1) translateY(0px) translateZ(0px)', animation: `loadIN-2xbP0S 0.4s linear`}}>
        <form 
        onSubmit={(e) => {
            e.preventDefault();
            register();
        }}
        className="authBox-1HR6Ha theme-dark">
            <div className="centeringWrapper-dGnJPQ">
            <h3 className="title-3FQ39e base-21yXnu size24-17l95E">Criar uma conta</h3>
            <div className="block-3uVSn4 marginTop20-2T8ZJx">
                <div className="marginBottom20-315RVT">
                <h5 className={`colorStandard-21JIj7 size14-3fJ-ot h5-2RwDNl title-3hptVQ defaultMarginh5-3Jxf6f
                ${error ? 'error-3EBD81' : ''}`
            } id="uid_8">E-mail
            { error && <> <span className="errorMessage-1kMqS5"><span className="errorSeparator-f__rwE">-</span>{errorMessage.toUpperCase()}</span></> }
            </h5>
                <div className="inputWrapper-1YNMmM">
                    <input 
                    onKeyUp={(e) => {
                        setEmail(e.target.value);
                    }}
                    onFocus={(e) => {
                        setEmail(e.target.value);
                    }}
                    onBlur={(e) => {
                        setEmail(e.target.value);
                    }}
                    className="inputDefault-3FGxgL input-2g-os5" name="email" type="email" placeholder aria-label="E-mail" maxLength={999} aria-labelledby="uid_8" />
                </div>
                </div>
                <div className="marginBottom20-315RVT">
                <h5 className={`colorStandard-21JIj7 size14-3fJ-ot h5-2RwDNl title-3hptVQ defaultMarginh5-3Jxf6f
                ${error ? 'error-3EBD81' : ''}`
                } id="uid_9">Nome de usuário
                { error && <> <span className="errorMessage-1kMqS5"><span className="errorSeparator-f__rwE">-</span>{errorMessage.toUpperCase()}</span></> }</h5>
                <div className="inputWrapper-1YNMmM">
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
                    className="inputDefault-3FGxgL input-2g-os5" name="username" type="text" placeholder aria-label="Nome de usuário" maxLength={999} aria-labelledby="uid_9"  />
                </div>
                </div>
                <div>
                <h5 className={`colorStandard-21JIj7 size14-3fJ-ot h5-2RwDNl title-3hptVQ defaultMarginh5-3Jxf6f
                ${error ? 'error-3EBD81' : ''}`
                } id="uid_10">Senha
                { error && <> <span className="errorMessage-1kMqS5"><span className="errorSeparator-f__rwE">-</span>{errorMessage.toUpperCase()}</span></> }</h5>
                <div className="inputWrapper-1YNMmM">
                    <input 
                    onKeyUp={(e) => {
                        setPassword(e.target.value);
                    }}
                    onFocus={(e) => {
                        setPassword(e.target.value);
                    }}
                    onBlur={(e) => {
                        setPassword(e.target.value);
                    }}
                    className="inputDefault-3FGxgL input-2g-os5" name="password" type="password" placeholder aria-label="Senha" maxLength={999} aria-labelledby="uid_10" />
                </div>
                </div>
                <div className="container-2UAUAG marginTop20-2T8ZJx">
                <div className="colorStandard-21JIj7 size14-3fJ-ot errors-2TwmaE" />
                </div>
                <div className="marginTop20-2T8ZJx">
                <button 
                type="submit" className="button-1cRKG6 button-f2h6uQ lookFilled-yCfaCM colorBrand-I6CyqQ sizeLarge-3mScP9 fullWidth-fJIsjq grow-2sR_-F">
                    <div className="contents-3ca1mk">Continuar</div>
                </button>
                </div>
                <Link to={`/login`}>
                    <button 
                    onClick={() => {
                        props.setPage(`login`)
                    }}
                    type="button" className="marginTop8-24uXGp linkButton-2ax8wP button-f2h6uQ lookLink-15mFoz lowSaturationUnderline-Z6CW6z colorLink-1Md3RZ sizeMin-DfpWCE grow-2sR_-F">
                    <div className="contents-3ca1mk">Já tem uma conta?</div>
                    </button>
                </Link>
                <div className="colorStandard-21JIj7 size12-oc4dx4 subText-1fpEGH marginTop20-2T8ZJx">Ao se registrar, você concorda com os <a className="anchor-1MIwyf anchorUnderlineOnHover-2qPutX" href="//discord.com/terms" rel="noreferrer noopener" target="_blank">termos de serviço</a> e a <a className="anchor-1MIwyf anchorUnderlineOnHover-2qPutX" href="//discord.com/privacy" rel="noreferrer noopener" target="_blank">política de privacidade</a> do Discord. </div>
            </div>
            </div>
        </form>
        </div>
    </>
}

export default Register;