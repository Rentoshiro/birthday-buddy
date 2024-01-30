import users from "./data";
import List from "./List";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState(users);

  return (
    <>
      <main>
        <section className="container">
          <h3>{data.length} birthdays today</h3>
          <List people={data}></List>
          <button
            onClick={() => setData([])}
            type="button"
            className="btn btn-block"
          >
            Clear
          </button>
        </section>
      </main>
    </>
  );
};
export default App;
