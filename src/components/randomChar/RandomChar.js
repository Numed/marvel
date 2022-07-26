import React, { useState, useEffect } from "react";
import "./randomChar.scss";
import useMarvelService from "../../services/MarvelService";
import mjolnir from "../../resources/img/mjolnir.png";
import setContent from "../../utils/setContent";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const RandomChar = () => {
  const [char, setChar] = useState(null);
  const { loading, error, getCharacter, clearError, process, setProcess } =
    useMarvelService();

  useEffect(() => {
    clearError();
    updateChar();
  }, []);

  const onCharLoaded = (char) => {
    setChar(char);
  };

  const updateChar = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000)) + 1011000;
    clearError();
    getCharacter(id)
      .then(onCharLoaded)
      .then(() => setProcess("confirmed"));
  };

  return (
    <div className="randomchar">
      {setContent(process, View, char)}
      <div className="randomchar__static">
        <p className="randomchar__title">
          Random character for today!
          <br />
          Do you want to get to know him better?
        </p>
        <p className="randomchar__title">Or choose another one</p>
        <button onClick={updateChar} className="button button__main">
          <div className="inner">try it</div>
        </button>
        <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
      </div>
    </div>
  );
};

const View = ({ data }) => {
  const { name, description, thumbnail, homepage, wiki } = data;
  const onEmptyDescription = (desc) => {
    if (desc !== "") {
      return desc;
    } else {
      return (desc = "No description yet.");
    }
  };

  let style = false;

  const notImg = (thumbnail) => {
    if (thumbnail.includes("image_not_available")) {
      style = true;
      return style, thumbnail;
    }
    return thumbnail;
  };

  return (
    <TransitionGroup component={null}>
      <CSSTransition classNames="randomchar__block" timeout={500}>
        <div className="randomchar__block">
          <img
            src={notImg(thumbnail)}
            alt="Random character"
            className="randomchar__img"
            style={style ? { objectFit: "contain" } : { objectFit: "cover" }}
          />
          <div className="randomchar__info">
            <p className="randomchar__name">{name}</p>
            <p className="randomchar__descr">
              {onEmptyDescription(description)}
            </p>
            <div className="randomchar__btns">
              <a href={homepage} className="button button__main">
                <div className="inner">homepage</div>
              </a>
              <a href={wiki} className="button button__secondary">
                <div className="inner">Wiki</div>
              </a>
            </div>
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default RandomChar;
