import React from "react";
import "./../Form/style.css"
export const ArticleListItem = props => (
  <div>
  <li className="list-group-item">
    {props.children}
  </li>
  <br/>
  </div>
);
