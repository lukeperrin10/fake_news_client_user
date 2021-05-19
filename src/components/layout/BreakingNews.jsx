import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'semantic-ui-react';
import { setRating } from '../../modules/Articles';

const BreakingNews = ({ firstArticle: article }) => {
  if (article) {
    return (
      <Link
        to={`/articles/${article.id}`}
        className='breaking-news box-shadow'
        data-cy='breaking-news'>
        <img
          data-cy='breaking-img'
          className='breaking-img'
          src={article.image}
          alt='Breaking news attachment'
        />
        <div className='breaking-content'>
          <h2 className='breaking-title' data-cy='breaking-title'>
            {article.title}
          </h2>
          <h4 data-cy='breaking-teaser'>{article.teaser}</h4>
          <Rating
            data-cy='breaking-rating'
            defaultRating={setRating(article.rating)}
            maxRating={5}
            disabled
            icon='star'
            size='tiny'
          />
          <p className='breaking-date' data-cy='breaking-date'>
            {article.date}
          </p>
        </div>
      </Link>
    );
  }
  return '';
};

export default BreakingNews;
