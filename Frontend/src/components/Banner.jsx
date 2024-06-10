import banner from "../../public/banner.jpg"


function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full md:w-1/2 md:mt-32 sm:mt-12 md:order-1 order-2">

          
          {/* content */}

          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, Welcome to{" "}
              <span className="text-blue-500">VidyaStore</span> to learn{" "}
              <span className="text-blue-500">new everyday !!! </span>
            </h1>
            <p className="text-xl text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              quibusdam, laboriosam porro recusandae, laudantium alias aliquid
              nam sapiente laborum eaque voluptatibus, sunt ut repudiandae id
              consectetur quia? Debitis, dolorem corporis.
            </p>


         {/* Email input */}

         <label className="input input-bordered flex items-center gap-2 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
          <input type="text" className="grow" placeholder="Enter your Email here..." />
          </label> 

          </div>

          {/* Button */}
          <button className="btn bg-blue-500 text-white mt-6">Submit</button>

         
         

        </div>
        <div className="w-full md:w-1/2 order-1">
        <img src={banner} className="w-54 h-54" alt="banner img"/>
        
        </div>
      </div>
    </>
  );
}

export default Banner;
