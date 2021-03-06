import { useParams } from 'react-router-dom';

const Dress = () => {
  if (!window.dresses) return null;

  const { id } = useParams();
  const dress = window.dresses.find(dress => dress.id == id);

  console.log(dress);

  return (
    <main className="container mx-auto">
      <div className="grid grid-cols-2">
        <section>
          <h1>{dress.name}</h1>
          <p>{dress.description}</p>
        </section>

        <section>
          <img src={`/images/dresses/${dress.display_photo}`} alt={dress.name} />
        </section>
      </div>
    </main>
  );
};

export default Dress;