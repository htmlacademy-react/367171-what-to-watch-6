import React, {useState, useRef} from "react";
import classnames from "classnames";
import TabsItems from "../../constants/tabs";
import MovieCardRating from "../../blocks/movie-card-rating/movie-card-rating";

const MovieCardNavItem = ({activeKey, id, title, onClick}) => {
  return (
    <li className={classnames(`movie-nav__item`, {[`movie-nav__item--active`]: activeKey === id})}>
      <a id={id} href="#" className="movie-nav__link" onClick={onClick}>{title}</a>
    </li>
  );
};

export const MovieCardNav = ({items, activeKey, defaultActiveKey = 1, onClick})=> {

  const isActiveKey = activeKey ? activeKey : defaultActiveKey;

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {items.map(({id, name}) => <MovieCardNavItem activeKey={isActiveKey} key={id} id={id} title={name} onClick={onClick}/>)}
      </ul>
    </nav>
  );
};

const MovieCardTabContent = ({children, id, activeKey}) => {

  const style = activeKey !== id ? {display: `none`} : null;

  return (
    id === 1 ?
      <div id={id} style={style}>{children}</div> :
      <div id={id} className="movie-card__text movie-card__row" style={style}>{children}</div>
  );

};

const Tabs = ({activeKey, defaultActiveKey = 1}) => {
  const [isActiveKey, setActiveKey] = useState(activeKey ? activeKey : defaultActiveKey);

  const onClick = (evt) => {
    evt.preventDefault();
    setActiveKey(Number(evt.target.id));
  };

  return (
    <>
      <MovieCardNav items={TabsItems} activeKey={isActiveKey} onClick={onClick}/>

      <MovieCardTabContent id={1} activeKey={isActiveKey}>
        <MovieCardRating rating={10} scoresCount={10}/>

        <div className="movie-card__text">
          <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave
            H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>

          <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the
            sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave
            finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

          <p className="movie-card__director"><strong>Director: Wes Andreson</strong></p>

          <p className="movie-card__starring"><strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and
            other</strong></p>
        </div>
      </MovieCardTabContent>
      <MovieCardTabContent id={2} activeKey={isActiveKey}>
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">Wes Andreson</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">Bill Murray, Edward Norton, <br/>Jude Law, <br/>Willem Dafoe, <br/>Saoirse Ronan, <br/>Tony Revoloru, <br/>Tilda Swinton, <br/>Tom Wilkinson, <br/>Owen Wilkinson, <br/>Adrien Brody, <br/>Ralph Fiennes, <br/>Jeff Goldblum<br/> </span>
          </p>
        </div>
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">1h 39m</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">Comedy</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">2014</span>
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
    </>
  );
};

export default Tabs;
