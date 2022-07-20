import * as React from 'react';
import { graphql } from 'gatsby';
import { Trans } from 'gatsby-plugin-react-i18next';

import Layout from '../components/layout';

const OurServicePage = () => {
    return (
        <Layout>
            <div id="scrollto3" className="scrolltoblock">
				<section className="servicesBlock bg-light pt-6 pb-5 pt-md-8 pb-md-9 pt-lg-10 pb-lg-12 pt-xl-14 pb-xl-17 text-center">
					<div className="container">
						<header className="headingHead hhv2 text-center mb-10 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
							<h2>
								<strong className="d-block headingTitle fontBase font-weight-normal"><Trans>OurServices</Trans></strong>
								<span className="d-block"><Trans>What We Offer</Trans></span>
							</h2>
						</header>
						<div className="row justify-content-center wow flipInX" data-wow-duration="1s" data-wow-delay="1s">
							<div className="col-12 col-md-6 col-lg-4">
								<article className="serviceColumn rounded bg-white shadow overflow-hidden text-center mb-6 px-3 px-xl-5 py-5 py-xl-8 mx-auto mx-md-0">
									<div className="imgHolder position-relative mb-16 mx-n3 mt-n5 mx-xl-n5 mt-xl-n8">
									
										<span className="icnWrap d-flex align-items-center justify-content-center text-white rounded-circle position-absolute">
											
										</span>
									</div>
									<h3 className="mb-4">
										<a href="/"><Trans>Financial services</Trans></a>
									</h3>
									<ul className="list-unstyled featuresList d-flex flex-column flex-wrap align-items-center mt-6 ">
                                        <li><Trans>Financial advice</Trans></li>
                                        <li><Trans>Financial evaluation of the business</Trans></li>
                                        <li><Trans>Feasibility studies</Trans></li>
                                        <li><Trans>Business Valuation</Trans></li>
                                        <li><Trans>Reduction of costs</Trans></li>
									</ul>
								</article>
							</div>
							<div className="col-12 col-md-6 col-lg-4">
								<article className="serviceColumn rounded bg-white shadow overflow-hidden text-center mb-6 px-3 px-xl-5 py-5 py-xl-8 mx-auto mx-md-0">
									<div className="imgHolder position-relative mb-16 mx-n3 mt-n5 mx-xl-n5 mt-xl-n8">
									
										<span className="icnWrap d-flex align-items-center justify-content-center text-white rounded-circle position-absolute">
											
										</span>
									</div>
									<h3 className="mb-4">
										<a href="/"><Trans>Administrative services</Trans></a>
									</h3>
									<ul className="list-unstyled featuresList d-flex flex-column flex-wrap align-items-center mt-6 ">
                                        <li><Trans>Business plans</Trans></li>
                                        <li><Trans>Strategic plans</Trans></li>
                                        <li><Trans>Policies and procedures manuals</Trans></li>
                                        <li><Trans>Human Resources</Trans></li>
                                    
									</ul>
								</article>
							</div>
							<div className="col-12 col-md-6 col-lg-4">
								<article className="serviceColumn rounded bg-white shadow overflow-hidden text-center mb-6 px-3 px-xl-5 py-5 py-xl-8 mx-auto mx-md-0">
									<div className="imgHolder position-relative mb-16 mx-n3 mt-n5 mx-xl-n5 mt-xl-n8">
										<span className="icnWrap d-flex align-items-center justify-content-center text-white rounded-circle position-absolute">

										</span>
									</div>
									<h3 className="mb-4">
										<a href="/"><Trans>Tax services</Trans></a>
									</h3>
									
                                    <ul className="list-unstyled featuresList d-flex flex-column flex-wrap align-items-center mt-6 ">
                                        <li><Trans>Evaluation of tax compliance</Trans></li>
                                        <li><Trans>Fiscal resources</Trans></li>
                                        <li><Trans>Personal income tax returns</Trans></li>
									</ul>
                                  
								</article>
							</div>
						</div>
						
					</div>
				</section>
			</div>
        </Layout>
    );
}

export default OurServicePage;
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
