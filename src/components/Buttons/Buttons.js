import PropTypes from 'prop-types';
import s from './Buttons.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.Buttons}>
      {' '}
      {options.map(button => {
        return (
          <button
            key={button}
            className={s.item}
            name={button}
            onClick={() => {
              onLeaveFeedback(button);
            }}
            style={{ marginRight: '10px' }}
          >
            {' '}
            {button}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
