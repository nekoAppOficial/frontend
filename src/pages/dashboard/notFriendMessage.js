const NotFriendMessage = ({ friend, onClick }) => {
    return (
        <div>
            <div>
                <img 
                src={`${window[`getPath`]()+`/assets/18126c8a9aafeefa76bbb770759203a9.png`}`} aria-hidden="true" className="avatar-2e8lTP clickable-31pE3P" alt=" " />
                <h2 className="header-2jRmjb" aria-labelledby="message-username-962137689677627392 message-timestamp-962137689677627392">
                <span id="message-username-962137689677627392" className="headerText-2z4IhQ">
                    <span className="username-h_Y3Us desaturateUserColors-1O-G89 clickable-31pE3P" aria-controls="popout_205" aria-expanded="false" role="button" tabIndex={0}>Clyde</span>
                    <span className="botTagCozy-3NTBvK botTag-1NoD0B botTagRegular-kpctgU botTag-7aX5WZ rem-3kT9wc">
                    <svg aria-label="Bot verificado" className="botTagVerified-2KCPMa" aria-hidden="false" width={16} height={16} viewBox="0 0 16 15.2">
                        <path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor" />
                    </svg>
                    <span className="botText-1fD6Qk">BOT</span>
                    </span>
                </span>
                <span className="timestamp-p1Df1m timestampInline-_lS3aK">
                    <time aria-label="Hoje às 20:51" id="message-timestamp-962137689677627392" dateTime="2022-04-08T23:51:40.873Z">
                    <i className="separator-AebOhG" aria-hidden="true"> — </i>Hoje às 20:51 </time>
                </span>
                </h2>
                <div id="message-content-962137689677627392" className="markup-eYLPri messageContent-2t3eCI">Sua mensagem não pôde ser enviada. Normalmente isso acontece quando você não compartilha um servidor com o destinatário ou o destinatário aceita apenas mensagem diretas de amigos.
                </div>
            </div>
            <div id="message-accessories-962137689677627392" className="container-2sjPya">
                <div className="ephemeralMessage-11q8XZ">
                <svg className="icon-2XqU5M" aria-hidden="false" width={16} height={16} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 5C5.648 5 1 12 1 12C1 12 5.648 19 12 19C18.352 19 23 12 23 12C23 12 18.352 5 12 5ZM12 16C9.791 16 8 14.21 8 12C8 9.79 9.791 8 12 8C14.209 8 16 9.79 16 12C16 14.21 14.209 16 12 16Z" />
                    <path fill="currentColor" d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" />
                </svg>Só você pode ver esta • <a className="anchor-1MIwyf anchorUnderlineOnHover-2qPutX" role="button" tabIndex={0}>Ignorar mensagem</a>
                </div>
            </div>
        </div>
    )
}

export default NotFriendMessage