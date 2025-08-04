// https://dog.ceo/api/breeds/image/random

import axios from "axios";
import { useState } from "react";




const ApiTestPage = () => {
  const [img, setImg] = useState();

  const sendApi = async () => {
    const res = await axios.get("https://dog.ceo/api/breeds/image/random");

    const data = res.data;
    setImg(data.message);

    console.log(res);
  }

  return (
    <>
      <div className="flex">
        <img className="max-w-100 aspect-auto" src={img} />
        <button className="w-30 h-15 bg-[rgb(251,33,117)] text-white rounded-2xl overflow-hidden hover:decoration-0 decoration-white" onClick={sendApi}>Click</button>
      </div>

      <button type="button" class="inline-flex items-center rounded-md bg-indigo-500 px-4 py-2 text-sm leading-6 font-semibold text-white transition duration-150 ease-in-out hover:bg-indigo-400" disabled="">
        <svg class="mr-3 -ml-1 size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        Processing…
      </button>

    </>
  );
};

export default ApiTestPage;
