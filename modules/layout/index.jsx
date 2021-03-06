import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'theme-ui';
import Footer from './components/footer';
import Header from './components/header';
import Meta from './components/meta';
import NavContext from './NavContext';

export default function Layout({ layout, children }) {
  console.log(layout);
  const { navigation, logo, label, link } = layout?.data;
  return (
    <NavContext.Provider value={[logo, navigation, { label, link }]}>
      <Header />
      <Container size="default" variant="dev-mode">
        {children}
      </Container>
    </NavContext.Provider>
  );
}

Layout.propTypes = {
  children: PropTypes.shape().isRequired,
  layout: PropTypes.shape().isRequired,
};
