import $ from "jquery";
import _ from "lodash";
import "body.css";

let count = 0;
const updateCounter = () => {
  count += 1;
  $("#count").append(`${count} clicks on the button`);
};

$(function () {
  $("body").append("<button>Click here to get started</button>");
  $("body").append("<p>Dashboard data for the students</p>");
  $("button").on("click", _.debounce(updateCounter, 500));
});
