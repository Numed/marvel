import { useEffect, useState } from "react";
import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import "./comicsList.scss";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ComicsList = () => {
  const [comics, setComics] = useState([]);
  const [offset, setOffset] = useState(210);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [comicsEnded, setComicsEnded] = useState(false);

  const { error, loading, getAllComics, clearError } = useMarvelService();

  useEffect(() => {
    onRequest(offset, true);
  }, []);

  const onRequest = (offset, initial) => {
    initial ? setNewItemLoading(false) : setNewItemLoading(true);
    clearError();
    getAllComics(offset).then(onComicsLoaded);
  };

  const onComicsLoaded = (newComics) => {
    let ended = false;
    if (newComics.length < 8) {
      ended = true;
    }
    setComics([...comics, ...newComics]);
    setOffset((offset) => offset + 8);
    setNewItemLoading(false);
    setComicsEnded(ended);
  };

  const View = (comics) => {
    const items = comics.map((comics, i) => {
      return (
        <CSSTransition
          key={comics.id}
          classNames={"comics__item"}
          timeout={300}
        >
          <li className="comics__item" key={i}>
            <Link to={`/comics/${comics.id}`}>
              <img
                src={comics.thumbnail}
                alt={comics.title}
                className="comics__item-img"
              />
              <div className="comics__item-name">{comics.title}</div>
              <div className="comics__item-price">{comics.price}</div>
            </Link>
          </li>
        </CSSTransition>
      );
    });
    return (
      <ul className="comics__grid">
        <TransitionGroup component={null}>{items}</TransitionGroup>
      </ul>
    );
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const items = View(comics);

  return (
    <div className="comics__list">
      {errorMessage}
      {spinner}
      {items}
      <button
        className="button button__main button__long"
        onClick={() => onRequest(offset)}
        disabled={newItemLoading}
        style={comicsEnded ? { display: "none" } : { display: "block" }}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default ComicsList;
