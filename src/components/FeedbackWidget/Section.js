import PropTypes from 'prop-types';
import css from './FeedbackWidget.module.css';

const Section = ({ title, children }) => {
    return (
    <div className={css.box}>
        <h2 className={css.application}>{title}</h2>
        {children}
    </div>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}

export default Section;