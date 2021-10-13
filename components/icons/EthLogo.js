import * as React from "react";

function SvgEthLogo(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 42 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.6}
        d="M20.996 27.293L2 36.09l18.996 11.427 18.99-11.427-18.99-8.796z"
        fill="#010101"
      />
      <path
        opacity={0.45}
        d="M1.57 35.834l-.253.428.425.256L20.74 47.944l.758.456V2.174l-.93 1.571L1.57 35.835z"
        fill="currentColor"
        stroke="#000"
      />
      <path
        opacity={0.8}
        d="M21.426 3.745l-.93-1.572V48.4l.758-.456 18.989-11.426.425-.256-.253-.428L21.426 3.745z"
        fill="currentColor"
        stroke="#000"
      />
      <path
        opacity={0.45}
        d="M20.497 51.462V65.41L3.75 41.389l16.747 10.073z"
        fill="currentColor"
        stroke="#000"
      />
      <path
        opacity={0.8}
        d="M20.738 50.751l-.242.146V68.59l.91-1.304L40.41 40.039l-.668-.714L20.738 50.75z"
        fill="currentColor"
        stroke="#000"
      />
    </svg>
  );
}

export default SvgEthLogo;
