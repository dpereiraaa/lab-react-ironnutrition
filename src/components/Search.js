import { useState } from "react";
import { Divider, Input } from "antd";

function Search({ filterFoodList }) {
  const [searchResult, setSearchResult] = useState("");
  const handleSelect = (event) => {
    setSearchResult(event.target.value);
    filterFoodList(event.target.value);
  };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchResult} type="text" onChange={handleSelect} />
    </>
  );
}

export default Search;
