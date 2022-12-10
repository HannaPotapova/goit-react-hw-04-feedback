import PropTypes from 'prop-types';
import css from './FeedbackWidget.module.css';

const Statistics = ({ onStateGood, onStateNeutral, onStateBad, onStateTotal, onStatePercentage }) => (
    <>
        <p className={css.title}>Good: {onStateGood}</p>
        <p className={css.title}>Neutral: {onStateNeutral}</p>
        <p className={css.title}>Bad: {onStateBad}</p>
        <p className={css.title}>Total: {onStateTotal()}</p>
        <p className={css.title}>Positive feedback: {onStatePercentage()}%</p>
    </>
);

Statistics.propTypes = {
    onStateGood: PropTypes.string,
    onStateNeutral: PropTypes.string,
    onStateBad: PropTypes.string,
    onStateTotal: PropTypes.func,
    onStatePercentage: PropTypes.func,
}

export default Statistics;