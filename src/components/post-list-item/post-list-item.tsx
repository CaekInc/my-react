import React, { Component } from "react";

export default class PostListItem extends Component {

  onImportant() {
    this.setState(({ important } : any) => ({
      important: !important,
    }));
  }

  onLike() {
    this.setState(({ like } : any) => ({
      like: !like,
    }));
  }

  render() {
    const { label, onDelete, onToggleImportant, onToggleLiked, important, like } : any = this.props;
    let classNames = "flex justify-between items-center py-4 px-2";
    if (important) {
      classNames += " border-main border-2";
    }
    if (like) {
      classNames += " bg-blue";
    }
    return (
      <div className={classNames}>
        <span className="text-lg cursor-pointer" onClick={onToggleImportant}>
          {label}
        </span>
        <div className="flex justify-center items-center">
          <button
            className="btn-star p-2 rounded border"
            onClick={onToggleLiked}
          >
            Like
          </button>
          <button className="btn-trash p-2 rounded border"
          onClick={onDelete}
          >Trash</button>
        </div>
      </div>
    );
  }
}
