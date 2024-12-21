import { useState, useEffect } from "react";

const Page = () => {
  const [proData, setProData] = useState([]);

  const [pageIndex, setPageIndex] = useState(1);

  console.log("proData", proData);

  const perProductData = 2;

  let lastindex = pageIndex * perProductData;
  let firstindex = lastindex - perProductData;
  let productDataList = proData.slice(firstindex, lastindex);

  console.log(productDataList);

  async function API() {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    setProData(data);
  }

  useEffect(() => {
    API();
  }, []);

  const pageCount = Math.ceil(proData.length/perProductData);

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-around">
        {productDataList.map((item) => {
          return (
            <div className="max-w-sm m-2 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg h-32 mx-auto"
                  src={item.image}
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <button
          className="btn"
          onClick={() => setPageIndex((prev) => prev - 1)}
          disabled={firstindex <= 0}
        >
          Prev
        </button>
        {
            Array(pageCount).fill(null).map((_, index)=><span className="btn" onClick={() => setPageIndex(index+1)}>{index +1}</span>)
        }
        <button
          className="btn"
          onClick={() => setPageIndex((next) => next + 1)}
          disabled={lastindex >= proData.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Page;
