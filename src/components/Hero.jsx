import { FiArrowDownCircle } from "react-icons/fi";
import { content } from "../Contents";

const Hero = () => {
  const { hero } = content;
  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
          data-aos="slide-left"
          data-aos-delay="1200">
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {hero.firstName}
            <span>{hero.lastName}</span>
          </h1>
        </div>

        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-end">
            <button className="btn">
              <a
                href="./public/NguyenDinhHieu_CV.pdf"
                download="NguyenDinhHieu_CV.pdf"
                className="flex">
                <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100" />
                {hero.btnText}
              </a>
            </button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, index) => (
              <div
                key={index}
                data-aos="fade-down"
                data-aos-delay={index * 300}
                className={`flex items-center w-80 gap-5 ${
                  index === 1 && "flex-row-reverse text-right"
                }`}>
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="Image"
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;