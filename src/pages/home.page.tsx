import { FC } from "react";
import { Link } from "react-router-dom";
import { EventCard } from "../components/event-card.component";

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
      <div className="row">
        <EventCard
          eventId={1}
          thumb="https://cdn.boletius.com/images/1521202649764-test-pos-DA32F77A-C542-41B7-81C4-43091924255B.jpeg"
        />
      </div>
    </div>
  );
};
