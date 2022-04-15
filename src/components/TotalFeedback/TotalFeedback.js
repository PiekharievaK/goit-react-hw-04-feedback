import PropTypes from 'prop-types';
import s from './TotalFeedback.module.css';

function Statistics({ options, totalValue, percentageValue }) {
  return (
    <ul className={s.list}>
      {Object.entries(options).map(option => {
        const objKey = option[0];
        const value = option[1];
        return (
          <li key={objKey} className={s.grades}>
            {objKey}: <span className={s[objKey]}>{value}</span>
          </li>
        );
      })}
      <li className={s.totalField}>Total feedback: {totalValue}</li>
      <li className={s.totalField}>
        Positive feedback: {percentageValue ? percentageValue : 0} %
      </li>
    </ul>
  );
}
Statistics.propTypes = {
  options: PropTypes.object.isRequired,
  totalValue: PropTypes.number.isRequired,
  percentageValue: PropTypes.number.isRequired,
};

export default Statistics;
