import Button from "@mui/material/Button";
import { Box , Stack } from "@mui/material";


import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";


const App = ()=>{
    return(
        <Box>
            
            <Navbar/>

            <Stack direction="row" justifyContent="space-between" spacing={2}>
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </Stack>
        </Box>
        

        // <Box display="flex" justifyContent="space-evenly" bgcolor="skyblue">
        //     <Button variant="text">Text</Button>
        //     <Button variant="contained">Contained</Button>
        //     <Button variant="outlined">Outlined</Button>
        //     {/* <Button variant="contained" disableElevation>
        //         Disable elevation
        //     </Button> */}
        //     <Button color="primary">Secondary</Button>
        //     <Button variant="contained" color="success">
        //     Success
        //     </Button>
        //     <Button variant="outlined" color="error">
        //     Error
        //     </Button>
        // </Box>
    )
    
}

export default App;

