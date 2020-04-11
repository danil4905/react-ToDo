import React, { useLayoutEffect } from "react";

export const Notes = ({ notes }) => {
  return (
    <ul className="list-group">
      {notes.map((n) => (
        <li className="list-group-item" key={n.id}>
          {n.title}
          <button type="button" className="btn btn-outline-danger">&times;</button>
        </li>
        
      ))}
    </ul>
  );
};
