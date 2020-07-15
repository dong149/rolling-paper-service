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
          title: "웹으로 이동",
          link: {
            webUrl: `https://rollingpaper.site/${name}`,
            mobileWebUrl: `https://rollingpaper.site/${name}`,
          },
        },
        {
          title: "앱으로 이동",
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
      <h1>{name} 님에게 보내는 롤링페이퍼입니다.</h1>
      <h2>생일 축하해요!</h2>

      <CopyToClipboard
        text={`https://rolling-paper-service.vercel.app/${encName}`}
        onCopy={() => setCopied(true)}
      >
        <h3>https://rolling-paper-service.vercel.app/{encName}</h3>
      </CopyToClipboard>
      <a id="kakao-link-btn">
        <button>공유</button>
      </a>
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
      <Link href="/">
        <button>주인공에게 공유하기</button>
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

Giver.getInitialProps = async () => {
  const res = await rollingService.getRolling();
  return {
    rollings: res,
  };
};

export default Giver;
