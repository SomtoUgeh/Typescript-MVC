import React from "react";
import { Link } from "@reach/router";
import { Routes } from "index";

interface Props {
  path: Routes;
}

const FilterLink: React.FC<Props> = ({ path }) => {
  return (
    <ul className="filters">
      <li>
        <Link className={path === "/" ? "selected" : ""} to="/">
          All
        </Link>
      </li>
      <li>
        <Link className={path === "/active" ? "selected" : ""} to="/active">
          Active
        </Link>
      </li>
      <li>
        <Link className={path === "/completed" ? "selected" : ""} to="/completed">
          Completed
        </Link>
      </li>
    </ul>
  );
};

export default FilterLink;
