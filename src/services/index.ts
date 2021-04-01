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
  getAllCharacters() {
    return this.getResource("/characters?page=5&pageSize=10");
  }
  getCharacter(id: string | number) {
    return this.getResource(`/characters/${id}`);
  }

  getAllHouses() {
    return this.getResource("/houses");
  }
  getHouse(id: string | number) {
    return this.getResource(`/houses/${id}`);
  }

  getAllBooks() {
    return this.getResource("/books");
  }
  getBook(id: string | number) {
    return this.getResource(`/books/${id}`);
  }
}
