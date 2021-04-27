import React, { useState } from "react";
import ItemList from "../item-list/item-list";
import ErrorMessage from "../error-message/errorMessage";
import GotService from "../../services/index";
import { Characters, Books, Houses } from "../../interfaces/index";

export default function CharacterPage() {
  const [setChar, updateChar] = useState(130);
  const [setError, updateError] = useState(false);

  const onCharSelected = (id: number) => {
    if (!id) {
      updateError(true);
    }

    updateChar(id);
  };

  const gotService = new GotService();

  if (setError) {
    return <ErrorMessage />;
  } else {
    return (
      <>
        <ItemList
          getData={gotService.getAllCharacters}
          renderItem={(item: Characters) =>
            `${item.name} ${item.gender} ${item.culture}`
          }
        />
        <ItemList
          getData={gotService.getAllBooks}
          renderItem={(item: Books) =>
            `${item.name} ${item.country} ${item.numberOfPages}`
          }
        />
        <ItemList
          getData={gotService.getAllHouses}
          renderItem={(item: Houses) =>
            `${item.name} ${item.words} ${item.overlord}`
          }
        />
      </>
    );
  }
}
