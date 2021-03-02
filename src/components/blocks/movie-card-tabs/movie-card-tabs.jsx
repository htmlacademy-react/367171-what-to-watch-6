import React, {useState} from "react";
import MovieCardNav from "./movie-card-nav/movie-card-nav";
import TabsItems from "../../constants/tabs";
import MovieCardRating from "../movie-card-rating/movie-card-rating";
import {ONE_HOUR} from "../../../../../cinemaddict-advanced-JS-12/src/const";

const getStringFromArray = (array, sign) => {
  return array.join(`${sign} `);
};

const getRuntimeInHours = (runtime) => {
  const hours = Math.floor(runtime / ONE_HOUR);
  const minutes = runtime % ONE_HOUR;

  return [hours, minutes];
};

const MovieCardTabContent = ({children, id, activeKey}) => {
  const style = activeKey !== id ? {display: `none`} : null;

  return (
    id === 1 ?
      <div id={id} style={style}>{children}</div> :
      <div id={id} className="movie-card__text movie-card__row" style={style}>{children}</div>
  );
};

const MovieCardTabs = ({activeKey, defaultActiveKey = 1, description, director, starring, scoresCount, rating, runTime, genre, released}) => {

  const [hours, minutes] = getRuntimeInHours(runTime);

  const [isActiveKey, setActiveKey] = useState(activeKey ? activeKey : defaultActiveKey);

  const onClick = (evt) => {
    evt.preventDefault();
    setActiveKey(Number(evt.target.id));
  };

  return (
    <div className="movie-card__desc">
      <MovieCardNav items={TabsItems} activeKey={isActiveKey} onClick={onClick}/>
      {/*<MovieCardTabContent description={description} director={director} starring={starring} scoresCount={scoresCount} rating={rating}/>*/}

      <MovieCardTabContent id={1} activeKey={isActiveKey}>
        <MovieCardRating rating={rating} scoresCount={scoresCount}/>
        <div className="movie-card__text">
          <p>{description}</p>

          <p className="movie-card__director"><strong>Director: {director}</strong></p>

          <p className="movie-card__starring"><strong>Starring: {getStringFromArray(starring, `,`)}</strong></p>
        </div>
      </MovieCardTabContent>

      <MovieCardTabContent id={2} activeKey={isActiveKey}>
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            {/*FIXME: вместо запятой должен быть тег <br/>*/}
            <span className="movie-card__details-value">{getStringFromArray(starring, `,`)}</span>
          </p>
        </div>
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{hours}h {minutes}m</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{released}</span>
          </p>
        </div>
      </MovieCardTabContent>
      <MovieCardTabContent id={3} activeKey={isActiveKey}>
        <div className="movie-card__reviews-col">
          <div className="review">
            <blockquote className="review__quote">
              <p className="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the glorious
                Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in
                years.</p>

              <footer className="review__details">
                <cite className="review__author">Kate Muir</cite>
                <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
              </footer>
            </blockquote>

            <div className="review__rating">8,9</div>
          </div>

          <div className="review">
            <blockquote className="review__quote">
              <p className="review__text">Anderson's films are too precious for some, but for those of us willing to
                lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he
                has added a hint of gravitas to the mix, improving the recipe.</p>

              <footer className="review__details">
                <cite className="review__author">Bill Goodykoontz</cite>
                <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
              </footer>
            </blockquote>

            <div className="review__rating">8,0</div>
          </div>

          <div className="review">
            <blockquote className="review__quote">
              <p className="review__text">I didn't find it amusing, and while I can appreciate the creativity, it's an
                hour and 40 minutes I wish I could take back.</p>

              <footer className="review__details">
                <cite className="review__author">Amanda Greever</cite>
                <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
              </footer>
            </blockquote>

            <div className="review__rating">8,0</div>
          </div>
        </div>
        <div className="movie-card__reviews-col">
          <div className="review">
            <blockquote className="review__quote">
              <p className="review__text">The mannered, madcap proceedings are often delightful, occasionally silly, and
                here and there, gruesome and/or heartbreaking.</p>

              <footer className="review__details">
                <cite className="review__author">Matthew Lickona</cite>
                <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
              </footer>
            </blockquote>

            <div className="review__rating">7,2</div>
          </div>

          <div className="review">
            <blockquote className="review__quote">
              <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the
                content is a little more adult.</p>

              <footer className="review__details">
                <cite className="review__author">Paula Fleri-Soler</cite>
                <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
              </footer>
            </blockquote>

            <div className="review__rating">7,6</div>
          </div>

          <div className="review">
            <blockquote className="review__quote">
              <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the
                content is a little more adult.</p>

              <footer className="review__details">
                <cite className="review__author">Paula Fleri-Soler</cite>
                <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
              </footer>
            </blockquote>

            <div className="review__rating">7,0</div>
          </div>
        </div>
      </MovieCardTabContent>
    </div>
  );
};

MovieCardTabs.propTypes = {...MovieCardTabContent.propTypes};

export default MovieCardTabs;
