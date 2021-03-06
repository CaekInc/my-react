import React, { Component } from "react";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

export interface data {
  label: string;
  important: boolean;
  like: boolean;
  id: string | number;
}

export default class OldForm extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [
        {
          label: "I am",
          important: false,
          like: false,
          id: this.genId("someRandomValue"),
        },
        {
          label: "Super",
          important: false,
          like: false,
          id: this.genId("someRandomValue"),
        },
        {
          label: "React Developer",
          important: true,
          like: false,
          id: this.genId("someRandomValue"),
        },
      ],
      term: "",
      filter: "all",
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
  }

  deleteItem(id: string) {
    this.setState(({ data }: any) => {
      const index = data.findIndex((elem: any) => elem.id === id);
      const newArray = [...data.slice(0, index), ...data.slice(index + 1)];

      return {
        data: newArray,
      };
    });
  }

  addItem(body: string) {
    const newItem = {
      label: body,
      important: false,
      like: false,
      id: this.genId(body),
    };
    this.setState(({ data }: any) => {
      const newArray = [...data, newItem];
      return {
        data: newArray,
      };
    });
  }

  genId(value: string) {
    let random = Math.floor(Math.random() * (value.length - 1));
    return value.slice(random);
  }

  onToggleImportant(id: number) {
    this.setState(({ data }: any) => {
      const index = data.findIndex((elem: any) => elem.id === id);
      const old = data[index];
      const newItem = { ...old, important: !old.important };

      const newArray = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];

      return {
        data: newArray,
      };
    });
  }

  onToggleLiked(id: number) {
    this.setState(({ data }: any) => {
      const index = data.findIndex((elem: any) => elem.id === id);
      const old = data[index];
      const newItem = { ...old, like: !old.like };

      const newArray = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];

      return {
        data: newArray,
      };
    });
  }

  searchPosts(items: [], term: string) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item: data) => {
      return item.label.indexOf(term) > -1;
    });
  }

  onUpdateSearch(term: string) {
    this.setState({ term });
  }

  onFilterChange(filter: string) {
    this.setState({ filter });
  }

  filterPosts(items: data[], filter: string) {
    if (filter === "like") {
      return items.filter((item) => item.like);
    } else {
      return items;
    }
  }

  render() {
    const { data, term, filter }: any = this.state;
    const liked = data.filter((item: any) => item.like).length;
    const allPosts = data.length;

    const visiblePosts = this.filterPosts(this.searchPosts(data, term), filter);

    return (
      <div>
        <SearchPanel onUpdateSearch={this.onUpdateSearch} />
        <PostStatusFilter
          filter={filter}
          onFilterChange={this.onFilterChange}
        />
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
