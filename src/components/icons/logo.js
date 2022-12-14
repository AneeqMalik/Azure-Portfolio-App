import React from 'react';

const IconLogo = () => (
  // <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
  //   <title>Logo</title>
  //   <g transform="translate(-8.000000, -2.000000)">
  //     <g transform="translate(11.000000, 5.000000)">
  //       <path
  //         d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z"
  //         fill="currentColor"
  //       />
  //       <polygon
  //         id="Shape"
  //         stroke="currentColor"
  //         strokeWidth="5"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         points="39 0 0 22 0 67 39 90 78 68 78 23"
  //       />
  //     </g>
  //   </g>
  // </svg >
  <svg style={{ width: '600px', height: '90px' }} id="logo" role='img' xmlns="http://www.w3.org/2000/svg" viewBox="50 60 110 50">

    <path d="M79.5 37.9c-.6.5-1.9 1.1-3 1.3-1.1.2-2.1.9-2.1 1.6-.1.6-.3 1.4-.4 1.7-.1.3-.4.9-.5 1.5-.1.5-.4 1.3-.5 1.7-.2.5-.4 1.2-.5 1.8-.2.5-.4 1.3-.5 1.7-.1.5-.4 1.2-.5 1.8-.1.5-.3 1.1-.5 1.2-.1.2-.4 1.6-.6 3.3-.3 1.6-.9 3.5-1.5 4.1-.5.6-.6 1.4-.2 1.7.3.4 0 1.3-.7 2.2-.7.8-.9 1.5-.5 1.5s.2.7-.5 1.5c-.6.8-.9 1.9-.6 2.4.4.5.1 1.3-.5 1.6-.5.4-.8 1.4-.5 2.2.4.9.1 2.2-.5 2.9-.8 1-.4 1.9 1.7 3.9 1.5 1.4 3.2 2.5 3.8 2.5 1.6-.1 4.7-2.6 3.9-3.3-.3-.4-.1-1.3.6-2.1.6-.8 1.1-1.8 1-2.2-.5-3.1.3-3.5 5.9-3.2 4.2.2 5.7.7 5.8 1.8 0 2.4 2 6.5 3.8 7.9 1.4 1.2 2.1 1.2 4 .1 2.6-1.4 4-4.6 2.4-5.6-.5-.3-.7-1.2-.4-2 .3-.7.1-1.6-.4-1.9-.5-.3-.9-1.3-.8-2.3 0-.9-.3-2.8-.7-4.2-.4-1.4-.7-3.3-.7-4.2.1-1-.4-2-.9-2.3-.5-.4-.7-1.1-.3-1.6.3-.5 0-1.6-.6-2.4-.6-.8-.9-1.9-.6-2.4.4-.5.1-1.3-.5-1.6-.5-.4-.8-1.3-.5-2 .2-.7.2-1.6-.2-2-.4-.4-.7-1-.8-1.3-.3-2.9-2.6-6.2-4.3-6.2-1.1 0-2.3-.5-2.6-1-.8-1.2-2.8-1.3-4-.1zm4.2 15.3c-.3 1-.1 2.1.4 2.4.5.3.7 1 .3 1.5-.3.5 0 1.7.7 2.5 1.7 2-.4 3.5-4.4 3-2.7-.3-5.1-1.6-2.8-1.6.8 0 1-.7.6-1.9-.3-1.1-.1-2.2.5-2.6.6-.3.8-1 .5-1.5-.3-.5-.1-1.1.5-1.5.5-.3 1-1.5 1-2.7 0-1.7.2-1.9 1.6-.7.8.7 1.3 2.1 1.1 3.1zM107 39.5c-1.4 1.7-2.3 10.6-2.1 20.6.2 6.1-.2 9.9-.8 10.4-.6.3-1.1 2.1-1.1 4 0 2.6.7 3.8 3 5.5 2.8 2 3.1 2 5.4.5 2.4-1.6 2.5-1.7 2-14.7-.3-10.1-.1-12.9.8-12.5.7.2 1.3 1 1.3 1.8s.4 2 .8 2.6c.5.7.6 1.7.2 2.2-.3.5-.1 1.2.5 1.6.6.4.8 1.1.5 1.6-.4.5-.3 1.5.2 2.1.4.7.8 1.9.9 2.6.4 2.5 2.2 3.7 5.3 3.6 3.3-.1 6.2-2.9 5.4-5-.2-.7.1-1.5.6-1.9.6-.3.9-1.1.6-1.6-.4-.5-.3-1.5.2-2.2.7-1.1.9-1.7 1.6-5.2 1.3-6.2 3.4 8.5 2.2 15.4-.9 5.2 0 7.8 3.2 9.4 1.9 1.1 3.1 1.1 5 .3 2.1-1 2.3-1.5 1.7-4.6-.3-1.9-.8-7.1-1.1-11.5-.9-17.7-1.6-23.2-2.9-24.4-.5-.5-2.8-1.1-5.2-1.2-3.8-.3-4.4 0-5.7 2.4-.7 1.5-1.1 2.7-.8 2.7.3 0 0 .7-.7 1.5-.7.9-1 1.8-.7 2.2.4.3.2 1.2-.3 1.9-.6.6-1 1.6-.8 2 .4 1.8-1.3 8.4-2.2 8.4-.6 0-1.1-.6-1.2-1.3-.1-1.2-.3-2.4-.8-4.2-.2-.6-.4-1.5-.5-2L121 51c-.3-1-1.1-4.5-1.2-5.7-.1-.6-1.1-2.4-2.3-3.9-1.6-2-3.1-2.7-5.9-2.8-2.1-.1-4.1.3-4.6.9z" fill="currentColor" />
    <path d="M84.8 38.7c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6zm25.5 0c.9.2 2.3.2 3 0 .6-.3-.1-.5-1.8-.5-1.6 0-2.2.2-1.2.5zm23 0c.9.2 2.5.2 3.5 0 .9-.3.1-.5-1.8-.5-1.9 0-2.7.2-1.7.5zm-27.9 1.7c-.3.8-.4 2.5-.2 3.8.3 1.7.5 1.3.9-1.5.5-3.8.2-4.7-.7-2.3zM89 41.9c0 .6.4 1.3 1 1.6.6.3.7-.1.4-.9-.7-1.8-1.4-2.1-1.4-.7zm52.1 1.7c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3zm-58 9c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3zm59.1 1.4c0 1.4.2 1.9.5 1.2.2-.6.2-1.8 0-2.5-.3-.6-.5-.1-.5 1.3zm-28.9 2.5c0 2.2.2 3 .4 1.7.2-1.2.2-3 0-4-.3-.9-.5.1-.4 2.3zm-44.2 1.1c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3zm52.9-.9c0 1.5 1.9 3.7 2.6 3.1.3-.4-.1-1.4-1-2.3-.9-.9-1.6-1.3-1.6-.8zm-17.8 4.4c-.1 2-.5 5.2-.8 7-.5 2.6-.4 3.1.5 2.3.8-.7 1.1-3.3.8-7-.2-3.3-.4-4.3-.5-2.3zm30.1 4.4c0 3.3.2 4.5.4 2.7.2-1.8.2-4.5 0-6s-.4 0-.4 3.3zm-66.7-2.8c-.6 1.4-.5 1.5.5.6.7-.7 1-1.5.7-1.8-.3-.3-.9.2-1.2 1.2zm45.7 5.3c0 2.5.2 3.5.4 2.2.2-1.2.2-3.2 0-4.5-.2-1.2-.4-.2-.4 2.3zm29.9-.5c0 1.6.2 2.2.5 1.2.2-.9.2-2.3 0-3-.3-.6-.5.1-.5 1.8zM77 71.6c3.4.7 10.8.8 10.3.1-.2-.4-3-.6-6.1-.6-3.1.1-5 .3-4.2.5zm45.8.1c.6.2 1.8.2 2.5 0 .6-.3.1-.5-1.3-.5-1.4 0-1.9.2-1.2.5zM98 78.2c0 .9-.6 1.9-1.2 2.1-1 .4-1 .6 0 .6 1.4.1 2.8-2.6 1.8-3.6-.3-.4-.6.1-.6.9zm-32.3 1.9c.7.7 1.5 1 1.8.7.3-.3-.2-.9-1.2-1.2-1.4-.6-1.5-.5-.6.5zm39 0c.7.7 1.5 1 1.8.7.3-.3-.2-.9-1.2-1.2-1.4-.6-1.5-.5-.6.5zm31 0c.7.7 1.5 1 1.8.7.3-.3-.2-.9-1.2-1.2-1.4-.6-1.5-.5-.6.5z" fill="currentColor" />
    <path d="M69.8 82.7c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6z" fill="currentColor" />
    <path d="M133.1 65.6c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3z" fill="currentColor" fill-opacity=".2" />
    <path d="M114.2 68c0 1.9.2 2.7.5 1.7.2-.9.2-2.5 0-3.5-.3-.9-.5-.1-.5 1.8z" fill="currentColor" fill-opacity=".09" />
    <g transform="translate(15.000000, 3.000000)">
      <g transform="translate(40.000000, 3.000000)">
        <polygon
          id="Shape"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="105.4327719506772,72.96100594190538 72.9610059419054,105.4327719506772 27.038994058094616,105.4327719506772 -5.432771950677207,72.9610059419054 -5.432771950677214,27.03899405809462 27.03899405809458,-5.432771950677193 72.9610059419054,-5.4327719506772 105.43277195067719,27.038994058094577"
        />
      </g>
    </g>
  </svg>
);

export default IconLogo;
