import { categories } from "../constants/categories";
import Card from "./Card";

const Categories = () => {
  return (
    <div className="grid grid-cols-4 gap-10 pt-11 pb-11">
      {categories.map((category, index) => (
        <Card
          img={category.img}
          title={category.title}
          route={category.route}
          key={index}
        />
      ))}
    </div>
  );
};

export default Categories;
