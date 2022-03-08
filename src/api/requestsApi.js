import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/requests/";

export function getRequests() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getRequestsByReqId(requestId) {
  return fetch(baseUrl + "?id=" + requestId)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((requests) => {
        return requests[0]; // should only find one requests for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function getRequestsByResearcher(researcherName) {
  return fetch(baseUrl + "?researcher_name=" + researcherName)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((requests) => {
        return requests[0]; // should only find one requests for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function getRequestsByStatus(requestStatus) {
  return fetch(baseUrl + "?request_status=" + requestStatus)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((requests) => {
        return requests[0]; // should only find one requests for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function saveRequests(request) {
  return fetch(baseUrl, {
    method: "POST", // POST for create, PUT to update when id already exists.
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteRequests(requestId) {
  return fetch(baseUrl + requestId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
