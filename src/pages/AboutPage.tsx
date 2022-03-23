import React from 'react';
import myimg from '../assets/img/haido.jpg'

const AboutPage = () => {
  return (
    <div className="home">
      <div className="info">
        <div className="avt">
          <img src={myimg} alt="haido" />
        </div>
        <div className="text">
          <p className="text__animation text__row">Welcome...</p>
          <p className="text__row">
            Hi, I'm <span className="hightlight">Hai</span>.
          </p>
          <p className="text__row">
            I am <span className="hightlight">21</span> years old.
          </p>
          <p className="text__row">
            I was born in <span className="hightlight">Y Yen, Nam Dinh</span>.
          </p>
          <p className="text__row">
            I'm a final year student at the{' '}
            <span className="hightlight">
              University Of Transport And Communication
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
