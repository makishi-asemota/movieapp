import React from 'react'
import {AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'

import useStyles from './styles'

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" style={{ background: "#ff9800", color: "#b23c17" }}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Search Favorite Movies and Actors!
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.toolbar}>
                        Discover New Movies!
                    </Typography>
                    {/* <Autocomplete> */}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase placeholder="Search... " classes={{root: classes.inputRoot, input: classes.inputInput}} />
                        </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header