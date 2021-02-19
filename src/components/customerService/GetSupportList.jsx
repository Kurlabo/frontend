import React from 'react';

const btbStyle =
  'border border-kp-600 p-2 w-r-7.9 cursor-pointer text-center text-kp-600 float-right mr-4';

const GetSupportList = ({ data, state, setState, setOpenModal }) => {
  const { no, title, date, category, content } = data;
  return (
    <>
      <div
        id={no}
        onClick={onClick}
        className="flex pt-8 pb-8 text-r-1.2 text-center justify-between border-gray-200 text-gray-700 border-b"
        key={no}
      >
        <span className="w-28">{no}</span>
        <span className="w-p-128">{'[' + category + ']'}</span>
        <span className="w-r-61.5 text-left cursor-pointer">{title}</span>
        <span className="w-r-13">{date}</span>
      </div>
      <div
        className={
          'p-4 text-r-1.2 border-b border-gray-300 overflow-hidden ' +
          (state.selectedState[no - 1].selected ? '' : 'hidden')
        }
      >
        <p className="pl-6 text-gray-700">{content}</p>
        <div onClick={setOpenModalTrue} className={btbStyle}>
          삭제
        </div>
        <div className={btbStyle}>수정</div>
      </div>
    </>
  );

  function onClick(e) {
    if (state.currentId !== +e.currentTarget.id) {
      setState({
        currentId: +e.currentTarget.id,
        selectedState: state.selectedState.map(eachState => {
          if (eachState.id === +e.currentTarget.id) {
            return {
              id: eachState.id,
              selected: true,
            };
          } else {
            return {
              ...eachState,
              selected: false,
            };
          }
        }),
      });
    } else {
      setState(beforeState => ({
        currentId: beforeState.currentId,
        selectedState: beforeState.selectedState.map((prevState, index) => {
          if (index + 1 === beforeState.currentId) {
            return {
              id: index + 1,
              selected: !beforeState.selectedState[index].selected,
            };
          } else {
            return prevState;
          }
        }),
      }));
    }
  }

  function setOpenModalTrue() {
    setOpenModal(true);
  }
};

export default GetSupportList;
