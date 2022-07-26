import React, { useEffect, useState } from "react";
import setContent from "../../utils/setContent";
import useMarvelService from "../../services/MarvelService";
import "./charInfo.scss";
import { NavLink } from "react-router-dom";

const CharInfo = (props) => {
  const [char, setChar] = useState(null);

  const { getCharacter, clearError, process, setProcess } = useMarvelService();

  useEffect(() => {
    updateChar();
  }, [props.charId]);

  const updateChar = () => {
    const { charId } = props;
    if (!charId) {
      return;
    }
    clearError();
    getCharacter(charId)
      .then(onCharLoaded)
      .then(() => setProcess("confirmed"));
  };

  const onCharLoaded = (char) => {
    setChar(char);
  };

  useEffect(() => {
    updateChar();
  }, [props.charId]);

  return <div className="char__info">{setContent(process, View, char)}</div>;
};

const View = ({ data }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = data;
  let style = false;

  function notImg(thumbnail) {
    if (thumbnail.includes("image_not_available")) {
      style = true;
      return style, thumbnail;
    }
    return thumbnail;
  }

  function checkDescription(description) {
    if (description !== "") {
      return description;
    } else {
      return (description = "There is no description yet.");
    }
  }

  return (
    <>
      <div className="char__basics">
        <img
          src={notImg(thumbnail)}
          alt={name}
          style={style ? { objectFit: "contain" } : { objectFit: "cover" }}
        />
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">HomePage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">{checkDescription(description)}</div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">
        {comics.length > 0 ? null : "Didn't have a comics."}
        {comics.map((item, i) => {
          if (i <= 9) {
            return (
              <li key={i} className="char__comics-item">
                <NavLink to={`/comics/${item.resourceURI.substring(43)}`}>
                  {item.name}
                </NavLink>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};

export default CharInfo;
