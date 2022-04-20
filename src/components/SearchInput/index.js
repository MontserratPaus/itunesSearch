import * as React from 'react';

import {Search} from "@mui/icons-material";
import {Button, Stack, TextField} from "@mui/material";

import "./styles/index.css";

export function SearchInput ({ onClickSearch }) {
    const [inputSearchMusic, setInputSearchMusic] = React.useState("");

    const enterKeypress = e => {
        if (e.key === 'Enter') {
            onClickSearch(inputSearchMusic)
        }
    }

    function onInputSearchMusic(event, inputSearchMusic) {
        setInputSearchMusic(event.target.value);
    }

    return (
        <div className="search" >
            <h2>Search music in iTunes...</h2>
            <Stack direction="row" className="searchBar">
                <TextField
                    fullWidth={true}
                    value={inputSearchMusic}
                    onChange={(event) => onInputSearchMusic(event, "inputSearchMusic")}
                    onKeyPress={enterKeypress}
                    label="Search music..."
                    variant="outlined"
                />
                <Button
                    className="buttonSearch"
                    variant="contained"
                    onClick={() => onClickSearch(inputSearchMusic)}
                    endIcon={<Search/>}
                >
                    Search
                </Button>
            </Stack>
        </div>
    )
}