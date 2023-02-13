import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";

const data = [
  {
    id: "1",
    name: "Sam",
    salary: "95000",
    age: "45",
    gender: "Male",
    dept: "Operations",
  },
  {
    id: "2",
    name: "Bob",
    salary: "80000",
    age: "21",
    gender: "Male",
    dept: "Support",
  },
  {
    id: "3",
    name: "Anne",
    salary: "125000",
    age: "25",
    gender: "Female",
    dept: "Analytics",
  },
  {
    id: "4",
    name: "Julia",
    salary: "73000",
    age: "30",
    gender: "Female",
    dept: "Analytics",
  },
  {
    id: "5",
    name: "Matt",
    salary: "95000",
    age: "45",
    gender: "Male",
    dept: "Sales",
  },
  {
    id: "6",
    name: "sam",
    salary: "95000",
    age: "45",
    gender: "Male",
    dept: "Operations",
  },
];

function App() {
  return (
    <div className="App">
      {data.map((d) => (
        <Card key={d.id} d={d} />
      ))}
    </div>
  );
}

export default App;
