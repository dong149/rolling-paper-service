import React from "react";
import Link from "next/link";
import Paper from "../components/Paper";
import { WiredCard, WiredButton } from "wired-elements";
const Write = () => {
  return (
    <div>
      <h1>링크가 생성되었습니다. 친구들에게 공유하세요!</h1>
      <h3>https://rollingpaper/?donghoonryoo</h3>
      <Link href="/write">
        <wired-button elevation="3">공유하기</wired-button>
      </Link>
      <br />
      <Link href="/">
        <wired-button elevation="3">돌아가기</wired-button>
      </Link>
      <Paper />
      <Paper />
    </div>
  );
};

export default Write;
