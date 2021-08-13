import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../containers/Container';
import Home from '../Home';
import Users from '../Users';
import MenuWrapper from './MenuWrapper'

const Menu = () => {
    const { menu } = useParams();

    return (
        <MenuWrapper>
            <Container>
                <h1>{menu}</h1>
                {menu == "home" && <Home />}
                {menu == "users" && <Users />}
            </Container>
        </MenuWrapper>
    )
}

export default Menu;
