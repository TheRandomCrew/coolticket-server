import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  async componentDidMount() {
    const res = await axios.get("https://coolticket-server.herokuapp.com/api/v1/user");
    console.log(res);
  }

  render() {
    return (
      <div>
        <div className="container">
          <form>
            <div className="form-group col-md-6">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Name with more than 3 letters"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                type="text"
                name="email"
                placeholder="example@email.com"
              />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="typeuser">Type User</label>
                <select name="typeuser" className="form-control">
                    <option value="Admin">Admin</option>
                    <option value="Users">Users</option>
                </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
