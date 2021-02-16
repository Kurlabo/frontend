import React from 'react';
import ReactDom, { createPortal } from 'react-dom';
export default function Modalform({ children, id }) {
  const el = document.getElementById(id);
  return createPortal(children, el);
}
