import React, { Component } from "react";
import axios from "axios";

class UpdateForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      url: "",
      description: "",
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  componentDidMount() {
    console.log("edited");
    this.setState({
      name: this.props.bookmark.name,
      url: this.props.bookmark.url,
      description: this.props.description
    });
  }

  handleOnChange(event) {
    const { key, value } = event.target;
    this.setState({
      [key]: value
    });
  }

  async handleEditSubmit(event) {
    try {
      event.preventDefault();
      const bookmarkID = this.props.bookmark._id;
      const url = `http://localhost:3003/bookmarks/${bookmarkID}`;
      const payload = {
        name: this.state.name,
        url: this.state.url,
        description: this.state.url
      };
      const updatedBookmark = await axios.put(url, payload);
      this.props.getBookmarks();
      this.setState({
        title: "",
        url: ""
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <p>
        <form onSubmit={this.handleEditSubmit}>
        <div className="row">
          <label htmlFor="name">Title</label>
          <input type="text" id="name" name="title" value={ this.state.title } onChange={ this.handleOnChange }/>
          <label htmlFor="url">URL</label>
          <input type="text" id="url" name="url" value={ this.state.url } onChange={ this.handleOnChange } />
          <label htmlFor="description">Description</label>
          <textarea className="u-full-width" id="description" name="description" value={ this.state.description } />
          <input type="submit" value="Update Bookmark" />
        </div>
      </form>
      </p>

    );
  }
}

export default UpdateForm;
