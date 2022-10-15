import React from 'react'
import {AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './styles'

const Header = ({searchValue, setSearchValue, setFullSearchValue}) => {
    const classes = useStyles();

    //sets search value to letters entered in search box
    const handleSearchChange = (e) => {
        setSearchValue(e.target.value)
    }

    //sets search value to whole word inputted in search box after button click
    const onSubmit = e => {
        e.preventDefault();
        setFullSearchValue(searchValue)
    }

    return (
        <AppBar position="static" style={{ background: "darkgrey", color: "black" }}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    IMDB MovieApp
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.toolbar}>
                        Discover New Movies!
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase onChange={handleSearchChange} value={searchValue} placeholder="Search... " classes={{root: classes.inputRoot, input: classes.inputInput}} />
                            <button type='submit' onClick={onSubmit} className={classes.button}>Search</button>
                    </div>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header