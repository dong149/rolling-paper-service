import React, { useState, useEffect } from "react";
import Link from "next/link";
import { isEmpty } from "../functions";
import Paper from "../components/Paper";
import Head from "next/head";
import "../styles/papers.scss";
import rollingService from "../services/rollingService";
import AutosizeInput from "react-input-autosize";
const Start = (props) => {
  const { fullpageApi } = props;
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // const [password1, setPassword1] = useState("");
  // const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  // useEffect(() => {
  //   if (!window.Kakao.isInitialized()) {
  //     window.Kakao.init("28ff1d35692191420def0e22e9d6941b");
  //   }
  // }, []);

  const onSubmit = async () => {
    let temp = {};
    try {
      // if (isEmpty(content)) {
      //   setError("※글과 글쓴이를 모두 입력해주세요.");
      //   return;
      // }
      await rollingService
        .getRollingByName(name, password)
        .then(async (res) => {
          console.log(res);
          if (!isEmpty(res)) {
            alert("이미 생성된 롤링페이퍼입니다.");
            return;
          }
          await rollingService
            .postRolling({
              name: name,
              content: "생일 축하드립니다.",
              color: "#f64c71",
              password: password,
            })
            .then((res) => {
              alert("성공적으로 등록되었습니다.");
              setContent("");
              // window.location.reload();
            });
        });
    } catch (err) {
      console.log(err);
      return;
    }
  };
  return (
    <>
      <Head>
        <title>롤링 페이퍼</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 ,user-scalable=no, maximum-scale=1"
        />
        <meta name="description" content="롤링 페이퍼 쉽게 만들기" />
        <meta
          name="keywords"
          content="롤링페이퍼,선물,생일,여자친구,100일,친구"
        />
      </Head>
      {/* 이벤트 종류 선택하기 */}
      {/* <div className="section">
        <div className="layout">
          <img className="question-logo" src="/q.jpeg" alt="질문" />
          <div className="question">
            <span className="question-text">어떤</span>
          </div>
          <div className="question">
            <span className="question-text">이벤트를 준비하세요?</span>
          </div>
          <div className="question-info">
            <span>※필수입니다.</span>
          </div>
          <div className="event-select">
            <select name="job">
              <option value="">선택해주세요</option>
              <option value="생일">생일</option>
              <option value="기념일">기념일</option>
              <option value="기타">기타</option>
            </select>
          </div>
          {!isEmpty(name) ? (
            <Link href={`/[papers]`} as={`/${name}?${password1}`}>
              <div className="create-btn" name={name}>
                <span>다음</span>
              </div>
            </Link>
          ) : (
            // <button onClick={moveRoute}>시작하기</button>

            <div className="inactive-create-btn" name={name}>
              <span>작성해주세요</span>
            </div>
          )}
        </div>
      </div> */}

      <div className="section">
        <div className="layout">
          <div className="question-text">
            받을 사람은
            <br />
            <AutosizeInput
              inputStyle={{
                border: 0,
                fontSize: 35,
                outline: "none",
                display: "inline-block",

                fontWeight: "lighter",
              }}
              style={{
                borderBottom: "1px solid #333",
                display: "inline-block",
              }}
              maxLength="10"
              value={name}
              placeholder="이름 혹은 애칭"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            이고
            <br />
            우리 롤페 암호는
            <br />
            <AutosizeInput
              inputStyle={{
                border: 0,
                fontSize: "35px",
                outline: "none",
                display: "inline-block",

                fontWeight: "lighter",
              }}
              style={{
                borderBottom: "1px solid #333",
                // color: "#D5D5D5",
                display: "inline-block",
              }}
              maxLength="10"
              value={password}
              placeholder="비밀번호"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            에요!
          </div>
          {!isEmpty(name) && !isEmpty(password) ? (
            <div
              className="create-btn"
              onClick={() => {
                onSubmit();
              }}
            >
              <span>롤링페이퍼 생성하기</span>
            </div>
          ) : (
            // <button onClick={moveRoute}>시작하기</button>

            <div className="inactive-create-btn" name={name}>
              <span>모두 작성해주세요</span>
            </div>
          )}
        </div>
      </div>
      <div className="section">
        <div className="layout">
          <div className="inactive-create-btn" name={name}>
            <span>모두 작성해주세요</span>
          </div>
        </div>
      </div>
      {/* <div className="section">
        <div className="layout">
          <img className="question-logo" src="/q.jpeg" alt="질문" />
          <div className="question">
            <span className="question-text">주인공의</span>
          </div>
          <div className="question">
            <span className="question-text">성함 혹은 애칭?</span>
          </div>
          <div className="name-input-wrap">
            <input
              className="name-input"
              type="text"
              placeholder="입력해주세요 (최대12자)"
              maxLength="12"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {!isEmpty(name) ? (
            <div
              className="create-btn"
              onClick={() => fullpageApi.moveSectionDown()}
            >
              <span>다음</span>
            </div>
          ) : (
            // <button onClick={moveRoute}>시작하기</button>

            <div className="inactive-create-btn" name={name}>
              <span>작성해주세요</span>
            </div>
          )}
        </div>
      </div> */}

      {/* <div className="section">
        <div className="layout">
          <img className="question-logo" src="/q.jpeg" alt="질문" />
          <div className="question">
            <span className="question-text">비밀번호를</span>
          </div>
          <div className="question">
            <span className="question-text">입력해주세요.</span>
          </div>
          <div className="question-info">
            <span>※동명이인을 가리기 위함이니,</span>
          </div>
          <div className="question-info">
            <span>어렵게 작성하시고 꼭 기억해주세요!</span>
          </div>
          <div className="name-input-wrap">
            <input
              className="name-input"
              type="password"
              placeholder="입력해주세요 (최대12자)"
              maxLength="12"
              onChange={(e) => setPassword1(e.target.value)}
            />
          </div>
          <div className="name-input-wrap">
            <input
              className="name-input"
              type="password"
              placeholder="한번 더 입력해주세요"
              maxLength="12"
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
          {!isEmpty(name) && !isEmpty(password1) && !isEmpty(password2) ? (
            <>
              {password1 !== password2 ? (
                <div className="inactive-create-btn" name={name}>
                  <span>※위 아래를 같게 해주세요</span>
                </div>
              ) : (
                <>
                  <div
                    className="create-btn"
                    onClick={() => {
                      onSubmit();
                    }}
                  >
                    <span>생성하기</span>
                  </div>
                  <Link href={`/[papers]`} as={`/${name}?${password1}`}>
                    <div className="create-btn" name={name}>
                      <span>이동하기</span>
                    </div>
                  </Link>
                </>
              )}
            </>
          ) : (
            // <button onClick={moveRoute}>시작하기</button>

            <div className="inactive-create-btn" name={name}>
              <span>작성해주세요</span>
            </div>
          )}
        </div>
      </div> */}
    </>
  );
};

export default Start;
