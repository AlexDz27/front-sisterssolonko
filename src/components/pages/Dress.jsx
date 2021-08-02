import { useParams } from 'react-router-dom';

const Dress = () => {
  const { id } = useParams();

  return (
    <div>
      dress view with id: {id}!
    </div>
  );
}

export default Dress;