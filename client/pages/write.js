import React from "react";
import Link from "next/link";
import Paper from "../components/Paper";

const Write = () => {
  return (
    <div>
      <h1>링크가 생성되었습니다. 친구들에게 공유하세요!</h1>
      <h3>https://rollingpaper/?donghoonryoo</h3>
      <Link href="/write">
        <button>복사</button>
      </Link>
      <br />
      <Link href="/">
        <button>돌아가기</button>
      </Link>
      <Paper />
      <Paper />
    </div>
  );
};

export default Write;
