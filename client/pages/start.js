import React, { useState } from "react";
import Link from "next/link";
import { isEmpty } from "../functions";
import Paper from "../components/Paper";
const Start = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  return (
    <div>
      <h1>롤링페이퍼의 주인공은 누구인가요?</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      {!isEmpty(name) ? (
        <Link href={`/[papers]`} as={`/${name}`}>
          <button name={name}>시작하기</button>
        </Link>
      ) : (
        // <button onClick={moveRoute}>시작하기</button>

        <button>시작</button>
      )}
      {/* <Link href={`/p/[papers]`} as={`/p/${name}`}>
        <button>시작하기</button>
      </Link> */}
      <br />
      {/* <Link href="/">
        <button>돌아가기</button>
      </Link> */}
      <Link href="/">
        <button>돌아가기</button>
      </Link>
    </div>
  );
};

export default Start;
