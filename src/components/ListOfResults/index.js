import * as React from 'react';

import {Card, CardContent, CardMedia, IconButton, Typography} from '@mui/material';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import TableRowsIcon from '@mui/icons-material/TableRows';

import "./styles/index.css";

export function ListOfResults ({ data, errorMessage }) {
    const [resultsView, setResultsView] = React.useState('grid');

    return (
        <div className="divListOfResults">
            <div className="iconsGridList">
                <IconButton onClick={() => setResultsView('grid')}>
                    <ViewComfyIcon />
                </IconButton>
                <IconButton onClick={() => setResultsView('list')}>
                    <TableRowsIcon />
                </IconButton>
            </div>
            <div className={resultsView === "grid" ? "gridResults" : "listResults"}>
                {data.map((item) => (
                    <Card
                        key={item.trackId}
                        className={resultsView === "grid" ? "cardGridResults" : "cardListResults"}
                    >
                            <CardMedia
                                className="cardImg"
                                component="img"
                                image={item.artworkUrl100}
                                alt="artwork"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.trackName}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {item.artistName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.collectionName}
                                </Typography>
                            </CardContent>
                    </Card>
                ))}
                {errorMessage && (
                    <Typography className="error" variant="caption" color="error"> {errorMessage} </Typography>
                )}
            </div>
        </div>
    )
}


