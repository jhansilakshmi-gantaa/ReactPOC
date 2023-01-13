const ExpenseDate = (props) => {
  let day = props.date.toISOString();
  return <div>{day}</div>;
};
export default ExpenseDate;
