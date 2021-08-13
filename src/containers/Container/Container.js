import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../logo.svg"
import ContainerWrapper from './ContainerWrapper';

const Container = ({ children }) => {
    return (
        <ContainerWrapper>
            <div className="sidebar">
                <h2>Menu</h2>
                <List>
                    <Link to="/dashboard/home">
                        <ListItem button>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </Link>

                    <Link to="/dashboard/users">
                        <ListItem button>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Users" />
                        </ListItem>
                    </Link>

                    <Link to="/dashboard/todos">
                        <ListItem button>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Todos" />
                        </ListItem>
                    </Link>
                </List>
            </div>
            <div className="rightside">
                <header className="shadow p-3 mb-3">
                    <img src={logo} className="logo me-3" alt="logo" />
                </header>
                <div className="content">
                    {children}
                </div>
            </div>
        </ContainerWrapper>
    )
}

export default Container;
