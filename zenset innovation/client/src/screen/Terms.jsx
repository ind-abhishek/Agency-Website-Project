import React from "react";
import "../styles/Terms.css";
import BgLine from "../component/BgLine";
import OtherNavbar from "../component/OtherNavbar";

const Terms = () => {
  return (
    <>
      <OtherNavbar />
      <div className="pageContainer">
        <div className="TermsContainer">
          <BgLine className="opacity-10" />
          <h1 className="TermsTitel">Terms & Conditions</h1>
          <p className="TermsDesc">
            Welcome to Cyberzet Digital Solutions. Please read these terms and
            conditions carefully before using our services.
          </p>

          <div className="texthead">
            <h3>Agreement to Terms</h3>
            <p className="TermsDecsContentent">
              By accessing or using our services, you agree to be bound by these
              terms and conditions. If you disagree with any part of these terms
              and conditions, you may not access our services.
            </p>

            <h3>Services</h3>
            <p className="TermsDecsContentent">
              Our services include website development, design, and related
              services as agreed upon with the client. We reserve the right to
              refuse service to anyone for any reason at any time.
            </p>

            <h3>Payment and Fees</h3>
            <p className="TermsDecsContentent">
              Payment for our services is due as agreed upon in our contract or
              invoice. Failure to pay may result in suspension or termination of
              services.
            </p>

            <h3>Intellectual Property</h3>
            <p className="TermsDecsContentent">
              All intellectual property rights, including copyright, in our
              services and materials remain with Cyberzet Digital Solutions
              unless otherwise specified.
            </p>

            <h3>Limitation of Liability</h3>
            <p className="TermsDecsContentent">
              We shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including without limitation,
              loss of profits, data, use, goodwill, or other intangible losses.
            </p>

            <h3>Governing Law</h3>
            <p className="TermsDecsContentent">
              These terms and conditions shall be governed by and construed in
              accordance with the laws of [Your Country/State], without regard
              to its conflict of law provisions.
            </p>

            <h3>Changes to Terms</h3>
            <p className="TermsDecsContentent">
              Cyberzet Digital Solutions reserves the right, at our sole
              discretion, to modify or replace these terms and conditions at any
              time. It is your responsibility to check these terms and
              conditions periodically for changes.
            </p>

            <h3>Contact Us</h3>
            <p className="TermsDecsContentent">
              If you have any questions about these terms and conditions, please
              contact us at info@cyberzet.com.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
