import UserClass from "./UserClass";
import User from "./User";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl">About Us</h1>
      {/* Passing props to class and functional comps is same */}
      {/* <UserClass name={"Jawahar"} location={"Visakhapatnam"} /> */}
      <div className="flex justify-around items-center my-8">
        <div className="w-[45%]">
          <p className="text-gray-500 text-xl">
            Being among the first few entrants, Swiggy has successfully
            pioneered the hyperlocal commerce industry in India, launching Food
            Delivery in 2014 and Quick Commerce in 2020. Due to the pioneering
            status of Swiggy, it is well-recognised as a leader in innovation in
            hyperlocal commerce and as a brand synonymous with the categories it
            is present in.
          </p>
        </div>
        <div className="w-[45%] border-2 border-green-500 rounded-lg">
          <img
            src="https://www.swiggy.com/corporate/wp-content/uploads/2024/11/Group-1116602947-768x507.webp"
            alt="img"
          />
        </div>
      </div>
      <div className="flex w-full items-center">
        <div className="w-[25%] border-r-2 border-green-500 text-center">
          <h1 className="text-3xl font-bold text-green-600">3 Billion+</h1>
          <p className="text-gray-600">orders delivered</p>
        </div>
        <div className="w-[25%] border-r-2 border-green-500 text-center">
          <h1 className="text-3xl font-bold text-green-600">220k+</h1>
          <p className="text-gray-600">restaurant partners</p>
        </div>
        <div className="w-[25%] border-r-2 border-green-500 text-center">
          <h1 className="text-3xl font-bold text-green-600">520k+</h1>
          <p className="text-gray-600">delivery partners</p>
        </div>
        <div className="w-[25%] text-center">
          <h1 className="text-3xl font-bold text-green-600">680+</h1>
          <p className="text-gray-600">cities in India</p>
        </div>
      </div>
    </div>
  );
};

export default About;
