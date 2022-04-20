import GitHubIcon from '@mui/icons-material/GitHub';
import {IconButton} from "@mui/material";

import "./styles/index.css";

export function Footer () {
    return (
        <div className="footer">
            <p> {new Date().getFullYear()} by Montserrat Paús</p>
            <IconButton href="https://github.com/MontserratPaus" target="_blank" rel="noreferrer">
                <GitHubIcon />
            </IconButton>
        </div>
    )
}