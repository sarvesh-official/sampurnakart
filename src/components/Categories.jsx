import { categories } from "../constants/categories";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <div className="grid grid-cols-4 gap-10 pt-11">
      {categories.map((category, index) => (
        <CategoryCard
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
