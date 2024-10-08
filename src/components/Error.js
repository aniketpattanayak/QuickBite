import React from "react";
import { useRouteError } from "react-router-dom";
import "./Error.css";

function Error() {
  const error = useRouteError();
  return (
    <>
      <div id="body" className="main-content">
        <a
          className="er-a"
          href="https://codepen.io/uiswarup/full/vYPxywO"
          target="_blank"
        >
          <header class="top-header"></header>

          <div>
            <div class="starsec"></div>
            <div class="starthird"></div>
            <div class="starfourth"></div>
            <div class="starfifth"></div>
          </div>

          <div class="lamp__wrap">
            <div class="lamp">
              <div class="cable"></div>
              <div class="cover"></div>
              <div class="in-cover">
                <div class="bulb"></div>
              </div>
              <div class="light"></div>
            </div>
          </div>
          <section class="error">
            <div class="error__content">
              <div class="error__message message">
                <h1 class="message__title">Page Not Found</h1>
                <p class="message__text">
                  {error.status}: {error.data}
                </p>
              </div>
              <div class="error__nav e-nav">
                <a
                  className="er-a"
                  href="http://www.thedresscounter.com"
                  target="_blanck"
                  class="e-nav__link"
                ></a>
              </div>
            </div>
          </section>
        </a>
      </div>
    </>
  );
}

export default Error;
