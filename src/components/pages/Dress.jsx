import { useParams } from 'react-router-dom';

const Dress = () => {
  const { id } = useParams();

  return (
    <main className="container mx-auto">
      <h1>{id}</h1>
    </main>
  );
};

export default Dress;