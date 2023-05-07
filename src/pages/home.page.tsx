import { FC } from "react";
import { Link } from "react-router-dom";
import { EventsList } from "../components/events-list.componen";

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div className="container">
      <h3>
        <strong>
          <Link to="/">Challenge Tickets</Link>
        </strong>
      </h3>
      <hr />
      <h4>Select an event</h4>
      <hr />
      <EventsList />
    </div>
  );
};
