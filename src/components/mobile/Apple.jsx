import { apple } from "../../constants/apple";
import RepairMobile from "../RepairMobile";

const Apple = () => {
  return (
    <div className="grid grid-cols-4 gap-10 pt-11 pb-11">
      {apple.map((category, index) => (
        <RepairMobile
          img={category.img}
          title={category.title}
          route={`/repair/issue/${category.url}`}
          key={index}
        />
      ))}
    </div>
  );
};

export default Apple;
