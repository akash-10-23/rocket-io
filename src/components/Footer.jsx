import React from 'react';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
        <BottomNavigation >
          <BottomNavigationAction label="LinkedIn" value="recents" icon={<LinkedInIcon  style={{fill: "#0e76a8"}}/>} />
          <BottomNavigationAction label="Twitter" value="favorites" icon={<TwitterIcon  style={{fill: "#1DA1F2"}}/>} />
          <BottomNavigationAction label="Instagram" value="nearby" icon={<InstagramIcon  style={{fill: " #C13584"}}/>} />
          <BottomNavigationAction label="GitHub" value="folder" icon={<GitHubIcon  style={{fill: "#171515"}}/>} />
        </BottomNavigation>
)
}

export default Footer