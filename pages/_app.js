// pages/_app.js
import React from "react";
import NextApp from "next/app";
import theme from "../theme";
import { ThemeProvider, BaseStyles } from "theme-ui";
import emotionReset from "emotion-reset";
import { Global, css } from "@emotion/react";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            ${emotionReset}
          `}
        />
        <BaseStyles>
          <Component {...pageProps} />
        </BaseStyles>
      </ThemeProvider>
    );
  }
}
