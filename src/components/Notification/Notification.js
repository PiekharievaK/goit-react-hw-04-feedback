import PropTypes from 'prop-types';
import s from './Notification.module.css';

function notification({ message }) {
  return <p className={s.Text}>{message}</p>;
}
notification.propTypes = {
  message: PropTypes.string,
};

notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default notification;
