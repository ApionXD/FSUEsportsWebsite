import {Box, Button} from "@mui/material";
import {getRoles} from "@testing-library/react";

export default function NavBar() {
    const containerStyle = {
        display: "flex"
    }
    const buttonBarStyle = {
        display: "flex",
        flexGrow: 9,
        justifyContent: "left",
        backgroundColor: "white"
    }
    const nolebotStyle = {
        display: "flex",
        flexGrow: 1,
        justifyContent: "right",
        backgroundColor: "white"
    }

    return (
        <Box sx={containerStyle}>
            <Box sx={buttonBarStyle}>
                {getNavButton("/", "Home")}
                {getNavButton("/community", "Community")}
                {getNavButton("/news", "News")}
                {getNavButton("/contact", "Contact Us")}
            </Box>
            <Box sx={nolebotStyle}>
                {getNavButton("/nolebot", "Enter NoleBot")}
            </Box>

        </Box>
    )
}

function getNavButton(link: string, name: string) {
    return <Button href={link}>{name}</Button>
}