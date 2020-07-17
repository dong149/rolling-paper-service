import React, { useEffect } from "react";
import Link from "next/link";
import Paper from "../components/Paper";
import "../styles/home.scss";
import "../styles/papers.scss";
import Head from "next/head";
import ReactFullpage from "@fullpage/react-fullpage";

const Test2 = () => {
  return (
    <ReactFullpage
      navigation
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
                <Link href="/start">
                  <div className="start-btn">
                    <span>시작하기</span>
                  </div>
                </Link>
                <img
                  className="kakao-btn"
                  src="/kakao_login_medium_wide.png"
                  alt="카카오톡 로그인"
                  onClick={() => {
                    window.Kakao.Auth.authorize({
                      redirectUri: "http://localhost:3000",
                    });
                  }}
                />
              </div>
            </div>
            <div className="section">section2</div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default Test2;
