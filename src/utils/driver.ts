import { driver } from "driver.js";
import "driver.js/dist/driver.css";
const driverObj = driver({
  showProgress: true,
  steps: [
    { element: 'body', popover: { title: 'Title', description: 'Description' } },
    { element: 'ul', popover: { title: 'Title', description: 'Description' } },
    { element: 'button', popover: { title: 'Title', description: 'Description' } },
    { element: 'div', popover: { title: 'Title', description: 'Description' } },
  ]
});
// driverObj.drive()