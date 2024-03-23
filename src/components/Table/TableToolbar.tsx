import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function PrimarySearchAppBar() {
    return (
        <Box sx={{ flexGrow: 1, padding: "0px" }}>
            <AppBar sx={{
                background: "white",
                boxShadow: "none",
                padding: "0px 0px"
            }}>
                <Toolbar sx={{
                    padding: "0px"
                }} >
                    <Search sx={
                        {
                            padding: "0px",
                            border: '1px solid #ccc', // Gray border
                            background: "red",
                            '& input': {
                                color: 'black', // Black text color
                            },

                        }
                    }>
                        <SearchIconWrapper>
                            <SearchIcon sx={{
                                color: "gray",
                                padding: "0px"
                            }} />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"

                            inputProps={{ 'aria-label': 'search' }}
                            sx={{
                                padding: "0px"
                            }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'non e', md: 'flex' } }}>

                        <Fab aria-label="add">
                            <AddIcon />
                        </Fab>
                        {/* ekane icon er bebohar hobe  */}
                    </Box>

                </Toolbar>
            </AppBar>

        </Box>
    );
}
