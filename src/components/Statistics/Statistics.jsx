import HeroImage from "../../assets/images/user.png"
import CategoryList from "../CategoryList/CategoryList";

const Statistics = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-linear1Lighter to-linear2Lighter pt-36">
        <div className="w-10/12 mx-auto flex flex-col md:flex-row md:justify-between items-center">
          <div className="md:w-1/3 space-y-7">
            <h1 className="font-black text-primary text-7xl leading-tight">
              One Step Closer To Your
              <br />
              <span className="bg-gradient-to-r from-linear1 to-linear2 text-transparent bg-clip-text">
                Dream Job
              </span>
            </h1>
            <p className="text-secondary md:text-lg">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="text-white text-lg font-extrabold px-7 py-5 rounded-lg bg-gradient-to-r from-linear1 to-linear2">
              Get Started
            </button>
          </div>
          <img src={HeroImage} alt="professional-img" />
        </div>
      </div>
      <CategoryList></CategoryList>
    </div>
  );
};

export default Statistics;
