import React from "react";
import Helmet from "react-helmet";
import { withPrefix } from "gatsby";
import "./_1_circular-progress-bar.scss";
import "./_2_circular-progress-card.scss";
const Circle = () => (
  <svg
    className="color-success"
    viewBox="0 0 100 100"
    fill="none"
    strokeLinecap="round"
  >
    <circle className="c-progress-bar__bg" cx="50" cy="50" r="44"></circle>
    <circle className="c-progress-bar__fill" cx="50" cy="50" r="44"></circle>
  </svg>
);

const Progress = () => {
  // useEffect(() => {
  //   let frontEnd = document.createElement("script");
  //   frontEnd.src = "/static/1_circular-progress-bar.js";
  //   frontEnd.id = "1_circular-progress-bar";
  //   document.body.appendChild(frontEnd);
  //   return () => {
  //     document.getElementById("1_circular-progress-bar").remove();
  //   };
  // });
  return (
    <>
      <Helmet>
        <script
          src={withPrefix("_1_circular-progress-bar.js")}
          type="text/javascript"
        />
      </Helmet>
      <div className="c-progress-bar-card bg radius-md shadow-xs">
        <div className="padding-md">
          <p className="color-contrast-medium margin-bottom-md">
            Customer Satisfaction
          </p>

          <div className="flex justify-center">
            <div
              className="c-progress-bar  js-c-progress-bar"
              data-progress="92%"
              data-animation="on"
            >
              <p className="sr-only" aria-live="polite" aria-atomic="true">
                Progress value is{" "}
                <span className="js-c-progress-bar__aria-value">92%</span>
              </p>

              <div className="c-progress-bar__shape" aria-hidden="true">
                <span className="c-progress-bar__value text-xxl">
                  <span className="js-c-progress-bar__value">92</span>
                  <i>%</i>
                </span>

                {/* Circle */}
                <Circle />
              </div>
            </div>
          </div>
        </div>

        <footer className="border-top border-contrast-lower padding-y-sm padding-x-md">
          <div className="flex flex-wrap gap-xxs items-center">
            <p className="color-contrast-medium text-sm">
              Previous period: 95%
            </p>

            <div className="flex items-center">
              <span className="inline-block bg-error bg-opacity-20% text-xs padding-x-xxs padding-y-xxxxs radius-full">
                -3.2%
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Progress;
