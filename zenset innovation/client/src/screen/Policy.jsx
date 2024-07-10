import React from "react";
import "../styles/Policy.css";
import BgLine from "../component/BgLine";
import OtherNavbar from "../component/OtherNavbar";
import { Helmet } from "react-helmet-async";

const Policy = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Privacy and Policy Page of CyberZet Digital Solutions"
        />
        <title>Privacy & Policy - CyberZet Digital Solutions</title>
        <link rel="canonical" href="https://cyberzet.com/Policy" />
      </Helmet>

      <OtherNavbar />
      <div className="pageContainer">
        <div className="PolicyContainer">
          <BgLine className="opacity-10" />
          <h1 className="PolicyTitel">Privacy & Policy</h1>
          <p className="PolicyDesc">
            At Cyberzet Digital Solutions, we are committed to protecting your
            privacy. This Privacy Policy outlines how we collect, use, and
            safeguard your information when you interact with our website and
            services. Please read the following carefully to understand our
            practices regarding your personal data.
          </p>
          <div className="texthead">
            <h3>Information We Collect:</h3>
            <p className="PolicyDecsContentent">
              <strong>Personal Information:</strong> Name, Email address, Phone
              number, Payment information
            </p>
            <p className="PolicyDecsContentent">
              <strong>Non-Personal Information:</strong> Browser type, IP
              address, Pages visited on our website, Time spent on pages,
              Referring URL
            </p>
            <h3>How We Use Your Information:</h3>
            <p className="PolicyDecsContentent">
              To provide and improve our services, To process transactions, To
              send periodic emails regarding your order or other products and
              services, To respond to inquiries, questions, and other requests,
              To personalize your experience on our website
            </p>
            <h3>Data Protection:</h3>
            <p className="PolicyDecsContentent">
              We implement a variety of security measures to maintain the safety
              of your personal information when you enter, submit, or access
              your personal information. However, no method of transmission over
              the internet, or method of electronic storage, is 100% secure.
              Therefore, we cannot guarantee its absolute security.
            </p>
            <h3>Cookies:</h3>
            <p className="PolicyDecsContentent">
              Our website uses cookies to enhance user experience. Cookies are
              small files that a site or its service provider transfers to your
              computer's hard drive through your web browser (if you allow) that
              enable the site's or service provider's systems to recognize your
              browser and capture and remember certain information.
            </p>
            <h3>Third-Party Disclosure:</h3>
            <p className="PolicyDecsContentent">
              We do not sell, trade, or otherwise transfer to outside parties
              your personally identifiable information. This does not include
              trusted third parties who assist us in operating our website,
              conducting our business, or servicing you, so long as those
              parties agree to keep this information confidential.
            </p>
            <h3>Third-Party Links:</h3>
            <p className="PolicyDecsContentent">
              Occasionally, at our discretion, we may include or offer
              third-party products or services on our website. These third-party
              sites have separate and independent privacy policies. We,
              therefore, have no responsibility or liability for the content and
              activities of these linked sites.
            </p>
            <h3>Your Consent:</h3>
            <p className="PolicyDecsContentent">
              By using our site, you consent to our website's privacy policy.
            </p>
            <h3>Changes to Our Privacy Policy:</h3>
            <p className="PolicyDecsContentent">
              Cyberzet Digital Solutions, managed by business name{" "}
              <strong>Abhishek Kumar Sharma</strong>, reserves the right to
              change this privacy policy at our sole discretion. If we decide to
              change our privacy policy, we will post those changes on this
              page. Policy changes will apply only to information collected
              after the date of the change.
            </p>
            <h3>Contacting Us:</h3>
            <p className="PolicyDecsContentent">
              If there are any questions regarding this privacy policy, you may
              contact us using the information below:
              <br />
              Cyberzet Digital Solutions
              <br />
              Email: support@cyberzet.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Policy;
