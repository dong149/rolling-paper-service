import React from "react";
import Link from "next/link";
const Start = () => {
  return (
    <div>
      <h1>롤링페이퍼의 주인공은 누구인가요?</h1>
      <input type="text" />
      <Link href="/write">
        <button>시작하기</button>
      </Link>
      <br />
      <Link href="/">
        <button>돌아가기</button>
      </Link>
    </div>
  );
};

export default Start;
