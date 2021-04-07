import { Books, Characters, Houses } from './../interfaces/index';

export default class GotService {
  constructor() {
    this._apiBase = "https://www.anapioficeandfire.com/api";
  }

  async getResource(url: string) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error("its some problem with " + url + " , " + res.status);
    }

    return await res.json();
  }
  async getAllCharacters() {
    const res = await this.getResource("/characters?page=5&pageSize=10");
    return res.map(this._transformCharacter);
  }
  async getCharacter(id: string | number) {
    const character = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(character);
  }

  async getAllHouses() {
    const res = await this.getResource("/houses");
    return res.map(this._transformHouses);
  }
  async getHouse(id: string | number) {
    const house = await this.getResource(`/houses/${id}`);
    return this._transformHouses(house);
  }

  async getAllBooks() {
    const res = await this.getResource("/books");
    return res.map(this._transformBooks);
  }
  async getBook(id: string | number) {
    const book = await this.getResource(`/books/${id}`);
    return this._transformBooks(book);
  }

  _transformCharacter(char: Characters) {
    return {
      name: char.name,
      gender: char.gender,
      born: char.born,
      died: char.died,
      culture: char.culture,
    };
  }

  _transformHouses(house: Houses) {
    return {
      name: house.name,
      region: house.region,
      words: house.words,
      titles: house.titles,
      overlord: house.overlord,
      ancestralWeapons: house.ancestralWeapons,
    };
  }

  _transformBooks(book: Books) {
    return {
      name: book.name,
      numberOfPages: book.numberOfPages,
      publisher: book.publisher,
      released: book.released,
    };
  }
}
