import React, { useEffect } from "react";
import Link from "next/link";
import Paper from "../components/Paper";
import "../styles/home.scss";
const Index = () => {
  useEffect(() => {
    // console.log(window.Kakao);
    // window.Kakao.init("28ff1d35692191420def0e22e9d6941b");
    // window.Kakao.Link.sendDefault({
    //   objectType: "feed",
    //   content: {
    //     title: "디저트 사진",
    //     description: "아메리카노, 빵, 케익",
    //     imageUrl:
    //       "http://mud-kage.kakao.co.kr/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
    //     link: {
    //       mobileWebUrl: "https://developers.kakao.com",
    //       androidExecParams: "test",
    //     },
    //   },
    //   social: {
    //     likeCount: 10,
    //     commentCount: 20,
    //     sharedCount: 30,
    //   },
    //   buttons: [
    //     {
    //       title: "웹으로 이동",
    //       link: {
    //         mobileWebUrl: "https://developers.kakao.com",
    //       },
    //     },
    //     {
    //       title: "앱으로 이동",
    //       link: {
    //         mobileWebUrl: "https://developers.kakao.com",
    //       },
    //     },
    //   ],
    //   success: function (response) {
    //     console.log(response);
    //   },
    //   fail: function (error) {
    //     console.log(error);
    //   },
    // });
    window.Kakao.Auth.createLoginButton({
      container: "#create-kakao-login-btn",
      success: function (authObj) {
        alert(JSON.stringify(authObj));
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  }, []);

  return (
    <div>
      <div className="layout">
        <div className="rolling"></div>
        <h1>롤링페이퍼</h1>

        <Link href="/start">
          <button>시작하기</button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
