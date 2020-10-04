import React from "react";
import { graphql } from "gatsby";
// import { MDXRenderer } from "gatsby-plugin-mdx";
import { css } from "@emotion/core";
// import Layout from "../components/layout";

const PostTemplate = () => (
  <main>
    <h1>Title H1</h1>
    <p
      css={css`
        font-size: 0.75rem;
      `}
    >
      Posted by Van Thong
    </p>
    <p>Post body</p>
  </main>
);

export default PostTemplate;
