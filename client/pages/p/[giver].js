import React, { useState, useEffect } from "react";
import Link from "next/link";
import Paper from "../../components/Paper";
import { useRouter } from "next/router";
import { isEmpty } from "../../functions";
import { CopyToClipboard } from "react-copy-to-clipboard";
import rollingService from "../../services/rollingService";
import "../../styles/home.scss";
import "../../styles/papers.scss";
import Head from "next/head";
import ReactFullpage from "@fullpage/react-fullpage";
const Giver = (props) => {
  const { rollings, name, password, id } = props;
  console.log(rollings);
  const [content, setContent] = useState("");
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  let encName = encodeURI(name);
  // console.log(name);

  return (
    <div className="rolling-paper">
      <Head>
        <title>롤링 페이퍼</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 ,user-scalable=no, maximum-scale=1"
        />
        <meta name="description" content="롤링 페이퍼 쉽게 만들기" />
        <meta
          name="keywords"
          content="롤링페이퍼,선물,생일,여자친구,100일,친구"
        />
      </Head>
      {/* <header className="intro">
        <h1>{name} 님</h1>
        <h2>생일 축하드려요!</h2>
      </header>
      <div className="papers">
        {rollings.map((object) => {
          if (object.name === name) {
            return (
              <Paper key={object._id} name={name} content={object.content} />
            );
          }
        })}
      </div> */}
      <ReactFullpage
        slidesNavigation
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section section-first">
                <header className="intro">
                  <h1>{name} 님</h1>
                  <h2>생일 축하드려요!</h2>
                </header>
                {/* <div className="allow">
                  <span>▼</span>
                </div> */}
              </div>
              {rollings.map((object) => {
                return (
                  <div className="section">
                    <Paper
                      key={object._id}
                      name={name}
                      content={object.content}
                      author={object.author}
                    />
                  </div>
                );
              })}
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};

Giver.getInitialProps = async (context) => {
  const name = context.query.giver;
  const password = context.asPath.split("?")[1];
  const id = context.asPath.split("?")[2];
  const res = await rollingService.getRollingContent(id);
  console.log(name, password, id);
  return {
    rollings: res,
    name: name,
    password: password,
    id: id,
  };
};

export default Giver;
