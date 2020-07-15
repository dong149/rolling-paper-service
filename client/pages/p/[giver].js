import React, { useState, useEffect } from "react";
import Link from "next/link";
import Paper from "../../components/Paper";
import { useRouter } from "next/router";
import { isEmpty } from "../../functions";
import { CopyToClipboard } from "react-copy-to-clipboard";
import rollingService from "../../services/rollingService";
import "../../styles/home.scss";
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
    <div className="layout">
      <h1>{name} 님에게 보내는 롤링페이퍼입니다.</h1>
      <h2>생일 축하해요!</h2>

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

Giver.getInitialProps = async () => {
  const res = await rollingService.getRolling();
  return {
    rollings: res,
  };
};

export default Giver;