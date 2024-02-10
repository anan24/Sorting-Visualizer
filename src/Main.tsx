import { useContext } from "react";
import { Context, ItemsContext } from "./components/utils/AlgoContext";

const Main = () => {
  const { items } = useContext(ItemsContext);
  const { settings } = useContext(Context);
  return (
    <section className="row-span-5">
      <div className="flex w-full h-full items-end">
        {items.map((item: number, idx: number) => (
          <div
            key={`${item}.${settings.arrayLen}.${idx}`}
            className="flex-1"
            style={{ backgroundColor: "#482", height: `${item / 7}%` }} //% is to make it relative to the viewport
            id={`${idx}`}
          >
            {/* {item} */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Main;
