import * as React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { graphql, useStaticQuery } from 'gatsby';

import AppContext from '../contexts/AppContext';

import '/static/css/bootstrap.css';
import '/static/css/style.css';
import '/static/css/colors.css';
import '/static/css/responsive.css';
import '/static/css/app.css';

import Header from './layouts/header';
import Main from './layouts/main';
import Footer from './layouts/footer';

const Layout = ({ children }) => {
  const { defaultLanguage } = useI18next();
  const [lang, setLang] = React.useState(defaultLanguage);


  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
          companyName
          companyTagline
          companyDescription
          companyAddress
          companyPhone
          companyEmail
        }
      }
    }
  `);

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
      }}
    >
      <div id="pageWrapper">
        <Header data={data.site.siteMetadata} />
        <Main> {children} </Main>
        <Footer data={data.site.siteMetadata} />
      </div>
    </AppContext.Provider>
  );
};

export default Layout;
