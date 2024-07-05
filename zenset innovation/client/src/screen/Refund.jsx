import React from "react";
import "../styles/Refund.css";
import BgLine from "../component/BgLine";

import OtherNavbar from "../component/OtherNavbar";

const Refund = () => {
  return (
    <>
      <OtherNavbar></OtherNavbar>
      <div className="pageContainer">
        <div className="refundContainer">
          <BgLine className="opacity-10"></BgLine>
          <h1 className="refundTitel">Refund & Cancellation</h1>
          <p className="refundDesc">
            Our refund and cancellation policy is designed to ensure clarity and
            transparency. Please read the following policy carefully to
            understand the circumstances under which refunds and cancellations
            are granted.
          </p>
          <div className="texthead">
            <h3>Refund Policy:</h3>
            <div>
              <p className="refundDecsContentent">
                Refunds are available for our services under the following
                conditions:
              </p>

              <p className="refundDecsContentent">
                If a project has not been initiated by our team, a full refund
                can be requested within 14 days of making the payment.
              </p>

              <p className="refundDecsContentent">
                If a project is in progress but not completed, a partial refund
                can be requested. The amount will be based on the work completed
                up to the cancellation point.
              </p>

              <p className="refundDecsContentent">
                Completed projects or services that have been delivered and
                accepted by the client are not eligible for a refund.
              </p>

              <p className="refundDecsContentent">
                To request a refund, please contact us at info@cyberzet.com with
                your project details and reason for the refund request.
              </p>

              <p className="refundDecsContentent">
                Once we receive your request, we will review it and notify you
                of the approval or rejection of your refund. Approved refunds
                will be processed within 14 business days.
              </p>

              <p className="refundDecsContentent">
                If your refund is approved, it will be processed, and a credit
                will be applied to your original method of payment.
              </p>

              <p className="refundDecsContentent">Late or Missing Refunds:</p>

              <p className="refundDecsContentent">
                If you haven’t received a refund yet, please check your bank
                account again.
              </p>

              <p className="refundDecsContentent">
                Then contact your credit card company, as it may take some time
                before your refund is officially posted.
              </p>

              <p className="refundDecsContentent">
                Next, contact your bank. There is often some processing time
                before a refund is posted.
              </p>

              <p className="refundDecsContentent">
                If you’ve done all of this and still have not received your
                refund, please contact us at info@cyberzet.com.
              </p>

              <p className="refundDecsContentent">Sale Items:</p>

              <p className="refundDecsContentent">
                Only regular-priced services may be refunded; unfortunately,
                sale items cannot be refunded.
              </p>
            </div>
          </div>

          <div className="texthead">
            <h3>Cancellation Policy:</h3>
            <div>
              <p className="refundDecsContentent">
                Cancellations can be requested under the following conditions:
              </p>

              <p className="refundDecsContentent">
                If you wish to cancel a project before our team has started
                working on it, you can request a full refund within 14 days of
                making the payment.
              </p>

              <p className="refundDecsContentent">
                For projects that are already in progress, you may request a
                cancellation, and we will provide a partial refund based on the
                work completed up to the cancellation point.
              </p>

              <p className="refundDecsContentent">
                Once a project is completed and delivered, cancellations are not
                possible.
              </p>

              <p className="refundDecsContentent">
                To request a cancellation, please contact us at
                info@cyberzet.com with your project details and reason for the
                cancellation request.
              </p>

              <p className="refundDecsContentent">
                We will review your request and notify you of the approval or
                rejection of your cancellation. Approved cancellations will
                result in a refund processed within 14 business days.
              </p>

              <p className="refundDecsContentent">
                If you have any questions about our refund and cancellation
                policy, please contact us at info@cyberzet.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Refund;
