import React from "react";
import styled from "./navbar.module.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className={styled.headerWrapper}>
      <div className="container">
        <div className={styled.header}>
          <ul>
            <li>
              <Link to={"/"}>لیست مقالات</Link>
            </li>
            <li>
              <Link to={"/create-article"}>مقاله جدید</Link>
            </li>
            <li>
              <Link to={"/about"}>درباره</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
