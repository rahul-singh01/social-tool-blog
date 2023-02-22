import {Box , Button } from "@mui/material" 
// import Image from 'mui-image'

const Sidebar =()=>{
    return (
        
        <Box flex={1} p={2} sx={{ 
            display : {xs : "none" , sm : "block" },
            flexDirection: 'column' ,
            display:"flex" ,
            width : 150,
            backgroundColor: 'aliceblue',
            fontFamily: 'Roboto',
            height : "90vh",
            borderRight : "1px solid black",
            }} >

            <div class="avatar_details">
                <img
                    class="avatar_img"
                    src = "https://avatars.githubusercontent.com/u/75153249?v=4"
                />
            </div>
            <div class="avatar_card">
                <p>
                    Rahul Singh
                </p>
            </div>

            <Button
            sx = {{
                backgroundColor : "#9c9ceb",
                margin : 1,
                color : "black"

            }}
            >
                Home
            </Button>

            <Button
            sx = {{
                backgroundColor : "#9c9ceb",
                margin : 1,
                color : "black"

            }}
            >
                Contact
            </Button>

            <Button
            sx = {{
                backgroundColor : "#9c9ceb",
                margin : 1,
                color : "black"

            }}
            >
                Requests
            </Button>

            <Button
            sx = {{
                backgroundColor : "#9c9ceb",
                margin : 1,
                color : "black"

            }}
            >
                About
            </Button>

            <Button
            sx = {{
                backgroundColor : "#9c9ceb",
                margin : 1,
                color : "black"

            }}
            >
                LogOut
            </Button>
        </Box>

        
    )
}

export default Sidebar;