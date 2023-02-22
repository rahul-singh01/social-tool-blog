// import {Box , IconButton} from "@mui/material"
import {AppBar , Toolbar , styled , Typography} from "@mui/material"
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () =>{

    const StyledToolbar = styled(Toolbar)({
        display : "flex",
        justifyContent : "space-between",
    })

    const Search = styled("div")({
        backgroundColor : "white"
    })
    
    return (
        <AppBar position="sticky" sx={{
            backgroundColor : "#686887"
        }}> 
           <Toolbar>
                <StyledToolbar>
                    {/* <AccountCircleIcon sx={{xs:"block" , sm : "none"}}/> */}
                    <Typography variant="h6" sx={{ 
                        display : {xs : "none" , sm : "block" ,
                        }}}>Social Tool</Typography>  
                    {/* <Search>Search</Search> */}
                </StyledToolbar>
           </Toolbar>
        </AppBar>
    )
}

export default Navbar;