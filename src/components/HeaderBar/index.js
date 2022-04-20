import AppleIcon from '@mui/icons-material/Apple';
import {IconButton, Stack} from "@mui/material";

import "./styles/index.css";

export function HeaderBar () {
    return (
        <Stack direction="row" className="headerBar">
            <IconButton href="https://www.apple.com/es/itunes/" target="_blank" rel="noreferrer">
                <AppleIcon className="appleIcon" />
            </IconButton>
            <a
                href="https://www.apple.com/es/itunes/"
                target="_blank"
                rel="noreferrer"
                className="itunesText"
            >
                iTunes
            </a>
        </Stack>
    )
}