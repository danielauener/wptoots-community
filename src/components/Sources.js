import React from 'react';
import sources from '../assets/sources.json';

export default function Sources() {
  return (
    <div className="sources two">
      {sources.map((hashtag) => {
        return (
          <div>
            <h3>Hashtag: #{hashtag.tag}</h3>
            <ul className="row">
              {hashtag.sources.map((source) => {
                return (
                  <li className="col-4 col-12-mobile">
                    <div className="source-url" title={source.url}>
                      {source.url}
                    </div>
                    <div className="source-desc">{source.description}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
