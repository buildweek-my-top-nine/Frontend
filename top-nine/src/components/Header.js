import React from "react";
import TabNav from './TabNav'
import "semantic-ui-css/semantic.min.css";

export default function Header() {
  return (
    <div className='NavBar'>
      <h1 className='top-nine'>Top 9</h1>

      <TabNav />

    </div>
  );
}