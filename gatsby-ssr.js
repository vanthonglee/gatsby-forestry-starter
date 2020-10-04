// Import React so that you can use JSX in HeadComponents
const React = require("react")

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents([
    <script src="util.js"></script>,
    <script
      key="fun_javascript"
      dangerouslySetInnerHTML={{
        __html: `
      document.getElementsByTagName("html")[0].className += " js";
    `,
      }}
    />,
  ])
}
