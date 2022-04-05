import Load from "./load";
import React, { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";
import GuildsNav from "./guildsNav";
import ChannelsMe from "./channelsMe";
import Friends from "./friends";
import Modal from "./server/modal";
import ChatPrivate from "./ChatPrivate";
import ToolTipServer from "./toolTipServer";
import Ajustes from "./ajustes";

let socket = null;

const Dashboard = (props) => {
  const [loading, setLoading] = useState(false);
  const [openModalServer, setOpenModalServer] = useState(false);
  const [user, setUser] = useState({ username: "" });
  const [myFriends, setMyFriends] = useState([]);
  const [chatFloating, setChatFloating] = useState(false);
  const [ajustes, setAjustes] = useState(false);
  const validationToken = async () => {
    const response = await axios.post(
      "https://server-nekoapp.herokuapp.com/auth/validationToken",
      {
        token: localStorage.getItem("token"),
      }
    );

    if (response.data.user) {
      setUser(response.data.user);
      socket.emit(`userConnect`, localStorage.getItem("token"));
    } else {
      props.setLogged(false);
      props.setPage(`login`);
    }
  };

  useEffect(() => {
    //Fecth validation post
    validationToken();
    socket = io("https://server-nekoapp.herokuapp.com/");
    socket.on(`online`, (user) => {
      setLoading(true);
    });
    socket.on(`refreshMe`, () => {
      validationToken();
    });
  }, false);

  React.useEffect(() => {
    socket.on(`getFriends`, (friends) => {
      setMyFriends(friends);
    });
    socket.on(`refreshFriends`, (friend) => {
      socket.emit(`getFriends`, localStorage.getItem("token"));
    });
  }, [false]);

  return (
    <>
      {!loading && <Load />}
      {loading && (
        <>
          <div className="app-3xd6d0">
            <div className="app-2CXKsg">
              <div className="layers-OrUESM layers-1YQhyW">
                <div aria-hidden="false" class="layer-86YKbF baseLayer-W6S8cY">
                  <div className="container-1eFtFS">
                    <div class="content-1SgpWY">
                      {ajustes && (
                        <Ajustes
                          myFriends={myFriends}
                          user={user}
                          setAjustes={setAjustes}
                          ajustes={ajustes}
                          socket={socket}
                          setOpenModalServer={setOpenModalServer}
                        />
                      )}
                      {!ajustes && (
                        <>
                          <Modal
                            openModalServer={openModalServer}
                            setOpenModalServer={setOpenModalServer}
                          />
                          <GuildsNav
                            myFriends={myFriends}
                            user={user}
                            setOpenModalServer={setOpenModalServer}
                          />
                          <ChannelsMe
                            setAjustes={setAjustes}
                            ajustes={ajustes}
                            chat={props.chat}
                            myFriends={myFriends}
                            user={user}
                          />
                          <div className="base-2jDfDU theme-dark container-2cd8Mz">
                            {!props.chat && chatFloating && (
                              <Friends
                                myFriends={myFriends}
                                me={user}
                                socket={socket}
                              />
                            )}
                            {!props.chat && !chatFloating && (
                              <Friends
                                myFriends={myFriends}
                                me={user}
                                socket={socket}
                              />
                            )}
                            {chatFloating && props.chat && (
                              <>
                                {chatFloating &&
                                  typeof window.location.pathname.split(
                                    `/`
                                  )[3] == `string` &&
                                  props.chat && (
                                    <ChatFloat
                                      chat={props.chat}
                                      myFriends={myFriends}
                                      user={user}
                                    />
                                  )}
                                <ChatPrivate
                                  myFriends={myFriends}
                                  chatFloating={chatFloating}
                                  setChatFloating={setChatFloating}
                                  socket={socket}
                                  me={user}
                                />
                              </>
                            )}
                            {!chatFloating && props.chat && (
                              <>
                                {props.chat && chatFloating && (
                                  <ChatFloat
                                    chat={props.chat}
                                    myFriends={myFriends}
                                    user={user}
                                  />
                                )}
                                <ChatPrivate
                                  myFriends={myFriends}
                                  chatFloating={chatFloating}
                                  setChatFloating={setChatFloating}
                                  socket={socket}
                                  me={user}
                                />
                              </>
                            )}
                            {chatFloating && !props.chat && (
                              <>
                                {chatFloating &&
                                  typeof window.location.pathname.split(
                                    `/`
                                  )[3] == `string` && (
                                    <ChatFloat
                                      chat={props.chat}
                                      myFriends={myFriends}
                                      user={user}
                                    />
                                  )}
                                <ChatPrivate
                                  myFriends={myFriends}
                                  chatFloating={chatFloating}
                                  setChatFloating={setChatFloating}
                                  socket={socket}
                                  me={user}
                                />
                              </>
                            )}
                          </div>{" "}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <ToolTipServer />
    </>
  );
};

const ChatFloat = () => {
  return (
    <div className="noChannel-1GDIAZ">
      <div
        className="flex-2S1XBF flex-3BkGQD vertical-3aLnqW flex-3BkGQD directionColumn-3pi1nm justifyCenter-rrurWZ alignCenter-14kD11 noWrap-hBpHBz wrapper-5BaSTh"
        style={{ flex: "1 1 auto" }}
      >
        <div
          className="image-20MDYu marginBottom40-fvAlAV"
          style={{
            flex: "0 1 auto",
            width: "272px",
            height: "222px",
            backgroundImage: `url("${window[
              `getPath`
            ]()}assets/ed2007aab2da31a5436e70a28b4d59f9.svg")`,
          }}
        />
        <div
          className="flexChild-3PzYmX"
          direction="vertical-3aLnqW flex-3BkGQD directionColumn-3pi1nm"
          style={{ flex: "0 1 auto" }}
        >
          <h4 className="title-2CL_z0">Sem canais de texto</h4>
          <div className="text-27cdrj marginTop8-24uXGp">
            Você se vê em um lugar estranho. Você não tem acesso a nenhum canal
            de texto, ou não há nenhum neste servidor.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
