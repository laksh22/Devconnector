import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import PostsForm from "./PostForm";
import Spinner from "../common/Spinner";

class Posts extends Component {
  render() {
    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <PostsForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
