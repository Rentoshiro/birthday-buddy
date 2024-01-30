import Person from "./Person";

function List({ people }) {
  return (
    <section key={people.id}>
      {people.map((person) => (
        <Person key={person.id} {...person}></Person>
      ))}
    </section>
  );
}

export default List;
