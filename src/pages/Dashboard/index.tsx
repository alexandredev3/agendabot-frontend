import React from 'react';

import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import DashboardPage from '../../components/DashboardPage';

import { Container, Content } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Header />
      {/* <NavBar /> */}

      <Content>
        <DashboardPage />
      </Content>
    </Container>
  );
}
