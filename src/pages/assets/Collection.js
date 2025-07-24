import React from 'react';

const products = [
  {
    name: "Aluminum Chair",
    price: "120.00",
    image: "aluminium.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    name: "Stylish Chair",
    price: "120.00",
    image: "stylish.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  }
];

function ChairCard({ name, price, image, description }) {
  return (
    <div className="chair-card">
      <img
        src={image}
        alt={name}
        className="w-[163px] h-[142px] object-cover overflow-hidden relative -scale-x-100 left-0 top-0"
      />
      <h3 className="w-[151px] h-[17px] font-[500] text-[15px] leading-[22px] capitalize text-[#4B4544] flex items-center flex-none order-1 grow-0">
        {name}
      </h3>
      <p className="text-[12px] leading-[15px] text-[#4B4544]">
        {description}
      </p>
      <div className="w-[153px] h-0 border border-[#F4B5A4] border-[0.5px] flex-none order-3 grow-0"></div>

      <div className="card-footer flex items-center justify-between">
        <span className="price">{price}</span>
        <div className="icons flex gap-2">
          <button className="heart">❤</button>
          <button className="add">＋</button>
        </div>
      </div>
    </div>
  );
}

function Collection() {
  return (
    <div className="max-w-sm w-full mx-auto p-4">
      <h2 className="text-[18px] font-semibold text-[#D98A76] mb-4">New Collection</h2>

      <div className="flex flex-row gap-[23px]">
        {products.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-[9px] w-[163px] h-[235px]">
            <ChairCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collection;
