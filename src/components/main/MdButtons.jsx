import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMdSuggestionGoodsInfo } from '../../modules/mdButtons';

const MdButtons = ({ title, subtitle, suggestType, setMdCurIndex }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMdSuggestionGoodsInfo(0));
  }, [dispatch]);
  return (
    <>
      <p className="block font-bold text-r-2.8 text-center pt-r-7.9 pb-r-3.5">
        {title}
        {subtitle && (
          <p className="pt-4 font-normal text-r-1.6 text-gray-400 leading-8">{subtitle}</p>
        )}
      </p>
      <ul className="pb-8 text-center">
        {suggestType.map((type, i) => (
          <li key={i} className="inline-block px-2 pb-8">
            <input defaultChecked={i === 0} className="hidden" id={`${i}`} type="radio" name="md" />
            <label
              onClick={() => {
                dispatch(getMdSuggestionGoodsInfo(i));
                setMdCurIndex(type);
              }}
              className="cursor-pointer focused-sibling:text-white focused-sibling:font-bold focused-sibling:bg-kp-600 inline-block h-16 px-8 pb-4 pt-4 rounded-r-2 bg-kg-500  text text-r-1.4 leading-6"
              htmlFor={`${i}`}
            >
              {type}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default React.memo(MdButtons);
