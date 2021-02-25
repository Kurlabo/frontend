import React from 'react';

const ConfirmText = ({ text, text2, text3, text4 }) => {
  return (
    <div className="ml-5">
      <p className="pt-2">&middot;{text}</p>
      {text2 && <p className="pt-3">&middot;{text2}</p>}
      {text3 && <p className="pt-3">&middot;{text3}</p>}
      {text4 && <p className="pt-3">&middot;{text4}</p>}
    </div>
  );
};

export default ConfirmText;
