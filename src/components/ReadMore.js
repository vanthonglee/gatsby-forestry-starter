import React from "react"

const ReadMore = ({ children }) => (
  <p
    className="read-more js-read-more"
    data-btn-class="{this.props.btnClass}"
    data-ellipsis="{this.props.ellipsis}"
  >
    {children}
  </p>
)
export default ReadMore
