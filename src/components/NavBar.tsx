import {Box, Button, ButtonGroup, useTheme} from "@mui/material";
import {getRoles} from "@testing-library/react";

export default function NavBar() {
    const theme = useTheme()
    const containerStyle = {
        display: "flex",
        backgroundColor: "white"
    }
    const buttonBarStyle = {
        display: "flex",
        flexGrow: 9,
        justifyContent: "left",
    }
    const nolebotStyle = {
        display: "flex",
        flexGrow: 1,
        justifyContent: "right",
    }

    return (
        <Box sx={containerStyle}>
            <Box sx={buttonBarStyle}>
                {getNavButton("/", "Home")}
                {getNavButton("/community", "Community")}
                {getNavButton("/news", "News")}
                {getNavButton("/contact", "Contact Us")}
            </Box>
            <Box sx={{flexGrow: 8}}><div/></Box>
            <Box sx={nolebotStyle}>
                {getNavButton("/nolebot", "Enter NoleBot")}
            </Box>

        </Box>
    )
}

function getNavButton(link: string, name: string) {
    return <Button href={link} sx={{
        flexGrow: 1,
        borderRadius: 0,
        boxShadow: 0
    }}>{name}</Button>
}