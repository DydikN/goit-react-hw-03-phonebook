import PropTypes from 'prop-types';

import styles from './contact-list.module.css';

const ContactList = ({ filter, deleteContact }) => {
  return (
    <ul className={styles.list}>
      {filter.map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          <p className={styles.text}>
            {name}: {number}
          </p>
          <button
            className={styles.button}
            type="button"
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
};
