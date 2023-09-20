import React from "react";

function Detail(props) {
    const pictures = new URL("./book1.jpg",import.meta.url)

    return (
        <div id="about">
            <div className="detail">
            <img src={pictures} width="400px" />
            <p className="para">Many corporations have slick, flashy mission statements that ultimately do little to motivate employees and less to impress customers, investors, and partners.

But there is a way to share your excitement for the future of your company in a clear, compelling, and powerful way and entrepreneur and business growth expert Cameron Herold can show you how.

Vivid Vision is a revolutionary tool that will help owners, CEOs, and senior managers create inspirational, detailed, and actionable three-year mission statements for their companies. In this easy-to-follow guide, Herold walks organization leaders through the simple steps to creating their own Vivid Vision, from brainstorming to sharing the ideas to using the document to drive progress in the years to come.
      </p>
            </div>
        </div>

    )
}
export default Detail