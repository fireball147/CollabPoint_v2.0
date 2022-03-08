import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequestsByReqId } from "../../api/requestsApi";
import InputField from "../common/InputField";
import SelectInput from "../common/SelectInput";
import { Link } from "react-router-dom";

function RequestDetails(props) {
  const { request_id } = useParams();

  const [request, setRequest] = useState({
    id: "",
    requestStatus: "",
    requestorName: "",
    nbkId: "",
    phoneNo: "",
    requestorLocation: "",
    emailId: "",
    addlRecipients: "",
    submittedDate: "",
    actualDueDate: "",
    requestedDueDate: "",
    completedDate: "",
    dealCode: "",
    clientName: "",
    workCategory: "",
    tatCategory: "",
    requestedInstructions: "",
    addlComments: "",
  });

  function handleChange({ target }) {
    setRequest({ ...request, [target.name]: target.value });
  }

  useEffect(() => {
    getRequestsByReqId(request_id).then((_request) => setRequest(_request));
  }, [request_id]);

  function createStatusButton() {
    if (request.requestStatus === "Submitted") {
      return (
        <>
          <button className="btn btn-primary" type="button">
            On Hold
          </button>
          <button className="btn btn-primary" type="button">
            Start Activity
          </button>
          <button className="btn btn-primary" type="button">
            Complete Request
          </button>
        </>
      );
    } else if (request.requestStatus === "Active") {
      return (
        <>
          <button className="btn btn-primary" type="button">
            On Hold
          </button>
          <button className="btn btn-primary" type="button">
            End Activity
          </button>
          <button className="btn btn-primary" type="button">
            Complete Request
          </button>
        </>
      );
    } else if (request.requestStatus === "Partial") {
      return (
        <>
          <button className="btn btn-primary" type="button">
            On Hold
          </button>
          <button className="btn btn-primary" type="button">
            Start Activity
          </button>
          <button className="btn btn-primary" type="button">
            Complete Request
          </button>
        </>
      );
    } else if (request.requestStatus === "On Hold") {
      return (
        <>
          <button className="btn btn-primary" type="button">
            Off Hold
          </button>
          <button className="btn btn-primary" type="button">
            Start Activity
          </button>
          <button className="btn btn-primary" type="button">
            Complete Request
          </button>
        </>
      );
    } else {
      return null;
    }
  }

  return (
    <div className="container content-page">
      <p className="form-group">
        Request Details
        <button
          type="button"
          id="request-options"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#collapsable-options"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle navigation</span>
          <img src="/images/gear.svg" alt="Request Options" />
        </button>
        <div
          id="collapsable-options"
          className="collapse navbar-collapse navbar-right"
        >
          <ul className="nav navbar-nav ">
            <li>
              <Link
                className="btn btn-link"
                to={"../requests/" + request_id + "/recurrence"}
              >
                Recurrence
              </Link>
            </li>
            <li className="visible-lg visible-md visible-sm">{" | "}</li>
            <li>
              <Link
                className="btn btn-link"
                to={"../requests/" + request_id + "/recurrence"}
              >
                Associated Requests
              </Link>
            </li>
            <li className="visible-lg visible-md visible-sm">{" | "}</li>
            <li>
              <Link
                className="btn btn-link"
                to={"../requests/" + request_id + "/recurrence"}
              >
                Request History
              </Link>
            </li>
            <li className="visible-lg visible-md visible-sm">{" | "}</li>
            <li>
              <Link
                className="btn btn-link"
                to={"../requests/" + request_id + "/recurrence"}
              >
                Audit Trail
              </Link>
            </li>
            <li className="visible-lg visible-md visible-sm">{" | "}</li>
            <li>
              <Link
                className="btn btn-link"
                to={"../requests/" + request_id + "/recurrence"}
              >
                Send Email
              </Link>
            </li>
          </ul>
        </div>
      </p>
      <form method="post">
        <InputField
          id="id"
          label="Request Number:"
          name="id"
          onChange={handleChange}
          value={request.id}
        />
        <InputField
          id="requestStatus"
          label="Request Status:"
          name="requestStatus"
          onChange={handleChange}
          value={request.requestStatus}
        />
        <InputField
          id="requestorName"
          label="Requestor Name:"
          name="requestorName"
          onChange={handleChange}
          value={request.requestorName}
        />
        <InputField
          id="nbkId"
          label="Employee ID:"
          name="nbkId"
          onChange={handleChange}
          value={request.nbkId}
        />
        <InputField
          id="phoneNo"
          label="Phone Number:"
          name="phoneNo"
          onChange={handleChange}
          value={request.phoneNo}
        />
        <InputField
          id="requestorLocation"
          label="Location:"
          name="requestorLocation"
          onChange={handleChange}
          value={request.requestorLocation}
        />
        <InputField
          id="emailId"
          label="Email ID:"
          name="emailId"
          onChange={handleChange}
          value={request.emailId}
        />
        <InputField
          id="addlRecipients"
          label="Additional Recipients:"
          name="addlRecipients"
          onChange={handleChange}
          value={request.addlRecipients}
        />
        <InputField
          id="submittedDate"
          label="Submitted Date:"
          name="submittedDate"
          type="datetime-local"
          onChange={handleChange}
          value={request.submittedDate}
        />
        <InputField
          id="actualDueDate"
          label="Actual Due Date:"
          name="actualDueDate"
          type="datetime-local"
          onChange={handleChange}
          value={request.actualDueDate}
        />
        <InputField
          id="requestedDueDate"
          label="Requested Due Date:"
          name="requestedDueDate"
          type="datetime-local"
          onChange={handleChange}
          value={request.requestedDueDate}
        />
        <InputField
          id="completedDate"
          label="Completed Date:"
          type="datetime-local"
          name="completedDate"
          onChange={handleChange}
          value={request.completedDate}
        />
        <InputField
          id="dealCode"
          label="Deal Code:"
          name="dealCode"
          onChange={handleChange}
          value={request.dealCode}
        />
        <InputField
          id="clientName"
          label="Client Name:"
          name="clientName"
          onChange={handleChange}
          value={request.clientName}
        />
        <SelectInput
          id="workCategory"
          label="Work Category:"
          name="workCategory"
          onChange={handleChange}
          optionsArray={[
            { id: 1, name: "Profiles" },
            { id: 2, name: "Comps" },
            { id: 3, name: "Benchmarking" },
            { id: 4, name: "Analytic" },
            { id: 5, name: "Misc." },
          ]}
          value={request.workCategory}
        />
        <SelectInput
          id="tatCategory"
          label="TAT Category:"
          name="tatCategory"
          onChange={handleChange}
          optionsArray={[
            { id: 1, name: "Delivered on-time" },
            { id: 2, name: "Non-business hour" },
            { id: 3, name: "Minor delay (1hr -4hrs)" },
            { id: 4, name: "Delay due to heavy pipeline" },
            { id: 5, name: "Delay due to incorrect/changed scope" },
          ]}
          value={request.tatCategory}
        />
        <div className="form-group col-md-6 col-xs-12">
          <label htmlFor="requestedInstructions">Request Instructions</label>
          <button
            className="pull-right btn btn-link"
            data-toggle="modal"
            data-target="#expandedTextModal"
            type="button"
          >
            Expand (+)
          </button>
          <div className="full-row">
            <textarea
              id="requestedInstructions"
              className="form-control"
              name="requestedInstructions"
              onChange={handleChange}
              value={request.requestedInstructions}
            />
          </div>
        </div>
        <div className="form-group col-md-6 col-xs-12">
          <label htmlFor="addlComments">Additional Comments</label>
          <button
            className="pull-right btn btn-link"
            data-toggle="modal"
            data-target="#expandedTextModal"
            type="button"
          >
            Expand (+)
          </button>
          <div className="full-row">
            <textarea
              id="addlComments"
              className="form-control"
              name="addlComments"
              onChange={handleChange}
              value={request.addlComments}
            />
          </div>
        </div>
        <div className="form-group col-xs-12 text-center actionButton">
          {/* Check if other options in copy requests are needed or not */}
          <button className="btn btn-primary" type="submit">
            Copy Request
          </button>
          {createStatusButton()}
          <button className="btn btn-primary" type="button">
            Attached Files
          </button>
          <button className="btn btn-primary" type="button">
            Save
          </button>
          <button className="btn btn-primary" type="button">
            Close
          </button>
        </div>
      </form>
      <div
        className="modal fade"
        id="expandedTextModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                <b>Request Instructions</b>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </h5>
            </div>
            <div className="modal-body">
              <div className="full-row">
                <textarea id="requestInstructions" name="requestInstructions" />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestDetails;
