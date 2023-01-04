import React from "react";
import "../style/SubmitPage.scss";
import check from "../style/images/check-mark-icon.png";

const SubmitPage = () => {
  return (
    <main className="submit_page_container" id="submit">
      <div className="submit_page_wrapper">
        <h2 className="submit_page_header">You are Logged in RPC!</h2>
        <img src={check} alt="check" className="checkMark" />
      </div>
    </main>
  );
};

export default SubmitPage;
