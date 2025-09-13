import React from "react";
import "./App.css";
import A from "./Carts.js/A";
import B from "./Carts.js/B";
import C from "./Carts.js/C";
import { ImPodcast } from "react-icons/im";

class App extends React.Component {
  render() {
    return (
      <div className="w-350 h-[800px] grid grid-cols-3 mt-5 m-auto gap-2">
        <A />
        <B />
        <C />
      </div>
    );
  }
}
export default App;



