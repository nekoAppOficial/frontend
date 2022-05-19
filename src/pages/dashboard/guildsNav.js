import { useState, useEffect } from "react";

const GuildsNav = (props) => {
  const [myFriends, setMyFriends] = useState([]);

  useEffect(() => {
    props.socket.on(`addFriend`, (friend) => {
      //Validation if the user is already in myFriends
      var newFriends = [...myFriends];
      if (!newFriends.find((f, index) => f.id == friend.id)) {
        newFriends = [...newFriends, friend];
        setMyFriends(newFriends);
      }
    });
  }, [false])

  return (
    <nav
      className="wrapper-1_HaEi guilds-2JjMmN"
      aria-label="Barra lateral dos servidores"
    >
      <ul
        role="tree"
        tabIndex={0}
        data-list-id="guildsnav"
        data-jump-section="global"
        className="tree-3agP2X"
      >
        <div className="unreadMentionsIndicatorTop-2bTgUU">
          <div
            className="bar-2eAyLE unreadMentionsBar-ZXXoOH unread-2wipsx active-334r9u"
            aria-hidden="true"
            style={{ transform: "translateY(-180%)" }}
          >
            <span className="text-2GsXbW">novo</span>
          </div>
        </div>
        <div
          className="scroller-3X7KbA none-2-_0dP scrollerBase-_bVAAt"
          dir="ltr"
          style={{ overflow: "hidden scroll", paddingRight: "0px" }}
        >
          <div className="tutorialContainer-1pL9QS">
            <div className="listItem-3SmSlK">
              <div className="pill-L_aLMQ wrapper-z5ab_q" aria-hidden="true">
                <span
                  className="item-2LIpTv"
                  style={{ opacity: 1, height: "40px", transform: "none" }}
                />
              </div>
              <div className="listItemWrapper-3d87LP selected-3a1QGn">
                <div className="wrapper-28eC3z">
                  <svg
                    width={48}
                    height={48}
                    viewBox="0 0 48 48"
                    className="svg-2zuE5p"
                    overflow="visible"
                  >
                    <defs>
                      <path
                        d="M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z"
                        id="0c23ccc1-cd5d-4e6f-aba8-4bcd00d6dfa4-blob_mask"
                      />
                    </defs>
                    <mask
                      id="0c23ccc1-cd5d-4e6f-aba8-4bcd00d6dfa4"
                      fill="black"
                      x={0}
                      y={0}
                      width={48}
                      height={48}
                    >
                      <use
                        href="#0c23ccc1-cd5d-4e6f-aba8-4bcd00d6dfa4-blob_mask"
                        fill="white"
                      />
                    </mask>
                    <foreignObject
                      mask="url(#0c23ccc1-cd5d-4e6f-aba8-4bcd00d6dfa4)"
                      x={0}
                      y={0}
                      width={48}
                      height={48}
                    >
                      <div
                        className="wrapper-3kah-n selected-1Drb7Z"
                        role="listitem"
                        data-list-item-id="guildsnav___home"
                        tabIndex={-1}
                        aria-label="Início"
                      >
                        <div className="childWrapper-1j_1ub">
                          <svg
                            className="homeIcon-r0w4ny"
                            aria-hidden="false"
                            width={28}
                            height={20}
                            viewBox="0 0 28 20"
                          >
                            <path
                              fill="currentColor"
                              d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z"
                            />
                          </svg>
                        </div>
                      </div>
                    </foreignObject>
                  </svg>
                  {props.myFriends.filter(
                    (friend) =>
                      friend.statusAmizade === "pending" &&
                      friend.createdBy != props.user.id
                  ).length + myFriends.filter(
                    (friend) =>
                      friend.statusAmizade === "pending" &&
                      friend.createdBy != props.user.id
                  ).lengt > 0 && (
                    <div
                      className="numberBadge-37OJ3S base-3IDx3L baseShapeRound-3epLEv"
                      style={{
                        height: "28px",
                        backgroundColor: "var(--status-danger)",
                        width: "28px",
                        paddingRight: "1px",
                        border: "4px solid #202225",
                        borderRadius: "50%",
                        transform: "scale(1) translate(30px, 25px)",
                      }}
                    >
                      {
                        props.myFriends.filter(
                          (friend) =>
                            friend.statusAmizade === "pending" &&
                            friend.createdBy != props.user.id
                        ).length + myFriends.filter(
                          (friend) =>
                            friend.statusAmizade === "pending" &&
                            friend.createdBy != props.user.id
                        ).lengt
                      }
                    </div>
                  )}
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
                <span
                  className="item-2LIpTv"
                  style={{ opacity: 1, height: "8px", transform: "none" }}
                />
              </div>
              <div>
                <div
                  data-dnd-name="🥋TROPA DO CAIXETA🥋"
                  className="blobContainer-ikKyFs"
                  draggable="true"
                >
                  <div className="wrapper-28eC3z">
                    <svg
                      width={48}
                      height={48}
                      viewBox="0 0 48 48"
                      className="svg-2zuE5p"
                      overflow="visible"
                    >
                      <defs>
                        <path
                          d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z"
                          id="3eaec676-3951-437c-968a-5a885ae2de73-blob_mask"
                        />
                      </defs>
                      <mask
                        id="3eaec676-3951-437c-968a-5a885ae2de73"
                        fill="black"
                        x={0}
                        y={0}
                        width={48}
                        height={48}
                      >
                        <use
                          href="#3eaec676-3951-437c-968a-5a885ae2de73-blob_mask"
                          fill="white"
                        />
                      </mask>
                      <foreignObject
                        mask="url(#3eaec676-3951-437c-968a-5a885ae2de73)"
                        x={0}
                        y={0}
                        width={48}
                        height={48}
                      >
                        <div
                          className="wrapper-3kah-n"
                          role="treeitem"
                          data-list-item-id="guildsnav___691063304109555732"
                          tabIndex={-1}
                          aria-label=" 🥋TROPA DO CAIXETA🥋"
                        >
                          <img
                            className="icon-3AqZ2e"
                            src="https://cdn.discordapp.com/icons/691063304109555732/a_4300228d0d9f082e2b41f4e790427c39.webp?size=96"
                            alt=" "
                            width={48}
                            height={48}
                            aria-hidden="true"
                          />
                        </div>
                      </foreignObject>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="wrapper-3XVBev" aria-hidden="true">
                <div
                  data-dnd-name="Acima 🥋TROPA DO CAIXETA🥋"
                  className="target-1eRTCg"
                />
                <div
                  data-dnd-name="Combinar com 🥋TROPA DO CAIXETA🥋"
                  className="centerTarget-S6BLFQ"
                />
              </div>
            </div>
          </div>
          <div className="listItem-3SmSlK">
            <div className="guildSeparator-a4uisj" />
          </div>
          <div className="tutorialContainer-2jwoiB">
            <div className="listItem-3SmSlK">
              <div className="listItemWrapper-3d87LP">
                <div className="wrapper-28eC3z">
                  <svg
                    width={48}
                    height={48}
                    viewBox="0 0 48 48"
                    className="svg-2zuE5p"
                    overflow="visible"
                  >
                    <defs>
                      <path
                        d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z"
                        id="43270225-2986-43de-9298-7c8a90774670-blob_mask"
                      />
                    </defs>
                    <mask
                      id="43270225-2986-43de-9298-7c8a90774670"
                      fill="black"
                      x={0}
                      y={0}
                      width={48}
                      height={48}
                    >
                      <use
                        href="#43270225-2986-43de-9298-7c8a90774670-blob_mask"
                        fill="white"
                      />
                    </mask>
                    <foreignObject
                      mask="url(#43270225-2986-43de-9298-7c8a90774670)"
                      x={0}
                      y={0}
                      width={48}
                      height={48}
                    >
                      <div
                        onClick={() => {
                          props.setOpenModalServer(true);
                        }}
                        className="circleIconButton-1VxDrg"
                        aria-label="Adicionar um servidor"
                        role="listitem"
                        data-list-item-id="guildsnav___create-join-button"
                        tabIndex={-1}
                      >
                        <svg
                          className="circleIcon-3489FI"
                          aria-hidden="false"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                          />
                        </svg>
                      </div>
                    </foreignObject>
                  </svg>
                </div>
              </div>
            </div>
            <div className="wrapper-3XVBev" aria-hidden="true">
              <div
                data-dnd-name="Acima fim da lista"
                className="target-1eRTCg"
              />
            </div>
          </div>
          <div className="listItem-3SmSlK">
            <div className="pill-1NRFie">
              <div className="wrapper-z5ab_q" aria-hidden="true" />
            </div>
          </div>
          <div className="listItem-3SmSlK">
            <div className="pill-1NRFie">
              <div className="wrapper-z5ab_q" aria-hidden="true" />
            </div>
          </div>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              pointerEvents: "none",
              minHeight: "0px",
              minWidth: "1px",
              flex: "0 0 auto",
              height: "0px",
            }}
          />
        </div>
        <div className="unreadMentionsIndicatorBottom-3RJMnQ">
          <div
            className="bar-2eAyLE unreadMentionsBar-ZXXoOH unread-2wipsx active-334r9u"
            aria-hidden="true"
            style={{ transform: "translateY(180%)" }}
          >
            <span className="text-2GsXbW">novo</span>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default GuildsNav;
