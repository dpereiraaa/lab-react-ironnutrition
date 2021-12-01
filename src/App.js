import { useState } from "react";
import "./App.css";
import foodsJSON from "./foods.json";
import FoodBox from "./components/FoodBox";

import { Row, Divider, Button } from "antd";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";
import Error from "./components/Error";

function App() {
  const [foods, setFoods] = useState(foodsJSON);
  const [allFoods, setAllFoods] = useState(foodsJSON);
  const [button, setButton] = useState(false);

  const addNewFood = (foodObj) => {
    const updatedFoods = [foodObj, ...foods];
    const updatedAllFoods = [foodObj, ...allFoods];
    setFoods(updatedFoods);
    setAllFoods(updatedAllFoods);
  };

  const filterFoodList = (searchResult) => {
    let filteredFoods;
    if (searchResult === "") {
      filteredFoods = allFoods;
    } else {
      filteredFoods = allFoods.filter((eachFood) => {
        let foodName = eachFood.name.toLowerCase();
        let searchResultLow = searchResult.toLowerCase();
        return foodName.includes(searchResultLow) === true;
      });
    }

    setAllFoods([...filteredFoods]);
  };

  const deleteFood = (foodName) => {
    const updatedFoods = [...allFoods];

    const filteredFoods = updatedFoods.filter((food) => {
      return food.name !== foodName;
    });

    setAllFoods([...filteredFoods]);
  };

  return (
    <div className="App">
      <div>
        <Button onClick={() => setButton(!button)}>
          {button ? "Hide Form" : "Add New Food"}
        </Button>
        {button && <AddFoodForm addNewFoodFunc={addNewFood} />}
      </div>

      <Search filterFoodList={filterFoodList} />

      <Divider>Food List</Divider>

      <Row
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          padding: "20px 200px",
        }}
      >
        {allFoods.length === 0 && <Error />}
        {allFoods.map((eachFood) => {
          return <FoodBox eachFood={eachFood} deleteFood={deleteFood} />;
        })}
      </Row>
    </div>
  );
}

export default App;
