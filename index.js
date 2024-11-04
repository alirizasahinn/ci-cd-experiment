// const { getWeek, getYear } = require("date-fns");
const yup = require("yup");

const schema = yup.number().required();
(async () => {
  try {
    console.log(await schema.validate(null));
  } catch (error) {
    a;
    console.error(error.errors);
  }
})();
