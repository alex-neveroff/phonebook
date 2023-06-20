import PropTypes from 'prop-types';
import { NotificationStyled } from './Notification.styled';

const Notification = ({ message }) => {
  return (
    <NotificationStyled>
      <p className="notifivation-text">{message}</p>
    </NotificationStyled>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
