import React from "react";
import "../styles/Support.css";
import BgLine from "../component/BgLine";
import OtherNavbar from "../component/OtherNavbar";
import { Helmet } from "react-helmet";

const Support = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Help & Support - CyberZet Digital Solutions</title>
        <link rel="canonical" href="https://cyberzet.com/Support" />
      </Helmet>

      <OtherNavbar />
      <div className="pageContainer">
        <div className="SupportContainer">
          <BgLine className="opacity-10" />
          <h1 className="SupportTitel">Help & Support</h1>
          <p className="SupportDesc">
            Our Support policy has been designed to assist you effectively.
            Please read our support policy carefully:
          </p>
          <div className="texthead">
            <h3>Support Policy:</h3>
            <div>
              <p className="SupportDecsContentent">
                Our support team is available to assist you during our business
                hours. Please contact us at support@cyberzet.com for any
                assistance you may need.
              </p>

              <p className="SupportDecsContentent">
                We strive to respond to all support inquiries promptly.
                Depending on the complexity of the issue, resolution times may
                vary.
              </p>

              <p className="SupportDecsContentent">
                For urgent issues, please call our support hotline at +91
                9891075410.
              </p>

              <p className="SupportDecsContentent">
                Our support covers technical assistance, troubleshooting, and
                guidance related to our services. We do not provide support for
                third-party products or services.
              </p>

              <p className="SupportDecsContentent">
                Please have your account information or relevant details ready
                when contacting support to expedite the process.
              </p>

              <p className="SupportDecsContentent">
                If your issue requires escalation, our support team will
                escalate it to the appropriate department for further
                assistance.
              </p>

              <p className="SupportDecsContentent">
                We value your feedback and may use it to improve our services.
                Please let us know how we can better assist you.
              </p>

              <p className="SupportDecsContentent">
                For more information or specific inquiries, feel free to reach
                out to our support team at support@cyberzet.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
