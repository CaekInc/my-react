export interface Characters {
  name?: string;
  gender?: string;
  born?: string;
  died?: string;
  culture?: string;
  url?: string;
  titles?: string[];
  aliases?: string[];
  father?: string;
  mother?: string;
  spouse?: string;
  allegiances?: string[];
  books?: string[];
  povBooks?: string[];
  tvSeries?: string[];
  playedBy?: string[];
}

export interface Books {
  url?: string;
  name?: string;
  isbn?: string;
  authors?: string[];
  numberOfPages?: number;
  publisher?: string;
  country?: string;
  mediaType?: string;
  released?: Date | string;
  characters?: string[];
  povCharacters?: string[];
}

export interface Houses {
  url?: string;
  name?: string;
  region?: string;
  coatOfArms?: string;
  words?: string;
  titles?: string[];
  seats?: string[];
  currentLord?: string;
  heir?: string;
  overlord?: string;
  founded?: string;
  founder?: string;
  diedOut: string;
  ancestralWeapons?: string[];
  cadetBranches?: string[];
  swornMembers?: string[];
}
