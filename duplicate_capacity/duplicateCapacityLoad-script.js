// Auto-generated by the postman-to-k6 converter

import "./libs/shim/core.js";

export let options = {
  vus: 5,
  duration: '30s',
  ext: {
    loadimpact: {
      projectID: 3630700,
      name: "DUPLICATE CAPACITY LOAD"
    }
  }
};

const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options
});

export default function () {
  postman[Request]({
    name: "duplicate-capacity-commitment",
    id: "1757bd98-8c7f-406a-b649-0b7dc5c3ef48",
    method: "POST",
    address: "https://st-lms-api.furlenco.com/api/v1/capacity-commitment",
    data:
      '{\n  "spatialRequirementInCft": "30",\n  "temporalRequirementInMinutes": 10,\n  "sharedTemporalRequirementInMinutes": 180,\n  "deliveryCapacityCounter": 22,\n  "pickupCapacityCounter": 22,\n  "entityId": 6734,\n  "pincode": 560075,\n  "fulfillmentCenterId": 1,\n  "vertical": "FURLENCO_RENTAL",\n  "carrier": "GARUDA",\n  "selectedPromiseDate": "2023-04-02",\n  "logisticsType": "DELIVERY",\n  "addressId": 577957,\n  "entityType": "ITEM"\n}',
    headers: {
      accept: "*/*",
      "Content-Type": "application/json"
    },
    post(response) {
      pm.test("Status code is 200", function () {
        pm.response.to.have.status(200);
      });
      pm.test("Status code is 409", function () {
        pm.response.to.have.status(409);
      });
    }
  });
}