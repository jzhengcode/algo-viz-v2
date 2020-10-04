import React, { useEffect, useRef } from 'react';
import '../styles/Canvas.css';
import { createRandomArray, deleteAll, createCanvas } from '../transitions/basics';

const Canvas = (props) => {
  const { size, canvasCreated, canvasCleared } = props;
  const ref = useRef();
  const data = createRandomArray(size);

  useEffect(() => {
    if (canvasCreated) {
      createCanvas(ref.current, data);
    } else if (canvasCleared) {
      deleteAll(ref.current);
    }
  });

  return <svg id="canvas" ref={ref} />;
};

export default Canvas;
