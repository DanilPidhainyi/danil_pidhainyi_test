import React, { useState} from "react";
import './App.css';
import '../media.css';
import {Imag} from "../Imag/Imag";
import {Header} from "../Header/Header";
import {FullImag} from "../Imag/FullImag";

function importAll(r) {
  let images = {};
  r.keys().map(item => images[item.replace('./', '')] = r(item) );
  return images;
}

function App() {

  const [images, setImages] = useState(importAll(require.context('../../task-2/', false, /\.(png|jpe?g|svg)$/)));
  const [isShowFull, setIsShowFull] = useState(false)

  const clickImg = event => {
    const el = document.getElementById('my-element');
    el.src = event.target.src
    setIsShowFull(true)
  }

  return (
      <div className={'App'}>
        <Header images={images}/>
        <aside className="content" onClick={clickImg}>
          {Array.isArray(Object.keys(images))
              ? Object.keys(images).map(element => {
                return <Imag
                    image={images[element]}
                    key={element}
                    className={'grid-item'}
                />;
              })
              : null}
        </aside>
        <FullImag id="my-element" isShow={isShowFull} setIsShow={setIsShowFull}/>
        <footer/>
      </div>
      );
    }


export default App;
