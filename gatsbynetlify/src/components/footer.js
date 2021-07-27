import DraftsIcon from '@material-ui/icons/Drafts';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import GitHubIcon from '@material-ui/icons/GitHub';
import * as React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return(
        <div class="footer-basic">
        <footer>
            <div class="social">
                <a href="https://github.com/coolkidneversleep" style={{textDecoration:"none", color:"#2C2E43",paddingTop:"0px"}}>
                        <ListItemIcon>
                            <GitHubIcon fontSize="small" />
                        </ListItemIcon>
                </a>
                <a href="mailto:kaewketsaelee@gmail.com" style={{textDecoration:"none", color:"#2C2E43",paddingTop:"0px"}}>
                        <ListItemIcon>
                            <DraftsIcon fontSize="small" />
                        </ListItemIcon>
                </a>
            </div>
            <p class="copyright">Copyright @2021 | Designed by Kaewket Saelee</p>
        </footer>
    </div>

    )
}

export default Footer