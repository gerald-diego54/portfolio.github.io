import React, {useState} from 'react'
import {
    Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu"; //reactproj\node_modules\@material-ui\core\Menu   @material-ui\icons\Menu.js

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
        color: 'blue',
        fontSize: '20px'
    },icon: {
        color: 'white'
    }
}));

const DrawerComponent = () => {
    const classes = useStyles(); //CSS Style
    const [openDrawer, setOpenDrawer] = useState(false); //state of opendrawer, it will true once the screen minimize
    return (
        <>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} anchor="right">
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                        <Link to="/" className={classes.link}>Home</Link>
                        </ListItemText>
                    </ListItem>
                        <Divider />
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                        <Link to="/" className={classes.link}>About</Link>
                        </ListItemText>
                    </ListItem>
                        <Divider />
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                        <Link to="/" className={classes.link}>Certificates</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                        <Link to="/portfolio" className={classes.link}>Portfolio</Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </>
    )
}

export default DrawerComponent
