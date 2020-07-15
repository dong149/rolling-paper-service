import React, { useState, useEffect } from "react";
import Link from "next/link";
import Paper from "../components/Paper";
import { useRouter } from "next/router";
import { isEmpty } from "../functions";
import { CopyToClipboard } from "react-copy-to-clipboard";
import rollingService from "../services/rollingService";
import "../styles/home.scss";
import "../styles/papers.scss";
import Head from "next/head";
const Papers = (props) => {
  const { rollings } = props;
  // console.log(rollings);
  const [content, setContent] = useState("");
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  let name = router.query.papers;
  let encName = encodeURI(name);
  // console.log(encName);
  // console.log(name);

  useEffect(() => {
    // console.log(window.Kakao);
    if (isEmpty(window.Kakao.Link)) {
      window.Kakao.init("28ff1d35692191420def0e22e9d6941b");
    }

    window.Kakao.Link.createDefaultButton({
      container: "#kakao-link-btn",
      objectType: "feed",
      content: {
        title: `${name}님을 위한 롤링페이퍼`,
        description: "소중한 선물",
        imageUrl:
          "https://github.com/dong149/image_resources/blob/master/rollingpaper/rollingpaper.png?raw=true",
        link: {
          webUrl: `https://rollingpaper.site/${name}`,
          mobileWebUrl: `https://rollingpaper.site/${name}`,
        },
      },
      social: {
        likeCount: 100,
        commentCount: 202,
        sharedCount: 303,
      },
      buttons: [
        {
          title: "쓰러 가기",
          link: {
            webUrl: `https://rollingpaper.site/${name}`,
            mobileWebUrl: `https://rollingpaper.site/${name}`,
          },
        },
      ],
      success: function (response) {
        console.log(response);
      },
      fail: function (error) {
        console.log(error);
      },
    });
    window.Kakao.Link.createDefaultButton({
      container: "#kakao-link-btn-giver",
      objectType: "feed",
      content: {
        title: `${name}님 생일 축하드립니다!`,
        description: "친구들이 준비한 선물",
        imageUrl:
          "https://github.com/dong149/image_resources/blob/master/rollingpaper/rollingpaper.png?raw=true",
        link: {
          webUrl: `https://rollingpaper.site/p/${name}`,
          mobileWebUrl: `https://rollingpaper.site/p/${name}`,
        },
      },
      social: {
        likeCount: 100,
        commentCount: 202,
        sharedCount: 303,
      },
      buttons: [
        {
          title: "보러 가기",
          link: {
            webUrl: `https://rollingpaper.site/p/${name}`,
            mobileWebUrl: `https://rollingpaper.site/p/${name}`,
          },
        },
      ],
      success: function (response) {
        console.log(response);
      },
      fail: function (error) {
        console.log(error);
      },
    });
  }, []);
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
    <div className="layout">
      {/* <Head>
        <title>롤링 페이퍼</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 ,user-scalable=no, maximum-scale=1"
        />
      </Head> */}
      <h1>{name} 님에게 보내는 롤링페이퍼입니다.</h1>
      <h2>링크가 생성되었습니다. 친구들에게 공유하세요!</h2>

      <CopyToClipboard
        text={`https://rollingpaper.site/${encName}`}
        onCopy={() => setCopied(true)}
      >
        <span className="link">https://rollingpaper.site/{encName}</span>
      </CopyToClipboard>
      <div className="share-btn-wrap">
        <a id="kakao-link-btn" className="share-btn">
          <span>공유하기</span>
        </a>
      </div>
      <br />
      <textarea rows="5" onChange={(e) => setContent(e.target.value)} />
      {!isEmpty(content) && (
        <button onClick={() => onSubmit()}>제출하기</button>
      )}

      <br />

      <br />
      {/* <Link href="/">
        <span className="back-btn">돌아가기</span>
      </Link> */}

      <Link href={`/p/${name}`}>
        <div className="preview-btn-wrap">
          <span className="preview-btn">테스트하기</span>
        </div>
      </Link>
      <a id="kakao-link-btn-giver">
        <div className="present-btn-wrap">
          <span className="present-btn">주인공에게 공유</span>
        </div>
      </a>
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
