import UserClass from "./UserClass";
import User from "./User";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      {/* Passing props to class and functional comps is same */}
      <UserClass name={"Jawahar"} location={"Visakhapatnam"} />
    </div>
  );
};

export default About;
