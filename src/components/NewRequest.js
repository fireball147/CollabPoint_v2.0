import React, { useState } from "react";
import InputField from "./common/InputField";
import SelectInput from "./common/SelectInput";
import * as requestApi from "../api/requestsApi";
import { toast } from "react-toastify";

function NewRequest() {
  const [request, setRequest] = useState({
    requestorName: "",
    nbkId: "",
    phoneNo: "",
    location: "",
    requestorEmail: "",
    addlRecipients: "",
    hierarchyCode: "",
    requestedDueDate: "",
    dealCode: "",
    clientName: "",
    requestType: "",
    sectorDesk: "",
    requestInstructions: "",
    attachedFiles: "",
  });

  const [expandedText, setExpandedText] = useState(request.requestInstructions);
  function handleChange({ target }) {
    setRequest({ ...request, [target.name]: target.value });
  }

  function handleExpandedTextChange({ target }) {
    setExpandedText(target.value);
  }

  function handleExpandedTextClose({ target }) {
    setRequest({ ...request, requestInstructions: expandedText });
  }

  function handleExpandedTextOpen({ target }) {
    setExpandedText(request.requestInstructions);
  }

  function handleSubmit(event) {
    event.preventDefault();
    requestApi.saveRequests(request);
    toast.success("Request created");
  }

  return (
    <div className="container content-page">
      <p className="form-group">Raise New Request</p>
      <form method="post">
        <InputField
          id="requestorName"
          label="Requestor Name:"
          name="requestorName"
          onChange={handleChange}
          value={request.requestorName}
        />
        <InputField
          id="nbkId"
          label="NBK ID:"
          name="nbkId"
          onChange={handleChange}
          value={request.nbkId}
        />
        <InputField
          id="phoneNo"
          label="Phone No:"
          name="phoneNo"
          onChange={handleChange}
          value={request.phoneNo}
        />
        <InputField
          id="location"
          label="Location:"
          name="location"
          onChange={handleChange}
          value={request.location}
        />
        <InputField
          id="requestorEmail"
          label="Requestor Email:"
          type="email"
          name="requestorEmail"
          onChange={handleChange}
          value={request.requestorEmail}
        />
        <InputField
          id="addlRecipients"
          label="Additional Recipients:"
          name="addlRecipients"
          onChange={handleChange}
          value={request.addlRecipients}
        />
        <InputField
          id="hierarchyCode"
          label="Hierarchy Code:"
          name="hierarchyCode"
          onChange={handleChange}
          value={request.hierarchyCode}
        />
        <InputField
          id="requestedDueDate"
          label="Requested Due Date:"
          type="datetime-local"
          name="requestedDueDate"
          onChange={handleChange}
          value={request.requestedDueDate}
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
          id="requestType"
          label="Request Type:"
          name="requestType"
          onSelectChange={handleChange}
          optionsArray={[
            { id: 1, name: "Business Information" },
            { id: 2, name: "Dealogic" },
            { id: 3, name: "Sector Focused" },
            { id: 4, name: "Region Focused" },
            { id: 5, name: "Corp Banking" },
            { id: 6, name: "ECM Request" },
            { id: 7, name: "DCM Request" },
            { id: 8, name: "Manderin" },
          ]}
          value={request.requestType}
        />
        <SelectInput
          id="sectorDesk"
          label="Sector Desk:"
          name="sectorDesk"
          onSelectChange={handleChange}
          optionsArray={[
            { id: 1, name: "Natural Resources" },
            { id: 2, name: "Healthcare" },
            { id: 3, name: "TMT" },
            { id: 4, name: "REGL" },
            { id: 5, name: "Consumer Retail" },
            { id: 6, name: "Industrial" },
            { id: 7, name: "Financial Institution Group" },
          ]}
          value={request.sectorDesk}
        />
        <div className="form-group col-xs-12">
          <label htmlFor="requestInstructions">Request Instructions:</label>
          <button
            className="pull-right btn btn-link"
            data-toggle="modal"
            data-target="#expandedTextModal"
            type="button"
            onClick={handleExpandedTextOpen}
          >
            Expand (+)
          </button>
          <div className="full-row">
            <textarea
              id="requestInstructions"
              name="requestInstructions"
              className="form-control"
              onChange={handleChange}
              value={request.requestInstructions}
            />
            <label className="form-label full-row">
              <input type="checkbox" name="dataCertification" required /> &nbsp;
              I certify that the request description or the data attached does
              not contain any non-public data, including MNPI
            </label>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label full-row">Attach File(s):</label>
          <input id="attachedFiles" name="attachedFiles" type="file"></input>
        </div>
        <div className="form-group col-xs-12 text-center actionButton">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button className="btn btn-primary" type="reset">
            Reset
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
                <textarea
                  id="requestInstructions"
                  name="requestInstructions"
                  className="form-control"
                  onChange={handleExpandedTextChange}
                  value={expandedText}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={handleExpandedTextClose}
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

export default NewRequest;
