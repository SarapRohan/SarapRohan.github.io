import React, { useCallback, useEffect, useRef, useState } from "react"
import "./data.scss"

const nextText = "Visit back later";

const Data = () => {
  const [text, setText] = useState('Work in Progress...');
  const backspaceTimer = useRef(0);
  const typeTextTimer = useRef(0);

  const type = useCallback(() => {
    setText(text => {
      if (text.length === nextText.length) {
        clearInterval(typeTextTimer.current);
        return text;
      } else {
        return nextText.slice(0, text.length + 1)
      }
    });
  }, []);

  const backspace = useCallback(() => {
    setText(text => {
      if (text.length === 0) {
        clearInterval(backspaceTimer.current);
        typeTextTimer.current = setInterval(type, 200);
        setText(nextText.slice(0, 1));
        return '';
      } else {
        return text.slice(0, text.length - 1);
      }
    });
  }, [type]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      backspaceTimer.current = setInterval(backspace, 200);
    }, 3000);
    return () => clearTimeout(timeout)
  }, [backspace]);

  return (
    <div className="container">
      <span>{text}</span>
      <div className="cursor"></div>
    </div>
  )
}

export default Data;
