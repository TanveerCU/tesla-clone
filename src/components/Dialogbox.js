import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { useSelector } from "react-redux";

function Dialogbox({ data, scroll, height }) {
  const toggleData = useSelector((state) => state.blurState.state);
  console.log(toggleData);

  return (
    <>
      {toggleData ? (
        <>
          {(scroll > 72 && scroll < 248) ||
          (scroll > height * 1 + 72 && scroll < height * 1 + 248) ||
          (scroll > height * 2 + 72 && scroll < height * 2 + 248) ||
          (scroll > height * 3 + 72 && scroll < height * 3 + 248) ||
          (scroll > height * 4 + 72 && scroll < height * 4 + 248) ||
          (scroll > height * 5 + 72 && scroll < height * 5 + 248) ||
          (scroll > height * 6 + 72 && scroll < height * 6 + 248) ? (
            ""
          ) : (
            <Fade bottom>
              <div className="transition duration-900 ease-in flex flex-col justify-center items-center  absolute w-screen mt-32">
                <p className="text-4xl font-semibold pb-3">{data.title}</p>
                <a
                  className="text-md "
                  href="https://tailwindcss.com/docs/transition-timing-function"
                >
                  {data.description}
                </a>
              </div>
            </Fade>
          )}

          {(scroll + 72 > height * 0.72 && scroll + 72 < height) ||
          (scroll + 72 > height * 2 * 0.88 && scroll + 72 < height * 2) ||
          (scroll + 72 > height * 3 * 0.9 && scroll + 72 < height * 3) ||
          (scroll + 72 > height * 4 * 0.93 && scroll + 72 < height * 4) ||
          (scroll + 72 > height * 5 * 0.95 && scroll + 72 < height * 5) ||
          (scroll + 72 > height * 6 && scroll + 72 < height * 6) ? (
            " "
          ) : (
            <>
              {data.title !== "Accessories" ? (
                <Fade bottom>
                  <div
                    style={{ marginTop: `${height * 0.75}px` }}
                    className=" z-0 absolute flex flex-col justify-center items-center w-screen space-y-7 "
                  >
                    <div className="z-0 flex justify-center items-center space-x-7 flex-wrap space-y-2">
                      <p className="z-0 text-sm text-white bg-black rounded-3xl py-2 px-16 cursor-pointer opacity-70">
                        CUSTOM ORDER
                      </p>
                      <p className="z-0 text-sm bg-white rounded-3xl py-2 px-11 cursor-pointer opacity-70">
                        EXISTING INVENTORY
                      </p>
                    </div>
                    <DownArrow src="down-arrow.svg" />
                  </div>
                </Fade>
              ) : (
                <Fade bottom>
                  <div
                    style={{ marginTop: `${height * 0.75}px` }}
                    className="z-0 absolute flex flex-col justify-center items-center w-screen space-y-7 "
                  >
                    <div className="z-0 flex justify-center items-center space-x-7">
                      <p className="z-0 text-sm text-white bg-black rounded-3xl py-2 px-16 cursor-pointer opacity-70">
                        SHOP NOW
                      </p>
                    </div>
                    <DownArrow src="down-arrow.svg" />
                  </div>
                </Fade>
              )}
            </>
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
}
const DownArrow = styled.img`
  z-index: 0;
  height: 3rem;
  filter: invert(1);
  animation: animateDown infinite 1.5s;
`;

export default Dialogbox;
