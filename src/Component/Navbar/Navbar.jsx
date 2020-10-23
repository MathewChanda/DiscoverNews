import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PublicIcon from '@material-ui/icons/Public'
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import { Link } from 'react-router-dom';
import './Navbar.css'


function Navbar(){
    return(
    <div>
        <AppBar style={{background:"#004977",position:"fixed"}}>
            <div id="headerStyle">
                {/* The title of the web app */}
                <PublicIcon id="headerIconStyle" fontSize = "large"/>
                <Typography variant="h3" color="inherit">
                    DiscoverNews
                </Typography>
            </div>
            {/* The tabs in the navbar */}
            <Tabs id="navbarStyles" variant="fullWidth">
                <Tab label="Entertainment" component={Link} to="/entertainment" icon={<LiveTvIcon id="tabIconStyle"/>}/>
                <Tab label="Sports" component={Link} to="/sports" icon={<SportsBasketballIcon id="tabIconStyle"/>}/>
                <Tab label="Technology" component={Link} to="/technology" icon={<ImportantDevicesIcon id="tabIconStyle"/>}/>
            </Tabs>
        </AppBar>
    </div>)
}


export default Navbar; 