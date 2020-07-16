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
const Giver = (props) => {
  const { rollings } = props;
  // console.log(rollings);
  const [content, setContent] = useState("");
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  let name = router.query.giver;
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
      </Head>
      <header className="intro">
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
      </div>
    </div>
  );
};

Giver.getInitialProps = async () => {
  const res = await rollingService.getRolling();
  return {
    rollings: res,
  };
};

export default Giver;
