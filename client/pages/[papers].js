import React from "react";
import Link from "next/link";
import Paper from "../components/Paper";
import { useRouter } from "next/router";
const Papers = () => {
  const router = useRouter();
  let name = router.query.papers;

  return (
    <div>
      <h1>링크가 생성되었습니다. 친구들에게 공유하세요!</h1>
      <h3>https://rollingpaper/?{name}</h3>
      <Link href="/">
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

export default Papers;
