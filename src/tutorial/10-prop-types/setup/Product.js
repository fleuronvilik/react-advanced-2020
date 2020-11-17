import React from 'react';
import PropTypes from 'prop-types';

import DEFAULT_IMG from '../../../assets/default-image.jpeg'

const Product = ({image, name, price}) => {
  return (
    <article className='product'>
      <img src={image.url} alt={name}/>
      <h4>{name}</h4>
      <p>${price}</p>
    </article>
  );
};

Product.propTypes = {
  name : PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.number//.isRequired,
};
Product.defaultProps = {
  name: "default name",
  price: 3.99,
  image: {url: DEFAULT_IMG}
}

export default Product;
