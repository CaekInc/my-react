import React, { Component, useEffect, useState } from "react";
import Spinner from "../spinner/spinner";

// export default class ItemList extends Component {

//   state = {
//     itemList: null,
//   };

//   renderItems(arr: []) {
//     return arr.map((item) => {
//       const { id, name } = item;
//       const label = this.props.renderItem(item)
//       return (
//         <li className="p-4 border-sub border-t" key={id}>
//           {label}
//         </li>
//       );
//     });
//   }

//   componentDidMount() {
//     const { getData } = this.props
//     getData()
//     .then((itemList) => {
//       this.setState({
//         itemList,
//       });
//     });
//   }
//   render() {
//     const { itemList }: any = this.state;
//     if (!itemList) {
//       return <Spinner />;
//     }

//     const items = this.renderItems(itemList);

//     return <ul className="w-full p-5 border border-sub text-sub">{items}</ul>;
//   }
// }

export default function ItemList(props) {
  const [item, setItem] = useState([]);

  function renderItems(arr: []) {
    return arr.map((item) => {
      const { id, name } = item;
      const label = props.renderItem(item);
      return (
        <li className="p-4 border-sub border-t" key={id}>
          {label}
        </li>
      );
    });
  };

  useEffect(() => {
    props.getData().then((data) => {
      setItem(data);
    });
  }, [item]);

  if (!item) {
          return <Spinner />;
        }

  const items = renderItems(item);

  return <ul className="w-full p-5 border border-sub text-sub">{items}</ul>;
}
