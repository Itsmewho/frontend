/** @format */

import styles from './Contact.module.css';

export const metadata = {
  title: 'Joanne',
  description: 'hello world',
};

function Contact(props) {
  const { products } = props;
  return (
    <>
      <section className="page-wrapper">
        <ul>
          {/* {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))} */}
        </ul>
      </section>
    </>
  );
}

export default Contact;
