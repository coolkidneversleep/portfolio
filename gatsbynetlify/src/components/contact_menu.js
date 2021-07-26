import * as React from 'react'
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import DraftsIcon from '@material-ui/icons/Drafts';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import "../styles/header.css";

const ContactMenu = () => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
          event.preventDefault();
          setOpen(false);
        }
    }

    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return(
        <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          style={{textTransform:"capitalize", color:"#2C2E43", fontFamily:"Quicksand", paddingTop:"20px"}}
          className="header_txt" id="nav"
        >
          <div style={{display:"grid", gridTemplateColumns:"auto auto"}}>
            <div>Contact</div>
            <ArrowDropDownIcon></ArrowDropDownIcon>
          </div>
          
          {/* <ListItemIcon >
              <ArrowDropDownIcon fontSize="normal"/>
          </ListItemIcon> */}
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <DraftsIcon fontSize="small" />
                        </ListItemIcon>
                        Gmail
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <a href="https://github.com/coolkidneversleep" style={{textDecoration:"none", color:"#2C2E43",paddingTop:"0px"}}>
                        <ListItemIcon>
                            <GitHubIcon fontSize="small" />
                        </ListItemIcon>
                        Github
                      </a>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>

    )
}

export default ContactMenu