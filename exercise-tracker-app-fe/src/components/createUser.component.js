import React from "react";

import axios from "axios";
class CreateUser extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ""
    };
  }


  onChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    };

    console.log(user);

    axios
      .post("http://localhost:8000/users/add", user)
      .then(res => console.log(res.data));

      this.setState({username:''});

  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>User Name:</label>
            <input
              type="text"
              required
              value={this.state.username}
              onChange={this.onChangeUsername}
            className="form-control"></input>
          </div>
          <div className="form-group">
        <input type="submit" value="Create User" className="btn btn-primary"></input>
          </div>
        </form>
      </div>
    );
  }
}
export default CreateUser;
