import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRequests } from "../api/requestsApi";

function RequestsRaised() {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    getRequests().then((_requests) => setRequests(_requests));
  }, []);

  return (
    <div className="container content-page">
      <p>Request Raised</p>

      <table className="table">
        <thead>
          <tr>
            <th>Request Number</th>
            <th>Request Status</th>
            <th>Requestor Name</th>
            <th>Researcher Name</th>
            <th>Deal Code</th>
            <th>Submitted Date</th>
            <th>Actual Due Date</th>
            <th>Completed Date</th>
            <th>Request Description</th>
            <th>Parent Request</th>
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
                <td>{request.researcherName}</td>
                <td>{request.dealCode}</td>
                <td>{request.submittedDate}</td>
                <td>{request.actualDueDate}</td>
                <td>{request.completedDate}</td>
                <td>{request.requestInstructions}</td>
                <td>
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

export default RequestsRaised;
