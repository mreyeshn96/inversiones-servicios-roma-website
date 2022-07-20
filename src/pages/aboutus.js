import * as React from "react";
import { graphql } from "gatsby";
import Layout from "./../components/layout";
import { useTranslation } from "gatsby-plugin-react-i18next";

const AboutUsPage = () => {
	  const { t } = useTranslation();
  return (
    <Layout>
      <section className="aboutUsBlock pt-10 pb-8 pt-lg-15 pb-lg-10 pt-xl-20 pb-xl-13">
        <div className="container">
          <div className="row">
            <div
              className="col-12 col-lg-6 wow slideInLeft"
              data-wow-delay="0.35s"
            >
              <div className="videoWrap position-relative shadow rounded overflow-hidden mx-auto mx-lg-0 mb-4 mb-lg-0">
                <img
                  src={'/images/img01.jpg'}
                  className="img-fluid rounded w-100"
                  alt="banner"
                />
              </div>
            </div>
            <div
              className="col-12 col-lg-6 wow slideInRight"
              data-wow-delay="0.35s"
            >
              <div className="descrWrap pt-4">
                <header className="headingHead mb-6">
                  <h2>
                    <strong className="d-block headingTitle fontBase font-weight-normal">
                      {t("AboutUs")}
                    </strong>
                    <span className="d-block">
                      {t("AboutUsTitle")}
                    </span>
                  </h2>
                </header>
                <p className="text-justify">
                  {t("OurInfo")}
                </p>
              </div>
            </div>
          </div>
          <hr className="mt-5 mb-6 mt-lg-10 mb-lg-9 mt-xl-17 mb-xl-12" />
        </div>
      </section>
    </Layout>
  );
};

export default AboutUsPage;
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
