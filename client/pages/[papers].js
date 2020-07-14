import React, { useState } from "react";
import Link from "next/link";
import Paper from "../components/Paper";
import { useRouter } from "next/router";
import { isEmpty } from "../functions";
import rollingService from "../services/rollingService";
const Papers = (props) => {
  // const { rollings } = props;
  // console.log(rollings);
  const [content, setContent] = useState("");
  const router = useRouter();
  let name = router.query.papers;
  console.log(name);
  const onSubmit = async () => {
    try {
      await rollingService
        .postRolling({
          name: name,
          content: content,
        })
        .then((res) => {
          alert("성공적으로 등록되었습니다.");
          setContent("");
        });
    } catch (err) {
      console.log(err);
      return;
    }
  };
  return (
    <div>
      <h1>링크가 생성되었습니다. 친구들에게 공유하세요!</h1>
      <h3>https://rollingpaper/?{name}</h3>
      <textarea rows="5" onChange={(e) => setContent(e.target.value)} />
      {!isEmpty(content) && (
        <button onClick={() => onSubmit()}>제출하기</button>
      )}

      <br />
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

// Papers.getInitialProps = async () => {
//   const res = await rollingService.getRolling();
//   return {
//     rollings: res,
//   };
// };

export default Papers;
