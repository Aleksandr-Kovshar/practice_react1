import PropTypes from "prop-types";
import css from "./Event.module.css";

export const Event = ({ name, location, speaker, type, start, end }) => {
  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <i className={css.icon}>{location}</i>
      </p>
      <p className={css.info}>
        <i className={css.icon}>{speaker}</i>
      </p>
      <p className={css.info}>
        <i className={css.icon}>{start}</i>
      </p>
      <p className={css.info}>
        <i className={css.icon}>Duration</i>
      </p>
      <span className="css.chip free|paid|vip"></span>
    </div>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  time: {
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
  },
};
