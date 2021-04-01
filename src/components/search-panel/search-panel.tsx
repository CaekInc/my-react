import React, { Component } from "react";

export default class SearchPanel extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      term: "",
    };
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
  }

  onUpdateSearch(e: any) {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
  }

  render() {
    return (
      <input
        className="p-2 w-full rounded bg-dark"
        type="text"
        placeholder="Поиск по записям"
        onChange={this.onUpdateSearch}
      />
    );
  }
}
