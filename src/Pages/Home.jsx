import React from "react";

const Home = () => {
  return (
    <section>
      {" "}
      <section className="flex flex-col justify-center items-center gap-4 bg-[#122315] py-12 w-full px-4">
        {/* Heading */}
        <h1 className="text-[#E3DEB3] uppercase text-7xl md:text-9xl font-bold font-Deacon text-center leading-tight">
          Financing <br className="hidden md:block" />
          <span className="text-[#77E46E]">The Future</span>
        </h1>

        {/* Button */}
        <button className="w-full max-w-xs md:max-w-sm px-6 py-3 uppercase rounded-md bg-[#77E46E] text-[#122315] hover:bg-[#E3DEB3] hover:text-[#122315] transition-colors duration-200 font-semibold shadow text-lg md:text-xl">
          Get Funding
        </button>

        {/* Description */}
        <p className="text-[#E3DEB3] text-center max-w-2xl text-lg md:text-xl px-4">
          Pay suppliers faster and extend your runway — with AI that analyses
          your financials in real time to unlock smarter funding.
        </p>

        {/* Full-width Image */}
        <div className="w-screen relative left-1/2 -translate-x-1/2 px-4">
          <img
            className="object-cover w-full h-72 md:h-[32rem] rounded-xl shadow-lg"
            src="https://cdn.prod.website-files.com/635273ea37c256ef2835d522/654a36b6f78e92b5209148af_Kikin_Illustrations_Scene_01_RGB%202.svg"
            alt="Financing the Future Illustration"
          />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-4 bg-[#F3EDE4] py-12 w-full px-4 relative overflow-hidden">
        {/* Corner Badges */}
        <img
          src="https://cdn.prod.website-files.com/635273ea37c256ef2835d522/6527ca0f4fea32f3c89a031d_change%20the%20world.svg"
          alt="Change the World"
          className="absolute top-4 left-4 w-32 h-32 md:w-40 md:h-40"
        />
        <img
          src="https://cdn.prod.website-files.com/635273ea37c256ef2835d522/6527ca0f2546312f94afb400_borrow%20wisely.svg"
          alt="Borrow Wisely"
          className="absolute top-4 right-4 w-32 h-32 md:w-40 md:h-40"
        />
        <img
          src="https://cdn.prod.website-files.com/635273ea37c256ef2835d522/65437bfd31c9aad0c299a643_put%20planet%20first.svg"
          alt="Put Planet First"
          className="absolute bottom-4 left-4 w-32 h-32 md:w-40 md:h-40"
        />
        <img
          src="https://cdn.prod.website-files.com/635273ea37c256ef2835d522/65437bfd31c9aad0c299a643_put%20planet%20first.svg"
          alt="Make Business Do Good"
          className="absolute bottom-4 right-5 w-32 h-32 md:w-40 md:h-40"
        />
        {/* Heading */}
        <h1 className="text-[#122315] uppercase text-7xl md:text-9xl font-bold font-Deacon text-center leading-tightest">
          Good for the <br className="hidden md:block" />
          planet.And
          <br />
          Your Buisness
        </h1>
        <p className="text-[#122315] text-center max-w-2xl text-lg md:text-xl px-4">
          We are on a mission to help good businesses grow. This is why we
          reward sustainable businesses with lower fees, freeing up even more of
          your cash. Get started and access funding in 5 minutes.
        </p>
        {/* Button */}
        <button className="w-full max-w-xs md:max-w-sm px-6 py-3 uppercase rounded-md bg-[#77E46E] text-[#122315] hover:bg-[#E3DEB3] hover:text-[#122315] transition-colors duration-200 font-semibold shadow text-lg md:text-xl">
          Get Funding
        </button>

        {/* Description */}
        {/* Full-width Image */}
      </section>
      <section className="bg-[#F3EDE4] w-full flex flex-col items-center py-16 px-4">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-0">
          {/* Left Side */}
          <div className="flex-1 flex flex-col items-start justify-center md:pr-12">
            <div className="mb-6">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#77E46E] text-[#122315] font-bold text-xl">
                01
              </span>
            </div>
            <h2 className="text-[#122315] text-5xl md:text-6xl font-bold leading-tight mb-6">
              GROW WITH
              <br />
              THE FLOW.
            </h2>
            <p className="text-[#122315] text-lg md:text-xl mb-4">
              We help you preserve your cash, so that you can focus on growing
              your business and improve cash flow.
            </p>
          </div>
          {/* Right Side */}
          <div className="flex-1 flex justify-center items-center">
          image.png
          </div>
        </div>
      </section>
      <section>cbvf
        <div></div>
      </section>
    </section>
  );
};

export default Home;
