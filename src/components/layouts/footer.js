import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation, Link } from "gatsby-plugin-react-i18next";

import AppContext from "../../contexts/AppContext";

const Footer = ({ data }) => {
  const { t } = useTranslation();
  const { lang } = React.useContext(AppContext);
  return (
    <footer className="site-footer bg-dark">
      <div className="container">
        <div className="site-footer__top">
          <div className="row">
            <div className="col-sm-5 col-12 wow fadeInUp" data-wow-delay="100ms">
              <div className="site-footer__top-left">
                <h3 className="footer-widget__title">{data.companyName}</h3>
                <p>
                  {t('OurInfo')}
                </p>
              </div>
            </div>
            <div className="col-sm-7 col-12">
              <div>
                <div className="site-footer__top-widget-box">
                  <div className="row">
                    <div
                      className="col-sm-5 col-12 wow fadeInUp"
                      data-wow-delay="100ms"
                    >
                      <div className="footer-widget__column footer-widget__explore clearfix">
                        <h3 className="footer-widget__title">{t('explore.text')}</h3>
                        <ul className="footer-widget__explore-list list-unstyled clearfix w-100 text-white">
                          <li>
                            <Link language={lang} to="/">{t("Home")}</Link>
                          </li>
                          <li>
                            <Link language={lang} to="/aboutus">{t("AboutUs")}</Link>
                          </li>
                          <li>
                            <Link language={lang} to="/ourservices">{t("OurServices")}</Link>
                          </li>
                          <li>
                            <Link language={lang} to="/contactus">{t("ContactUs")}</Link>
                          </li>

                        </ul>
                      </div>
                    </div>

                    <div
                      className="col-sm-5 col-12 wow fadeInUp"
                      data-wow-delay="300ms"
                    >
                    <h3 className="footer-widget__title">{t('ContactUs')}</h3>
                        <ul className="footer-widget__contact-list list-unstyled text-white">
                          <li className="d-flex flex-row gap-2">
                            <span>{data.companyEmail}</span>
                          </li>
                          <li className="d-flex flex-row gap-2">
                            <span>{data.companyPhone}</span>
                          </li>
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <p className="site-footer__bottom-text">{t('All rights reserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
