/* eslint react-hooks/exhaustive-deps: off */

import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  //num：変数, setNum：関数 自由に命名できるがsetをつける。0は初期値
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFrag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFrag(!faceShowFlag);
  };

  //最初の1回のみ通したいとき空の配列を渡す
  //配列に入れたもののみに関心を持つ。numが変化した時のみ処理が走る
  //useEffectで使う変数は配列に入れておかないとエラーはでる。
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFrag(true);
      } else {
        faceShowFlag && setFaceShowFrag(false);
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    //return内は1つのタグで囲む。空の括弧でもよい
    //波括弧で囲んだ箇所がJSと認識される
    //style={{ }} 内側の{}はオブジェクト
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">お元気です</ColorfulMessage>
      {/* <ColorfulMessage color="pink" message="お元気です" /> */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^^)</p>}
    </React.Fragment>
  );
};

export default App;
