import React, { useState } from "react";
import Link from "next/link";
import { isEmpty } from "../functions";
import Paper from "../components/Paper";
import Head from "next/head";
import "../styles/papers.scss";
const Start = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="layout">
      <Head>
        <title>롤링 페이퍼</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 ,user-scalable=no, maximum-scale=1"
        />
      </Head>
      <img className="question-logo" src="/q.png" alt="질문" />
      <div className="question">
        <span>
          주인공의
          <br />
          성함 혹은 애칭?
        </span>
      </div>
      <div className="name-input-wrap">
        <input
          className="name-input"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {!isEmpty(name) ? (
        <Link href={`/[papers]`} as={`/${name}`}>
          <div className="create-btn" name={name}>
            <span>생성하기</span>
          </div>
        </Link>
      ) : (
        // <button onClick={moveRoute}>시작하기</button>

        <div className="inactive-create-btn" name={name}>
          <span>입력해주세요</span>
        </div>
      )}
      <Link href="/">
        <div className="back-btn" name={name}>
          <span>뒤로가기</span>
        </div>
      </Link>
    </div>
  );
};

export default Start;
