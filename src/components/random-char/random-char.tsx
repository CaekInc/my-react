import React, { Component } from "react";
import GotService from "../../services";
import { Books, Characters, Houses } from "../../interfaces/index";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../error-message/errorMessage";

export default class RandomChar extends Component {
  constructor() {
    super();
    this.updateChar = this.updateChar.bind(this);
    console.log('constructor')
  }

  gotService = new GotService();

  state = {
    char: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    console.log('mounted')
  }

  onCharLoaded = (char: Characters) => {
    this.setState({
      char,
      loading: false,
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updateChar() {
    const id = Math.floor(Math.random() * 140 + 40);
    this.gotService
      .getCharacter(id)
      .then(this.onCharLoaded)
      .catch(this.onError);
  }

  render() {
    const { char, loading, error } = this.state;
    const content = loading ? <Spinner /> : <View char={char} />;
    const errorMessage = error ? <ErrorMessage /> : null;
    console.log('render')
    return (
      <div className="container py-4">
        {errorMessage}
        {content}
        <button
          className="py-4 px-10 border border-yellow-300 text-yellow-300 mt-5"
          onClick={this.updateChar}>
          Update
        </button>
      </div>
    );
  }
}

const View = ({ char }: any) => {
  const { name, gender, born, died, culture } = char;
  return (
    <>
      <h2 className="text-3xl">Random Charcter: {name}</h2>
      <ul className="flex flex-col gap-4 text-2xl font-semibold">
        <li className="p-3 border-2 rounded border-black text-black bg-red-600">
          Gender {gender || "NO-INFO"}
        </li>
        <li className="p-3 border-2 rounded border-black text-black bg-red-600">
          where born {born || "NO-INFO"}
        </li>
        <li className="p-3 border-2 rounded border-black text-black bg-red-600">
          when died {died || "NO-INFO"}
        </li>
        <li className="p-3 border-2 rounded border-black text-black bg-red-600">
          Culture {culture || "NO-INFO"}
        </li>
      </ul>
    </>
  );
};
