import React, { useEffect, useRef, useState } from "react";
import cameraMan from "../../../assets/images/page4/camera man.png";
import persons from "../../../assets/images/page4/persons.png";
import karefin from "../../../assets/images/page3/Kerfin7_NEA_2526 2.png";
import CustomizedSwitches from "../../common/switchSpeaker/app";
import "./frame4.css";
import { useAppContext } from "../../context";

export const Frame4 = () => {
  const {
    setSlidertabColor,
    setSliderAnimation,
    setSliderShow,
    setFuggyColor,
    setFuggyRotate,
    setFuggyAnimation,
    setFuggyHide,
  } = useAppContext();
  const [radio, setRadio] = useState(false);
  const [startHover, setStartHover] = useState(false);
  const [hover, setHover] = useState(false);
  const [hoverOut, setHoverOut] = useState(false);
  const [textAnime, setTextAnime] = useState(false);

  const animeRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          setSliderAnimation("frame4Slider");
          setSliderShow(true);
          setSlidertabColor("#FFA616");
          setFuggyColor("#FFA616");
          setFuggyRotate(true);
          setFuggyHide(false);
          setFuggyAnimation("fuggyAnime4");
          setTimeout(() => {
            setStartHover(true);
          }, 3000);
        } else {
          setTimeout(() => {
            setAnimate(false);
            setHover(false);
            setHoverOut(false);
            setRadio(false);
            setStartHover(false);
            setTextAnime(false);
            // setSliderAnimation("");
          }, 500);
        }
      });
    });

    const elementsToAnimate = animeRef.current;
    observer.observe(elementsToAnimate);

    return () => {
      observer.unobserve(elementsToAnimate);
      setAnimate(false);
      setHover(false);
      setHoverOut(false);
      setRadio(false);
      setStartHover(false);
      setTextAnime(false);
    };
  }, []);

  const onChangeRadio = () => {
    setHoverOut(false);
    setRadio(!radio);
    setTextAnime(true);
    setFuggyColor(radio ? "#FFA616" : "#0093FF");
  };

  var lastScrollTop = 0;
  let scrollElement = document.getElementById("section4");

  // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  document.addEventListener(
    "scroll",
    function () {
      console.log("object");
      // or window.addEventListener("scroll"....
      var st = (window.scrollX = 100 || document.documentElement.scrollTop); // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      console.log(st);
      if (st > lastScrollTop) {
        // downscroll code
        console.log("down scrol");
      } else if (st < lastScrollTop) {
        // upscroll
        console.log("up scrol");
      } // else was horizontal scroll
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    },
    false
  );

  return (
    <div
      className="w-full bg-black h-screen relative overflow-hidden snap-start"
      style={{
        paddingTop: "1%",
        paddingBottom: "1%",
        paddingLeft: "0.5%",
        paddingRight: "0.5%",
      }}
      id="section4">
      {/* cut lines */}
      <div>
        {/* horizantal lines --- */}
        <div>
          <div
            className={`cut-line-horizontal ${
              animate ? "line-horizontal-1" : ""
            }`}
          />
          <div
            className={`cut-line-horizontal ${
              animate ? "line-horizontal-2" : ""
            }`}
          />
          <div
            className={`cut-line-horizontal ${
              animate ? "line-horizontal-3" : ""
            }`}
          />
          <div
            className={`cut-line-horizontal ${
              animate ? "line-horizontal-4" : ""
            }`}
          />
          <div
            className={`cut-line-horizontal ${
              animate ? "line-horizontal-5" : ""
            }`}
          />
        </div>
        {/* vertical line || */}
        <div>
          <div
            className={`${animate ? "cut-line-vertical line-vertical-1" : ""}`}
          />
          <div
            className={`${animate ? "cut-line-vertical line-vertical-2" : ""}`}
          />
          <div
            className={`${animate ? "cut-line-vertical line-vertical-3" : ""}`}
          />
          <div
            className={`${animate ? "cut-line-vertical line-vertical-4" : ""}`}
          />
          <div
            className={`${animate ? "cut-line-vertical line-vertical-5" : ""}`}
          />
        </div>
      </div>

      {/* hover box */}
      <div className="overflow-hidden">
        <div
          className={`image-section ${animate ? "box-1" : ""}  ${
            hover
              ? radio
                ? "hover-effect-blue-left "
                : "hover-effect-yellow-left "
              : ""
          } ${
            hoverOut && !hover
              ? radio
                ? "hover-effect-blue-left-back"
                : "hover-effect-yellow-left-back"
              : ""
          }`}
          onMouseEnter={() => {
            if (startHover) {
              setHover(true);
            }
          }}
          onMouseLeave={() => {
            if (startHover) {
              setHover(false);
              setHoverOut(true);
            }
          }}>
          <div className="text" />
        </div>
        <div className={`image-section ${animate ? "box-2" : ""}`} />
        <div className={`image-section ${animate ? "box-3" : ""}`} />
        <div
          className={`image-section ${animate ? "box-4" : ""} ${
            hover
              ? radio
                ? "hover-effect-blue-left "
                : "hover-effect-yellow-left "
              : ""
          } ${
            hoverOut && !hover
              ? radio
                ? "hover-effect-blue-left-back"
                : "hover-effect-yellow-left-back"
              : ""
          }`}
          onMouseEnter={() => {
            if (startHover) {
              setHover(true);
            }
          }}
          onMouseLeave={() => {
            if (startHover) {
              setHover(false);
              setHoverOut(true);
            }
          }}>
          <div className="text">{radio ? `Video Production` : "Podcasts"}</div>
        </div>
        <div className={`image-section ${animate ? "box-5" : ""}`} />
        <div
          className={`image-section ${animate ? "box-6" : ""} 
          ${
            hover
              ? radio
                ? "hover-effect-blue-bottom"
                : "hover-effect-yellow-bottom"
              : ""
          }  
          ${
            hoverOut && !hover
              ? radio
                ? "hover-effect-blue-bottom-back"
                : "hover-effect-yellow-bottom-back"
              : ""
          }`}
          onMouseEnter={() => {
            if (startHover) {
              setHover(true);
            }
          }}
          onMouseLeave={() => {
            if (startHover) {
              setHover(false);
              setHoverOut(true);
            }
          }}>
          <div className="text">
            {radio ? "Content Strategy" : "Mini Series"}
          </div>
        </div>
        <div className={`image-section ${animate ? "box-7" : ""}`} />
        <div
          className={`image-section ${animate ? "box-8" : ""} ${
            hover
              ? radio
                ? "hover-effect-blue-top"
                : "hover-effect-yellow-top"
              : ""
          } ${
            hoverOut && !hover
              ? radio
                ? "hover-effect-blue-top-back"
                : "hover-effect-yellow-top-back"
              : ""
          }`}
          onMouseEnter={() => {
            if (startHover) {
              setHover(true);
            }
          }}
          onMouseLeave={() => {
            if (startHover) {
              setHover(false);
              setHoverOut(true);
            }
          }}>
          <div className="text">
            {radio ? "Digital Marketing" : "Food Videos"}
          </div>
        </div>
        <div
          className={`image-section ${animate ? "box-9" : ""} ${
            hover
              ? radio
                ? "hover-effect-blue-right"
                : "hover-effect-yellow-right"
              : ""
          } ${
            hoverOut && !hover
              ? radio
                ? "hover-effect-blue-right-back"
                : "hover-effect-yellow-right-back"
              : ""
          }`}
          onMouseEnter={() => {
            if (startHover) {
              setHover(true);
            }
          }}
          onMouseLeave={() => {
            if (startHover) {
              setHover(false);
              setHoverOut(true);
            }
          }}>
          <div className="text">
            {radio
              ? "Performance & Collaboration"
              : " Travel & Lifestyle  Videos"}
          </div>
        </div>
        <div className={`image-section ${animate ? "box-10" : ""}`} />
        <div className={`image-section ${animate ? "box-11" : ""}`} />
        <div
          className={`image-section ${animate ? "box-12" : ""} ${
            hover
              ? radio
                ? "hover-effect-blue-top"
                : "hover-effect-yellow-top"
              : ""
          } ${
            hoverOut && !hover
              ? radio
                ? "hover-effect-blue-top-back"
                : "hover-effect-yellow-top-back"
              : ""
          }`}
          onMouseEnter={() => {
            if (startHover) {
              setHover(true);
            }
          }}
          onMouseLeave={() => {
            if (startHover) {
              setHover(false);
              setHoverOut(true);
            }
          }}>
          <div className="text">
            {radio ? "Public Relation Management" : " Reaction Videos"}
          </div>
        </div>
        <div
          className={`image-section ${animate ? "box-13" : ""} ${
            hover
              ? radio
                ? "hover-effect-blue-left"
                : "hover-effect-yellow-left"
              : ""
          } ${
            hoverOut && !hover
              ? radio
                ? "hover-effect-blue-left-back"
                : "hover-effect-yellow-left-back"
              : ""
          }`}
          onMouseEnter={() => {
            if (startHover) {
              setHover(true);
            }
          }}
          onMouseLeave={() => {
            if (startHover) {
              setHover(false);
              setHoverOut(true);
            }
          }}>
          <div className="text">
            {radio ? "Design Services" : "Music Videos"}
          </div>
        </div>
        <div className={`image-section ${animate ? "box-14" : ""}`} />
        <div
          className={`image-section ${animate ? "box-15" : ""} ${
            hover
              ? radio
                ? "hover-effect-blue-bottom"
                : "hover-effect-yellow-bottom"
              : ""
          } ${
            hoverOut && !hover
              ? radio
                ? "hover-effect-blue-bottom-back"
                : "hover-effect-yellow-bottom-back"
              : ""
          }`}
          onMouseEnter={() => {
            if (startHover) {
              setHover(true);
            }
          }}
          onMouseLeave={() => {
            if (startHover) {
              setHover(false);
              setHoverOut(true);
            }
          }}>
          <div className="text" />
        </div>
      </div>

      {/* image  */}
      <div className="w-full h-full " ref={animeRef}>
        <img
          src={radio ? persons : cameraMan}
          alt="camera man"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* switch & kerfin */}
      <div
        className={`${
          animate ? "switch-kerfin" : ""
        }  flex items-center flex-col w-fit`}>
        <div className={`-mb-1 ${animate ? "karfinAnime" : ""}`}>
          <img src={karefin} alt="karefin" />
        </div>
        <div className={`-ml-5 opacity-0 ${animate ? "switchAnime" : ""}`}>
          <CustomizedSwitches checked={radio} change={onChangeRadio} />
        </div>
      </div>

      {/* text */}
      <div
        style={{ bottom: "7%", left: "10%", position: "absolute", zIndex: 20 }}>
        <div className={`flex gap-5 ${animate ? "mini-fuggy" : ""}`}>
          <p
            style={{
              color: radio ? "#FFA616" : "#0093FF",
              fontFamily: "Feeling",
              fontSize: 24,
              textDecoration: "underline",
            }}>
            FuzzyBox
          </p>
          <p
            style={{
              color: radio ? "#0093FF" : "#FFA616",
              fontFamily: "Feeling",
              fontSize: 24,
            }}>
            as a
          </p>
        </div>
        <div key={radio ? "animated" : "non-animated"}>
          {radio ? (
            <p
              style={{
                color: "#ffffff",
                fontFamily: "Geometric",
                fontSize: 128,
              }}
              className={`${
                animate ? `text-anime-${textAnime ? "secound" : "first"}` : ""
              }`}>
              SERVICE
            </p>
          ) : (
            <p
              style={{
                color: "#ffffff",
                fontFamily: "Geometric",
                fontSize: 128,
              }}
              className={`${
                animate ? `text-anime-${textAnime ? "secound" : "first"}` : ""
              }`}>
              PRODUCT
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
