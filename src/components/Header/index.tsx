import React from 'react';
import { Link } from 'react-router-dom';

import dashboardIcon from '../../assets/icons/dashboard.svg';
import servicesIcon from '../../assets/icons/services.svg';
import integrationIcon from '../../assets/icons/integration.svg';
import settingsIcon from '../../assets/icons/settings.svg';

import lupaIcon from '../../assets/icons/lupa.svg'

import { Container, Content, Search, Links } from './styles';


const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Links>
          <Link to="/">
            <img src={dashboardIcon} alt="dashboard icon" /> Dashboard
          </Link>

          <Link to="/">
            <img src={servicesIcon} alt="services icon" /> Serviços
          </Link>

          <Link to="/">
            <img src={settingsIcon} alt="integration icon" /> Configurações
          </Link>

          <Link to="/">
            <img src={integrationIcon} alt="settings icon" /> Integração
          </Link>
        </Links>

        <Search>
          <img src={lupaIcon} alt="lupa icon" />
          <input type="text" placeholder="Search" />
        </Search>
      </Content>
    </Container>
  );
};

export default Header;
