import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "../components/layout.component";
import { useGetSingleEventQuery } from "../modules/events/api/repository";
import {
  getChoosenEventId,
  getEventConfrimationCode,
  getSelectedDate,
  getSelectedQuantity,
  getSelectedSector,
} from "../modules/events/store/selectors";
import { cleanEventOrderState } from "../modules/events/store/slice";

interface SuccessPageProps {}

export const SuccessPage: FC<SuccessPageProps> = ({}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const choosenEventId = useSelector(getChoosenEventId);
  const selectedDate = useSelector(getSelectedDate);
  const selectedSector = useSelector(getSelectedSector);
  const selectedQuantity = useSelector(getSelectedQuantity);
  const confirmationCode = useSelector(getEventConfrimationCode);
  useEffect(() => {
    if (
      !choosenEventId ||
      !selectedDate ||
      !selectedSector ||
      !selectedQuantity ||
      !confirmationCode
    ) {
      navigate("/", { replace: true });
    }
  }, []);
  useEffect(() => {
    return () => {
      dispatch(cleanEventOrderState());
    };
  }, []);

  const event = useGetSingleEventQuery(choosenEventId || 0, {
    skip: !choosenEventId,
  });

  const eventDate = new Date(selectedDate?.date || 0);
  const evnetDateFormatted = new Intl.DateTimeFormat().format(eventDate);

  return (
    <Layout>
      <div className="jumbotron">
        <h3>
          <strong>Congratulations! Order successful</strong>
        </h3>
        <hr />
        <h5>
          <strong>Order Details</strong>
        </h5>
        <hr />
        <div className="media">
          <div className="media-left">
            {" "}
            <img
              src={event.data?.thumb}
              width="150"
              className="media-object"
            />{" "}
          </div>
          <div className="media-body">
            <h4 className="media-heading">
              <strong>{event.data?.name}</strong>
            </h4>
            <strong>Where:</strong> {event.data?.venue.name},{" "}
            {event.data?.venue.address}
            <br />
            <strong>When:</strong> {evnetDateFormatted}
            <br />
            <strong>Sector:</strong> {selectedSector?.name}
            <br />
            <strong>Quantity:</strong> {selectedQuantity}
            <br />
            <strong>Confirmation Code:</strong>
            {confirmationCode}{" "}
          </div>
        </div>
        <hr />
        <div className="text-right">
          <Link className="btn btn-primary btn-lg" to="/" role="button">
            Back to home
          </Link>
        </div>
      </div>
    </Layout>
  );
};
