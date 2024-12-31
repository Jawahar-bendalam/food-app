import React from "react";

class UserClass extends React.Component {
  //Whenever we are loading a classbased component means we are creatting an instance of the class
  //Whenever the instance is created constructor will be called...
  //Place for receiving props, creating state
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
  }

  //Will be called once the component is completely mounted on ot the web page...
  //Place for API calls
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/jawahar-bendalam");
    const jsonData = await data.json();
    this.setState({
      userInfo: jsonData,
    });
  }

  render() {
    // destructuring and using the variables
    // const { name, location } = this.props;
    const { login, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        {/* using props with destructuring */}
        <img src={avatar_url} height="100px" />
        <h1>{login}</h1>
        {/* <h2>{location}</h2> */}
      </div>
    );
  }
}

export default UserClass;
