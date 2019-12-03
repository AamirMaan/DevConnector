import React, { Component } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import PropTypes from "prop-types";

import { deleteEducation } from "../../actions/profileActions";

class Education extends Component {
  onDeleteClick(id) {
    this.props.deleteEducation(id);
  }
  render() {
    const Education = this.props.education.map(edu => (
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td>{edu.degree}</td>
        <td>
          <Moment format="DD/MM/YYYY">{edu.from}</Moment> -{" "}
          {edu.current === true || edu.to === null ? (
            "Currently Studying"
          ) : (
            <Moment format="DD/MM/YYYY">{edu.to}</Moment>
          )}
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={this.onDeleteClick.bind(this, edu._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div className="">
        <h4 className="mb-2">Education Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th>School</th>
              <th>Degree</th>
              <th>Years</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{Education}</tbody>
        </table>
      </div>
    );
  }
}
Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired
};

export default connect(null, { deleteEducation })(Education);
