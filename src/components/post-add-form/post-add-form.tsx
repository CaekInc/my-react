import React, { Component } from "react";

export default class PostAddForm extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      text: "",
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onValueChange(e: any) {
    this.setState({
      text: e.target.value,
    });
  }

  onSubmit(e: Event) {
    e.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({
      text: '',
    })
  }

  render() {
    return (
      <form className="flex py-2" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="flex-grow p-5 rounded border"
          onChange={this.onValueChange}
          placeholder="о чем?"
          value={this.state.text}
        />
        <button
          type="submit"
          className="p-5 border rounded"
        >
          Добавить
        </button>
      </form>
    );
  }
}
