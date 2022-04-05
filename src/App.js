import Background from './discord/css/bg';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Dashboard from './pages/dashboard';

import {useState, useEffect} from 'react';

import './discord/css/style.css';
import './discord/css/modify.css';

function App(props) {

  useEffect(() => {
    const theme = window.localStorage.getItem('theme');
    //Theme
    if (theme != null) {
      window.document.querySelector(`#root`).classList.add(theme);
    } else{
      window.localStorage.setItem(`theme`, `theme-dark`)
      window.document.querySelector(`#root`).classList.add(`theme-dark`);
    }
  }, false)

  const [page, setPage] = useState(props.page);
  const [logged, setLogged] = useState(true)
  return (
    <div classname="App">
      <div className="wrapper-1f5byN">
        {
          page === 'login' && 
          (
          <>
          <Background/>
          <Login setPage={setPage}/>
          </>
          )
        }
        {
          page === 'register' && 
          (
          <>
          <Background/>
          <Register setPage={setPage}/>
          </>
          )
        }
        { page === `dashboard` && logged &&
        <Dashboard 
        chat={props.chat}
        setLogged={setLogged}
        setPage={setPage}/>
        }
        { page === `dashboard` && !logged && 
          (
          <>
          <Background/>
          <Login 
          setLogged={true}
          setPage={setPage}/>
          </>
          )
        }
      </div>
    </div>
  );
}

export default App;
