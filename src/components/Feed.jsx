import {Box , Input , Button , Card , Typography} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const Feed = ()=>{
    return(
        <Box bgcolor="aliceblue" flex={4}>
            <Box
            sx = {{
                display : "flex",
                backgroundColor : "#c7c7f5",
                padding : "10px",
                justifyContent : "space-between"
            }}
            >
                <Input 
                sx = {{
                    width : "100%",
                }}
                />
                <Button>
                    <SearchIcon></SearchIcon>
                </Button>

            </Box>


            <Box
            sx = {{
                display : "flex",
                margin : "10px",
                padding : "10px",
                justifyContent : "center",
            }} 
            >
                <Card sx={{ maxWidth: 500 }}>
                    <CardMedia
                        sx={{ height: 280 }}
                        image="https://avatars.githubusercontent.com/u/75153249?v=4"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        1. How to get into coding ?
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        In this video we will learn about why should we start coding in our earlier age.
                        This video is an introduction about career in coding.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>

                {/* <Box
                sx = {{
                    justifyContent : "center",
                    backgroundColor : "lightgrey",
                    padding : "20px",
                    borderRadius : "20px",
                }}
                >
                    <img 
                    src = "https://avatars.githubusercontent.com/u/75153249?v=4"
                    />
                    
                    <Button>
                        like
                    </Button>

                </Box> */}
            </Box>

        </Box>
    )
}

export default Feed;