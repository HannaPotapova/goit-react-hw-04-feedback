import PropTypes from 'prop-types';
import css from './FeedbackWidget.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={css.box_feedback}>
            {options.map(option => 
                <button className={css.button} key={option} type="button" onClick={()=>onLeaveFeedback(option)}>{option}</button>)}
        </div>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
}

export default FeedbackOptions;