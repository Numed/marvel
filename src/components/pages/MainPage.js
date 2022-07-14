import { useState } from "react";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import decoration from "../../resources/img/vision.png";
import SearchChar from "../searchChar/SearchChar";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { Helmet } from "react-helmet";

const MainPage = () => {
  const [state, setState] = useState({
    selectedChar: null,
  });

  const onCharSelected = (id) => {
    setState({
      selectedChar: id,
    });
  };

  return (
    <>
      <Helmet>
        <meta name="description" content="Marvel information portal" />
        <title>Marvel information portal</title>
      </Helmet>
      <ErrorBoundary>
        <RandomChar />
      </ErrorBoundary>
      <div className="char__content">
        <ErrorBoundary>
          <CharList onCharSelected={onCharSelected} />
        </ErrorBoundary>
        <div>
          <ErrorBoundary>
            <CharInfo charId={state.selectedChar} />
          </ErrorBoundary>
          <ErrorBoundary>
            <SearchChar />
          </ErrorBoundary>
        </div>
      </div>
      <img className="bg-decoration" src={decoration} alt="vision" />
    </>
  );
};

export default MainPage;
