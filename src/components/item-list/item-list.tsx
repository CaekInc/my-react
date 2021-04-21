import React, { Component } from "react";
import GotService from "../../services";
import Spinner from "../spinner/spinner";
import { Characters } from "../../interfaces/index";

export default class ItemList extends Component {
  gotService = new GotService();

  state = {
    charList: null,
  };

  renderItems(arr: []) {
    return arr.map((item: Characters, i) => {
      return (
        <li className="p-4" key={i}>
          {item.name}
        </li>
      );
    });
  }

  componentDidMount() {
    this.gotService.getAllCharacters().then((charList) => {
      this.setState({
        charList
      });
    });
  }
  render() {
    const { charlist }: any = this.state;

    if (!charlist) {
      return <Spinner />;
    }

    const items = this.renderItems(charlist);

    return <ul className="w-full p-5 border border-sub text-sub">{items}</ul>;
  }
}
