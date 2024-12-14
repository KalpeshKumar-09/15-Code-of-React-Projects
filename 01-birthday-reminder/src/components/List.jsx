const List = ({ people }) => {
  return (
    <div>
      {people.map((person, id) => (
        <article key={id} className="person">
          <img src={person.image} alt={person.name} />
          <div>
            <h4>{person.name}</h4>
            <p>{person.age}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default List;
