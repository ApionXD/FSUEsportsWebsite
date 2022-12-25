import {Box, List, ListItem, ListItemIcon, ListItemText, SvgIcon} from "@mui/material";

type MainPageProps = {

}

const riotGamesLogo = "M12.534 21.77l-1.09-2.81 10.52.54-.451 4.5zM15.06 0L.307 6.969 2.59 17.471H5.6l-.52-7.512.461-.144 1.81 7.656h3.126l-.116-9.15.462-.144 1.582 9.294h3.31l.78-11.053.462-.144.82 11.197h4.376l1.54-15.37Z"
export default function MainPage(props: MainPageProps) {
    return (
    <Box sx={{
        display: "flex",
        height: "min-content",
        width: "100%",
        color: "white",
        marginTop: "1%"
    }}>
        <Box sx={{
            height: "100%",
            width: "50%",
            display: "flex",
            flexDirection: "column",
        }}>
            <Box sx={{
                display: "flex",
                height: "60%",
                flexGrow: 1
            }}>
                <img style={{
                    margin: "auto",
                    minWidth: "10%",
                    minHeight: "10%",
                    maxWidth: "60%",
                    maxHeight: "60%",
                }} src={"test.jpg"}></img>
            </Box>
            <Box sx={{
                display: "flex",
                height: "40%",
                marginTop: "5%",
                flexDirection: "column",
                flexGrow: 2
            }}>
                <h1 style={{
                    margin: "auto"
                }}>Active Teams</h1>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                }}>
                    <List sx={{flexGrow: 1}}>
                        <ListItem>
                            <ListItemIcon sx={{flexGrow: 1}}>
                                <SvgIcon>
                                    <path d={riotGamesLogo}/>
                                </SvgIcon>
                            </ListItemIcon>
                            <ListItemText sx={{flexGrow: 2}}>
                                League of Legends
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{flexGrow: 1}}>
                                <SvgIcon>
                                    <path d={riotGamesLogo}/>
                                </SvgIcon>
                            </ListItemIcon>
                            <ListItemText sx={{flexGrow: 2}}>
                                Rocket League
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{flexGrow: 1}}>
                                <SvgIcon>
                                    <path d={riotGamesLogo}/>
                                </SvgIcon>
                            </ListItemIcon>
                            <ListItemText sx={{flexGrow: 2}}>
                                Dead By Daylight
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{flexGrow: 1}}>
                                <SvgIcon>
                                    <path d={riotGamesLogo}/>
                                </SvgIcon>
                            </ListItemIcon>
                            <ListItemText sx={{flexGrow: 2}}>
                                Counter Strike: Global Offensive
                            </ListItemText>
                        </ListItem>
                    </List>
                    <List sx={{flexGrow: 1}}>
                        <ListItem>
                            <ListItemIcon sx={{flexGrow: 1}}>
                                <SvgIcon>
                                    <path d={riotGamesLogo}/>
                                </SvgIcon>
                            </ListItemIcon>
                            <ListItemText sx={{flexGrow: 2}}>
                                Valorant
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{flexGrow: 1}}>
                                <SvgIcon>
                                    <path d={riotGamesLogo}/>
                                </SvgIcon>
                            </ListItemIcon>
                            <ListItemText sx={{flexGrow: 2}}>
                                Overwatch
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{flexGrow: 1}}>
                                <SvgIcon>
                                    <path d={riotGamesLogo}/>
                                </SvgIcon>
                            </ListItemIcon>
                            <ListItemText sx={{flexGrow: 2}}>
                                Hearthstone
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{flexGrow: 1}}>
                                <SvgIcon>
                                    <path d={riotGamesLogo}/>
                                </SvgIcon>
                            </ListItemIcon>
                            <ListItemText sx={{flexGrow: 2}}>
                                Super Smash Bros
                            </ListItemText>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Box>
        <Box sx={{
            height: "100%",
            width: "50%",
            display: "flex",
            flexDirection: "column",
        }}>
            <Box sx={{
                display:"flex",
                flexDirection: "column",
                height: "50%",
                width: "100%",
                whiteSpace: "normal"
            }}>
                <h1 style={{
                    alignSelf: "center",
                    marginTop: "0",
                    marginBottom: "0%"
                }}>About Us</h1>
                <p>Founded in 2018, The Esports Club at FSU is a student led organization that focuses on involving members into the emerging world of competitive gaming through student run teams and events.
                   Passionate players are capable of competing for the university in various collegiate tournaments for the chances of earning titles and prizes.
                    The club also provides a safe and friendly environment for casual players by hosting exciting community events across campus and in online spaces</p>
            </Box>
            <Box sx={{
                display:"flex",
                flexDirection: "column",
                gap: "0.5%",
                height: "50%",
            }}>
                <h1 style={{
                    alignSelf: "center",
                    marginTop: "0",
                    marginBottom: "0%"
                }}>Join Us</h1>
                <iframe style={{alignSelf: "center"}} src={"https://discord.com/widget?id=138481681630887936&theme=dark"} width="80%" height="500"
                        allowTransparency={true} frameBorder={"0"}
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </Box>
        </Box>
    </Box>)
}