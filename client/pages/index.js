import React, { useEffect } from "react";
import Link from "next/link";
import Paper from "../components/Paper";
import "../styles/home.scss";
import "../styles/papers.scss";
import Head from "next/head";
import ReactFullpage from "@fullpage/react-fullpage";
import Start from "./start";
const Index = () => {
  return (
    <div>
      <Head>
        <title>롤링 페이퍼</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 ,user-scalable=no, maximum-scale=1"
        />
      </Head>
      <ReactFullpage
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <div className="layout">
                  <img
                    className="lefthanders"
                    src="/lefthanders.jpeg"
                    alt="왼손잡이들 로고"
                  />
                  {/* <div className="rolling"></div> */}
                  <img className="logo" src="/pen.jpeg" alt="롤링페이퍼 메인" />
                  <img
                    className="logo"
                    src="/rolling.jpeg"
                    alt="롤링페이퍼 로고"
                  />
                  {/* <h1>롤링페이퍼</h1> */}
                  {/* <a id="kakao-link-btn">
          
          <button>공유</button>
        </a> */}

                  <div className="start-btn">
                    <span>▼</span>
                  </div>
                </div>
              </div>

              <div className="section">
                <Start />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};

export default Index;
