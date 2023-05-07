import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/layout.component";
import { useGetSingleEventQuery } from "../modules/events/api/repository";
import { getChosenEventId } from "../modules/events/store/selectors";

interface OrderPageProps {}

export const OrderPage: FC<OrderPageProps> = ({}) => {
  const navigate = useNavigate();

  const choosenEventId = useSelector(getChosenEventId);
  useEffect(() => {
    if (!choosenEventId) {
      // navigate("/", { replace: true });
    }
  }, []);

  const event = useGetSingleEventQuery(choosenEventId || 0, {
    skip: !choosenEventId,
  });

  return (
    <Layout>
      <h4>Buying tickets for {event.data?.name}</h4>
      <hr />
      <div className="row">
        <div className="col-sm-offset-1 col-sm-10">
          <h4>
            <strong>Your Details</strong>
          </h4>
          <hr />
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="">Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="">Phone</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="">Address</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <hr />
          <h4>
            <strong>Payment Details</strong>
          </h4>
          <hr />
          <div className="row">
            <div className="col-xs-12">
              <div className="form-group">
                <label htmlFor="">Cardholder Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="">Card Number</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="">Card Expiration</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-sm-2">
              <div className="form-group">
                <label htmlFor="">CVV</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-xs-6">
          {" "}
          <a href="event.html" className="btn btn-default btn-block btn-lg">
            Back
          </a>{" "}
        </div>
        <div className="col-xs-6">
          {" "}
          <a href="success.html" className="btn btn-primary btn-block btn-lg">
            Pay
          </a>{" "}
        </div>
      </div>
      <hr />
    </Layout>
  );
};
