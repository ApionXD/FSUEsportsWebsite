import {Avatar, Box, useTheme} from "@mui/material";
import NavBar from "./NavBar";

export default function Header() {
    const theme = useTheme()
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "20%",
            backgroundColor: theme.palette.primary.main,
        }}>
            <Avatar src={"/logo192.png"} alt={"Esports Logo"} sx={{marginX: "2%"}}></Avatar>
            <h2 style={{color: "white"}}>Esports at FSU</h2>
            <Avatar src={"/logo192.png"} alt={"Esports Logo"} sx={{marginX: "2%"}}></Avatar>
        </Box>
    )
}