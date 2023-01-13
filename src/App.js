import Welcome from "./components/classComponents/Welcome";
import StateExample from "./components/classComponents/StateExample";
import Expenses from "./components/Expenses";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "News Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const currentDate = new Date();
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is visible!!</p>
      <Expenses item={expenses}></Expenses>
      <Welcome message="Hello welcome!!"></Welcome>
      <StateExample date={currentDate}></StateExample>
    </div>
  );
}

export default App;
