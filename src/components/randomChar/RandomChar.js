import React, { useState, useEffect } from "react";
import "./randomChar.scss";
import MarvelService from "../../services/MarvelService";
import mjolnir from "../../resources/img/mjolnir.png";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import "../spinner/spinner.scss";

const RandomChar = () => {
  const marvelService = new MarvelService();

  const [value, setValue] = useState({
    char: {},
    loading: true,
    error: false,
  });

  const onCharLoading = () => {
    setValue({ loading: true });
  };

  const onCharLoaded = (char) => {
    setValue({ char, loading: false });
  };

  const onError = () => {
    setValue({
      loading: false,
      error: true,
    });
  };

  function updateChar() {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    onCharLoading();
    marvelService.getCharacter(id).then(onCharLoaded).catch(onError);
  }

  useEffect(() => {
    updateChar();
  }, []);

  const { char, loading, error } = value;
  const erorrMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error) ? <View char={char} /> : null;

  return (
    <div className="randomchar">
      {erorrMessage}
      {spinner}
      {content}
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

const View = ({ char }) => {
  function onEmptyDescription(desc) {
    if (desc !== "") {
      return desc;
    } else {
      return (desc = "No description yet.");
    }
  }

  let style = false;

  function notImg(thumbnail) {
    if (thumbnail.includes("image_not_available")) {
      style = true;
      return style, thumbnail;
    }
    return thumbnail;
  }

  const { name, description, thumbnail, homepage, wiki } = char;

  return (
    <div className="randomchar__block">
      <img
        src={notImg(thumbnail)}
        alt="Random character"
        className="randomchar__img"
        style={style ? { objectFit: "contain" } : { objectFit: "cover" }}
      />
      <div className="randomchar__info">
        <p className="randomchar__name">{name}</p>
        <p className="randomchar__descr">{onEmptyDescription(description)}</p>
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
  );
};

export default RandomChar;
