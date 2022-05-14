import moment from "moment";

const currentDate = moment().format('Do of MMMM YYYY, h:mm:ss a');

console.log(`Today is the ${currentDate}`);