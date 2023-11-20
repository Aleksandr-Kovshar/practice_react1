import PropTypes from "prop-types";
import css from "./EventBord.module.css";
export const EventBord = ({ events }) => {
  console.log(events);
  return (
    <div className={css.eventBord}>
      {events.map((event) => (
        <div key={event.name}>{event.name}</div>
      ))}
    </div>
  );
};
