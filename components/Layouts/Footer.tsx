import React from "react";
import { footerList1, footerList2, footerList3 } from "../utils/constants";

const Footer = () => {
  return (
    <div className="mt-6 hidden xl:block ">
      <List items={footerList1} mt={false} />
      <List items={footerList2} mt />
      <List items={footerList3} mt />
      <p className="">2022 Streak</p>
    </div>
  );
};

const List = ({ items, mt }: { items: string[]; mt: boolean }) => (
  <div className={` flex flex-wrap gap-2 ${mt && "mt-5"}`}>
    {items.map((item) => (
      <p
        key={item}
        className={`text-gray-400 text-sm hover:underline cursor-pointer`}
      >
        {item}
      </p>
    ))}
  </div>
);

export default Footer;
