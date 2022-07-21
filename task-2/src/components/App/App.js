import React, { useState } from "react";
import './App.css';
import '../media.css';
import {Imag} from "../Imag/Imag";
import {Header} from "../Header/Header";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

function App() {

  const [images, setImages] = useState(importAll(require.context('../../task-2/', false, /\.(png|jpe?g|svg)$/)));

  console.log(Object.keys(images)[0])
  return (
      <div className={'App'}>
        <Header images={images}/>

        <aside className="content">
          {Array.isArray(Object.keys(images))
              ? Object.keys(images)
                  .sort((a,b) => a.height - b.height)
                  .map(element => {
                return <Imag image={images[element]} key={element} className={'grid-item'}/>;
              })
              : null}
        </aside>

        <footer/>
      </div>
      );
    }


export default App;
