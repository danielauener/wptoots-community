import React from "react";
import Scrollspy from "react-scrollspy";
import Scroll from "../Scroll";
import { Link } from "gatsby";

export default function Nav({ sections = [] }) {
  return (
    <nav id="nav">
      <ul>
        <Scrollspy
          items={sections.map((s) => s.id)}
          currentClassName="active"
          offset={-300}
        >
          {sections.map((s) => {
            return s.id === "back" ? (
              <li key={s.id}>
                <a href="/" id="top-link">
                  <span className={`icon ${s.icon}`}>{s.name}</span>
                </a>
              </li>
            ) : (
              <li key={s.id}>
                <Scroll type="id" element={s.id}>
                  <a href={`#${s.id}`} id="top-link">
                    <span className={`icon ${s.icon}`}>{s.name}</span>
                  </a>
                </Scroll>
              </li>
            );
          })}
        </Scrollspy>
      </ul>
    </nav>
  );
}
