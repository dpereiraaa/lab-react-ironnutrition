import { Card, Col, Button } from "antd";

function FoodBox({ eachFood, deleteFood }) {
  return (
    <Col>
      <Card
        title={eachFood.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={eachFood.image} height={60} alt="food" />
        <p>Calories: {eachFood.calories}</p>
        <p>Servings: {eachFood.servings}</p>
        <p>
          <b>Total Calories: {eachFood.calories * eachFood.servings}</b> kcal
        </p>
        <Button type="primary" onClick={() => deleteFood(eachFood.name)}>
          {" "}
          Delete{" "}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
