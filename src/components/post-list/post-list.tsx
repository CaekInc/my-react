import React from "react";
import PostListItem from "../post-list-item/post-list-item";

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked } : any) => {
  const elements = posts.map((item: any) => {
    if (typeof item === "object" && isEmpty(item)) {
      const { id, ...itemProps } = item;
      return (
        <li className="my-4">
          <PostListItem {...itemProps} 
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLiked={() => onToggleLiked(id)}
          />
        </li>
      );
    }
  });

  function isEmpty(obj: any) {
    for (let key in obj) {
      return true;
    }
    return false;
  }

  return <ul className="my-4">{elements}</ul>;
};
export default PostList;
