import React from 'react';

export default function TextEditor() {
  return (
    <div
      spellCheck={false}
      className="border border-primaryBlack focus:outline-none h-96 cursor-text p-3"
      contentEditable
    />
  );
}
