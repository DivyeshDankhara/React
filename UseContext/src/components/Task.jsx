import {useEffect, useState } from "react";
import { AnimalList } from "./Data";

const Task = () => {
  const [index, setIndex] = useState(0);
  const [desc, setDesc] = useState('line-clamp-1');
  const [showDesc , setShowDesc] = useState(true);
  const [animLeft , setAnimLeft] = useState(false);
  const [animRight , setAnimRight] = useState(false);
  const [animHover , setAnimHover] = useState(false);

  // const[]

  console.log(animRight);

  const List = [AnimalList[index]];

  const Next = () => {
    if (index == 9) {
      setIndex(0);
    } else {
      setIndex((NextState) => NextState + 1);
    }
    setDesc((desc) => desc='line-clamp-1');
    setShowDesc((showdesc) => showdesc = true);
    setAnimRight(true); 
    setTimeout(() => {
      setAnimRight(false);
    }, 1000)
  };
  
  const Prev = () => {
    if (index > 0) {
      setIndex((PrevState) => PrevState - 1);
    } else {
      setIndex((PrevState) => (PrevState = 0));
    }
    setDesc((desc) => desc='line-clamp-1');
    setShowDesc((showdesc) => showdesc = true);
    setAnimLeft((animleft) => animleft = true); 
    setTimeout(() => {
      setAnimLeft(false);
    }, 1000)
  };

const Toggle = () => {
    if(desc == 'line-clamp-1'){
        setDesc((Desc) => Desc = 'line-clamp-3');
        setShowDesc((showdesc) => showdesc = false);
    }else{
        setDesc((Desc) => Desc = 'line-clamp-1');
        setShowDesc((showdesc) => showdesc = true);
    }
}

useEffect(() => {
  setAnimHover(true)
}, [])

  return (
    <div className="flex justify-around p-12 bg-red-300 h-svh">
      <div className="self-center">
        <button
          className="bg-blue-400 px-4 py-2 rounded-md flex align-bottom text-white text-lg"
          disabled={animLeft ? true : false}
          onClick={Prev}
        >
          Prev
        </button>
      </div>
      <div className={`flex justify-center ${animLeft ? 'animate-slideleft' : ''} ${animRight ? 'animate-slideright' : ''} ${animHover ? 'scaleIn' : ''}`}>
        {List.map((item) => {
          return (
            
              <div className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-80 h-fit`} key={item.id}>
                <a href="#">
                  <img
                    className="rounded-t-lg h-52 w-full "
                    src={item.image}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.name}
                    </h5>
                  </a>
                  <p className={`mb-3 font-normal text-gray-700 dark:text-gray-400 description ${desc}`}>
                    {item.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={ () => Toggle('line-clamp-3')}
                  >
                    {showDesc ? 'Show' : 'Hide'}
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
        
          );
        })}
      </div>
      <div className="self-center">
        <button
          className="bg-blue-400 px-4 py-2 rounded-md flex align-bottom text-white text-lg"
          disabled={animRight ? true : false}
          onClick={Next}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Task;
