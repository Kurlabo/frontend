import React from 'react';

const MdButtons = ({ title, subtitle, suggestType, mdCurIndex }) => {
  return (
    <>
      <p className="block font-bold text-r-2.8 text-center pt-r-7.9 pb-r-3.5">
        {title}
        {subtitle && (
          <p className="pt-4 font-normal text-r-1.6 text-gray-400 leading-8">
            {subtitle}
          </p>
        )}
      </p>
      <ul className="pb-8 text-center">
        {suggestType.map((type) => (
          <li className="inline-block px-2 pb-8">
            <button
              onClick={() => {
                mdCurIndex = type;
              }}
              className="hover:bg-kb-100 hover:text-kp-600 focus:bg-kp-600 focus:text-white focus:font-bold focus:outline-none inline-block h-16 px-8 pb-4 pt-4 rounded-r-2 bg-kg-500 text text-r-1.4 leading-6"
            >
              {type}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MdButtons;
