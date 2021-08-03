import { useParams } from 'react-router-dom';

const Dress = () => {
  if (!window.dresses) return null;

  const { id } = useParams();
  const dress = window.dresses.find(dress => dress.id == id);

  return (
    <main className="container mx-auto">
      <h1>{id}</h1>
      <img src={`/images/dresses/${dress.display_photo}`} alt={dress.name} />
    </main>
  );
};

export default Dress;