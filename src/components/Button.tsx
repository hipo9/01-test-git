import React, { useRef } from 'react';

export function Button() {
  const divRef = useRef<HTMLDivElement>(null);

  const handleButton = () => {
    if (!divRef.current) return;
    divRef.current.style.background = 'red';
  };
  return (
    <div
      ref={divRef}
      style={{
        background: 'orange',
        border: '1px solid gray',
        padding: '4px',
        borderRadius: '6px',
      }}>
      <button onClick={handleButton}>Button </button>
    </div>
  );
}
