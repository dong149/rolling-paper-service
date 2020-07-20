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
import ReactFullpage from "@fullpage/react-fullpage";
const Papers = (props) => {
  const { rollings } = props;
  // console.log(rollings);
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  let name = router.query.papers;
  let pw = router.asPath.split("?")[1];
  let encName = encodeURI(name);
  // console.log(encName);
  // console.log(name);

  useEffect(() => {
    // console.log(window.Kakao);
    // if (isEmpty(window.Kakao.Link)) {
    //   window.Kakao.init("28ff1d35692191420def0e22e9d6941b");
    // }
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init("28ff1d35692191420def0e22e9d6941b");
    }

    window.Kakao.Link.createDefaultButton({
      container: "#kakao-link-btn",
      objectType: "feed",
      content: {
        title: `${name}님을 위한 롤링페이퍼`,
        description: "소중한 선물",
        imageUrl:
          "https://github.com/dong149/image_resources/blob/master/rollingpaper/rollingpaper_thumbnail.jpeg?raw=true",
        link: {
          webUrl: `https://rollingpaper.site/${name}?${pw}`,
          mobileWebUrl: `https://rollingpaper.site/${name}?${pw}`,
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
            webUrl: `https://rollingpaper.site/${name}?${pw}`,
            mobileWebUrl: `https://rollingpaper.site/${name}?${pw}`,
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
          "https://github.com/dong149/image_resources/blob/master/rollingpaper/rollingpaper_thumbnail.jpeg?raw=true",
        link: {
          webUrl: `https://rollingpaper.site/p/${name}?${pw}`,
          mobileWebUrl: `https://rollingpaper.site/p/${name}?${pw}`,
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
            webUrl: `https://rollingpaper.site/p/${name}?${pw}`,
            mobileWebUrl: `https://rollingpaper.site/p/${name}?${pw}`,
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
      if (isEmpty(content) || isEmpty(author)) {
        setError("※글과 글쓴이를 모두 입력해주세요.");
        return;
      }
      await rollingService
        .postRolling({
          name: name,
          content: content,
          author: author,
          password: pw,
        })
        .then((res) => {
          alert("성공적으로 등록되었습니다.");
          setContent("");
          window.location.reload();
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
      <ReactFullpage
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <div className="paper-head">
                  <span>{name}님</span>
                </div>
                <div className="paper-head">
                  <span>에게 보내는</span>
                </div>
                <div className="paper-head">
                  <span>
                    <span style={{ color: "#f64c71" }}>롤링페이퍼</span>입니다.
                  </span>
                </div>

                <div className="content">
                  <span className="content-header">to {name}</span>
                  <div className="content-input-wrap">
                    <textarea
                      className="content-input"
                      rows="10"
                      placeholder={`여기에 ${name}님에게 남기고 싶으신 말을 편하게 작성해주시면 됩니다.`}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </div>
                </div>
                <div className="author">
                  <div className="author-input-wrap">
                    <input
                      type="text"
                      className="author-input"
                      placeholder="홍길동"
                      onChange={(e) => setAuthor(e.target.value)}
                    />
                  </div>
                  <span className="author-text">올림</span>
                </div>
                {!isEmpty(content) ? (
                  !isEmpty(author) ? (
                    <div className="preview-btn" onClick={() => onSubmit()}>
                      <span>제출하기</span>
                    </div>
                  ) : (
                    <div
                      style={{ backgroundColor: "#222222", color: "#fffeef" }}
                      className="preview-btn"
                    >
                      <span>※작성자도 입력해주세요!</span>
                    </div>
                  )
                ) : (
                  <div
                    style={{ backgroundColor: "#222222", color: "#fffeef" }}
                    className="preview-btn"
                  >
                    <span>제출하기</span>
                  </div>
                )}
                <div className="next-btn">
                  <span>▼</span>
                </div>
              </div>
              <div className="section">
                <a id="kakao-link-btn" className="share-btn">
                  <span>공유하기</span>
                </a>

                {/* <Link href="/">
        <span className="back-btn">돌아가기</span>
      </Link> */}

                <Link href={`/p/${name}?${pw}`}>
                  <div className="preview-btn">
                    <span>테스트하기</span>
                  </div>
                </Link>
                <a id="kakao-link-btn-giver" className="present-btn">
                  <span>주인공에게 공유</span>
                </a>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />

      {/* <h2>링크가 생성되었습니다. 친구들에게 공유하세요!</h2>

      <CopyToClipboard
        text={`https://rollingpaper.site/${encName}`}
        onCopy={() => setCopied(true)}
      >
        <span className="link">https://rollingpaper.site/{encName}</span>
      </CopyToClipboard> */}

      {/* {rollings.map((object) => {
        if (object.name === name) {
          return (
            <Paper key={object._id} name={name} content={object.content} />
          );
        }
      })} */}
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
