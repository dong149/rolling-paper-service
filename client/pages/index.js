import React from "react";
import Link from "next/link";

const Index = () => (
  <div>
    <h1>롤링페이퍼</h1>
    <Link href="/start">
      <button>시작하기</button>
    </Link>
  </div>
);

export default Index;
