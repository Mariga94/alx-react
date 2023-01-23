import $ from "jquery";
import _ from "lodash";

$("p").add("<p>Holberton Dashboard</p>").appendTo(document.body);
$("p").add("<p>Dashboard data for the students</p>").appendTo(document.body);
$("p:nth-child(2)")
  .add("<button>Click here to get started</button>")
  .appendTo(document.body);
$("p").add("<p id='count'></p>").appendTo(document.body);
$("p").add("<p>Copyright - Holberton School</p>").appendTo(document.body);

// prevent spammers
let count = 0;
const updateCounter = () => {
  count += 1;
  $("#count").append(`${count} clicks on the button`);
};

$("button").on("click", _.debounce(updateCounter()));
