import React, { Component } from "react";
import GotService from "../../services";

export default class RandomChar extends Component {
  constructor() {
      super();
      this.updateChar();
  }
  
    gotService = new GotService();

  state = {
    name: null,
    gender: null,
    born: null,
    died: null,
    culture: null,
  };


  updateChar() {
      const id = Math.floor(Math.random()*2000 + 40);
      this.gotService.getCharacter(id)
        .then((char) => {
            this.setState({
                name: char.name,
                gender: char.gender,
                born: char.born,
                died: char.died,
                culture: char.culture,
            })
        })
  }

  render() {
    const { name, gender, born, died, culture } = this.state;

    return (
      <div className="container py-4">
        <h2 className="text-3xl">Random Charcter: {name}</h2>
        <ul className="flex flex-col gap-4 text-2xl font-semibold">
          <li className="p-3 border-2 rounded border-black text-black bg-red-600">
            Gender {gender}
          </li>
          <li className="p-3 border-2 rounded border-black text-black bg-red-600">
            where born {born}
          </li>
          <li className="p-3 border-2 rounded border-black text-black bg-red-600">
            when died {died}
          </li>
          <li className="p-3 border-2 rounded border-black text-black bg-red-600">
            Culture {culture}
          </li>
          <li className="p-3 border-2 rounded border-black text-black bg-red-600"></li>
        </ul>
      </div>
    );
  }
}
