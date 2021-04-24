import { Books, Characters, Houses } from './../interfaces/index';

export default class GotService {
  constructor() {
    this._apiBase = "https://www.anapioficeandfire.com/api";
  }

  getResource = async (url: string) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error("its some problem with " + url + " , " + res.status);
    }

    return await res.json();
  }
    getAllCharacters = async () => {
    const res = await this.getResource("/characters?page=125&pageSize=10");
    return await res.map(this._transformCharacter);
  }
   getCharacter = async (id: string | number) => {
    const character = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(character);
  }

   getAllHouses = async () => {
    const res = await this.getResource("/houses");
    return res.map(this._transformHouses);
  }
   getHouse = async (id: string | number) => {
    const house = await this.getResource(`/houses/${id}`);
    return this._transformHouses(house);
  }

   getAllBooks = async () => {
    const res = await this.getResource("/books");
    return res.map(this._transformBooks);
  }
   getBook = async (id: string | number) => {
    const book = await this.getResource(`/books/${id}`);
    return this._transformBooks(book);
  }

  _transformCharacter = (char: Characters) => {
    return {
      name: char.name,
      gender: char.gender,
      born: char.born,
      died: char.died,
      culture: char.culture,
    };
  }

  _transformHouses = (house: Houses) => {
    return {
      name: house.name,
      region: house.region,
      words: house.words,
      titles: house.titles,
      overlord: house.overlord,
      ancestralWeapons: house.ancestralWeapons,
    };
  }

  _transformBooks = (book: Books) => {
    return {
      name: book.name,
      numberOfPages: book.numberOfPages,
      publisher: book.publisher,
      released: book.released,
    };
  }
}
