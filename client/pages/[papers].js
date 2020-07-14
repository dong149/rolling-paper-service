import React, { useState } from "react";
import Link from "next/link";
import Paper from "../components/Paper";
import { useRouter } from "next/router";
import { isEmpty } from "../functions";
import { CopyToClipboard } from "react-copy-to-clipboard";
import rollingService from "../services/rollingService";
const Papers = (props) => {
  const { rollings } = props;
  console.log(rollings);
  const [content, setContent] = useState("");
  const [copied, setCopied] = useState(false);
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

      <CopyToClipboard
        text={`https://rolling-paper-service.vercel.app/${name}`}
        onCopy={() => setCopied(true)}
      >
        <h3>https://rolling-paper-service.vercel.app/{name}</h3>
      </CopyToClipboard>
      <br />
      <textarea rows="5" onChange={(e) => setContent(e.target.value)} />
      {!isEmpty(content) && (
        <button onClick={() => onSubmit()}>제출하기</button>
      )}

      <br />

      <br />
      <Link href="/">
        <button>돌아가기</button>
      </Link>
      {rollings.map((object) => {
        if (object.name === name) {
          return (
            <Paper key={object._id} name={name} content={object.content} />
          );
        }
      })}
    </div>
  );
};

Papers.getInitialProps = async () => {
  const res = await rollingService.getRolling();
  return {
    rollings: res,
  };
};

export default Papers;
