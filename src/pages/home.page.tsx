import { FC, useEffect, useMemo, useState } from "react";
import { useGetEventsQuery } from "../modules/events/api/repository";
import { EventsList } from "../modules/events/components/events-list.componen";
import { Layout } from "../components/layout.component";
import InfiniteScroll from "react-infinite-scroll-component";
import { Event } from "../modules/events/api/dto/get-event-response.dto";

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  const [page, setPage] = useState(0);
  const events = useGetEventsQuery(page);
  const [allEvents, setAllEvents] = useState<Event[]>([]);
  useEffect(() => {
    if (events.data) {
      setAllEvents((allEvents) => [...allEvents, ...(events.data || [])]);
    }
  }, [events.data]);

  if (events.isLoading) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }

  const handleNextScroll = () => {
    setPage((page) => page + 1);
  };

  return (
    <Layout>
      <h4>Select an event</h4>
      <hr />
      <InfiniteScroll
        dataLength={allEvents.length}
        next={handleNextScroll}
        hasMore={page < 10}
        loader={<p>...</p>}
        className="container-fluid"
        style={{ overflow: "visible" }}
      >
        <EventsList events={allEvents} />
      </InfiniteScroll>
    </Layout>
  );
};
