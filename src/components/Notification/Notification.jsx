import PropTypes from 'prop-types';
import { Text } from './Notification.styled';

const Notification = ({ message }) => {
  return <Text>{message}</Text>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
