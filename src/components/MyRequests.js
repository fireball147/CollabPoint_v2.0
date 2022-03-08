import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRequests } from "../api/requestsApi";
import SelectInput from "./common/SelectInput";

function MyRequests() {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    getRequests().then((_requests) => setRequests(_requests));
  }, []);
  return (
    <div className="container content-page">
      <p>My Requests</p>
      <SelectInput
        id="myRequestSelector"
        label="Request Status:"
        name="myRequestSelector"
        optionsArray={[
          { id: 0, name: "All Requests" },
          { id: 1, name: "Active" },
          { id: 2, name: "Partial" },
          { id: 3, name: "Submitted" },
          { id: 4, name: "Closed" },
          { id: 5, name: "On Hold" },
        ]}
        value=""
      />
      <table className="table">
        <thead>
          <tr>
            <th>Request Number</th>
            <th>Request Status</th>
            <th>Requestor Name</th>
            <th className="visible-lg visible-md">Deal Code</th>
            <th className="visible-lg visible-md">Submitted Date</th>
            <th>Actual Due Date</th>
            <th>Completed Date</th>
            <th>Request Description</th>
            <th className="visible-lg visible-md">Parent Request</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => {
            return (
              <tr key={request.id}>
                <td>
                  <Link to={"../requests/" + request.id}>{request.id}</Link>
                </td>
                <td>{request.requestStatus}</td>
                <td>{request.requestorName}</td>
                <td className="visible-lg visible-md">{request.dealCode}</td>
                <td className="visible-lg visible-md">
                  {request.submittedDate}
                </td>
                <td>{request.actualDueDate}</td>
                <td>{request.completedDate}</td>
                <td>{request.requestedInstructions}</td>
                <td className="visible-lg visible-md">
                  {
                    <Link to={"../requests/" + request.parentReq}>
                      {request.parentReq}
                    </Link>
                  }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MyRequests;
