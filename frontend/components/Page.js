import PropTypes from 'prop-types';

export default function Page({ children }) {
  return (
    <div>
      <h2>I'm the page component</h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
