import { useState } from "react";
import { people } from "./data";
import Players from "./Players";
import Header from "./Header";

function Selector() {
  const [search, setSearch] = useState("");
  const [nom, setNom] = useState(people);

  const filteredInput = nom.filter((searches) => {
    return searches.name.toLowerCase().includes(search);
  });

  function changeSearch(event) {
    setSearch(event.target.value);
  }

  function deleteItem(i) {
    setNom((prevNom) => {
      return prevNom.filter((newNom, index) => {
        return newNom.id !== i;
      });
    });
  }

  return (
    <div className="noms">
      <Header />
      <div className="input-container">
        <input
          type="text"
          value={search}
          onChange={changeSearch}
          placeholder="FIND PLAYER"
        ></input>
      </div>

      <div className="player-container">
        {filteredInput.map((person, index) => {
          return <Players onDel={deleteItem} key={person.id} {...person} />;
        })}
      </div>
    </div>
  );
}

export default Selector;
