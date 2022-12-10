import PropTypes from 'prop-types';
import css from './FeedbackWidget.module.css';

const Notification = ({ message}) => {
    return (
    <>
        <h2 className={css.application}>{message}</h2>
    </>
    )
}

Notification.propTypes = {
    message: PropTypes.string,
}

export default Notification;