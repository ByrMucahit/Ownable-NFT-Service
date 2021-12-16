import * as React from 'react'

function SvgDownArrow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...props}
    >
      <path d="M89.5 161.4c-6.7 2.9-10.5 10.5-9 18.3.6 3.4 10 13.1 84.3 87.5 74.4 74.3 84.1 83.7 87.5 84.3 9.4 1.8 3.9 6.6 94.9-84.3 90.9-90.9 86.1-85.5 84.3-94.9-.9-4.9-6.9-10.9-11.8-11.8-9.4-1.8-4.6-5.9-87.5 76.8L256 313.5l-75.8-75.7c-42.4-42.4-76.9-76.2-78.5-76.8-3.8-1.4-8.5-1.2-12.2.4z" />
    </svg>
  )
}

export default SvgDownArrow
