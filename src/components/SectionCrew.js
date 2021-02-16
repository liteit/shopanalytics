import React from 'react';
import _ from 'lodash';

import {htmlToReact, withPrefix} from '../utils';

export default class SectionReviews extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className={'block reviews-block bg-' + _.get(section, 'background', null) + ' outer'}>
              <div className="block-header inner-small">
                {_.get(section, 'title', null) && (
                <h2 className="block-title">{_.get(section, 'title', null)}</h2>
                )}
                {_.get(section, 'subtitle', null) && (
                <p className="block-subtitle">
                  {htmlToReact(_.get(section, 'subtitle', null))}
                </p>
                )}
              </div>
              {_.get(section, 'crews', null) && (
              <div className="inner">
                <div className="grid">
                  {_.map(_.get(section, 'crews', null), (review, review_idx) => (
                  <h2 key={review_idx} className="cell review">
                    <div className="card">
                      <p className="crew-text">{htmlToReact(_.get(review, 'content', null))}</p>
                      <footer className="crew-footer">
                        {_.get(review, 'avatar', null) && (
                        <img className="crew-avatar" src={withPrefix(_.get(review, 'avatar', null))} alt={_.get(review, 'avatar_alt', null)}/>
                        )}
                        <cite className="crew-author">{_.get(review, 'author', null)}</cite>
                      </footer>
                    </div>
                  </h2>
                  ))}
                </div>
              </div>
              )}
            </section>
        );
    }
}
