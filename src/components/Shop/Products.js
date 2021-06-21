import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: 'My first book',
    description: 'This is my first book',
    price: 6
  },
  {
    id: 2,
    title: 'The quick brown fox',
    description: 'This is my the quick brown fox',
    price: 5
  },
  {
    id: 3,
    title: 'La la la la',
    description: 'La la description',
    price: 3
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(item => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
