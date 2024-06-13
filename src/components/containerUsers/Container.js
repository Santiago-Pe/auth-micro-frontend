import React from "react";

const Container = () => {
  return (
    <div class="w-64 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
      <img
        alt="profil"
        src="/images/landscape/1.jpg"
        class="w-full mb-4 rounded-t-lg h-28"
      />
      <div class="flex flex-col items-center justify-center p-4 -mt-16">
        <a href="#" class="relative block">
          <img
            alt="profil"
            src="/images/person/1.jpg"
            class="mx-auto object-cover rounded-full h-16 w-16 "
          />
        </a>
        <p class="mt-2 text-xl font-medium text-gray-800 dark:text-white">
          Charlie
        </p>
        <p class="flex items-center text-xs text-gray-400">
          <svg
            width="10"
            height="10"
            fill="currentColor"
            class="w-4 h-4 mr-2"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
          </svg>
          Nantes
        </p>
        <p class="text-xs text-gray-400">FullStack dev</p>
        <div class="flex items-center justify-between w-full gap-4 mt-8">
          <button
            type="button"
            class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            See profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Container;
