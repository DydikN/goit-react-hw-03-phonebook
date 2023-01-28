import PropTypes from 'prop-types';

const Filter = ({ filter, value }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={filter}
        value={value}
      />
    </>
  );
};

export default Filter;
Filter.prototype = {
  filter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
