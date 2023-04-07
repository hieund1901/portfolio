import { useState } from "react";
import { content } from "../Contents";
import HireMeModal from "./HireMeModal";

const HireMe = () => {
  const { Hireme } = content;
  const [showModal, setShowModal] = useState(false);

  function showHireMeModal() {
    if (!showModal) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {HireMe.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {HireMe.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse">
          <img
            src={Hireme.image1}
            alt="Image"
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <img
            src={Hireme.image2}
            data-aos="fade-up"
            alt="Image"
            className="max-w-sm md:hidden"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-sm
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]">
            <p className="leading-7"> {Hireme.para}</p>
            <br />
            <button
              className="btn bg-dark_primary text-white"
              onClick={() => {
                setShowModal(true);
              }}>
              {Hireme.btnText}
            </button>
            <div>
              {showModal ? (
                <HireMeModal
                  onClose={showHireMeModal}
                  onRequest={showHireMeModal}
                />
              ) : null}
              {showModal ? showHireMeModal : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
