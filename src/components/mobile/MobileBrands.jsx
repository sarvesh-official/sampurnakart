import { mobileBrands } from "../../constants/mobileBrands";
import Card from "../Card";

const MobileBrands = () => {
  return (
    <div className="grid grid-cols-4 gap-10 pt-11 pb-11">
      {mobileBrands.map((category, index) => (
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

export default MobileBrands;
