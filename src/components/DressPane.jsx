import { useEffect, useState } from 'react';

const DressPane = ({ dress }) => {
  const [isShown, setIsShown] = useState(false);

  // When dress is chosen, show the component
  useEffect(() => {
    console.log('useEffect')

    if (dress !== null) {
      setIsShown(true);
    }
  });

  if (isShown === false) return null;
  return (
    <section className="dress-pane">
      <button onClick={() => setIsShown(false)} className="dress-pane__close-button" type="button" aria-label="Закрыть">✕</button>

      <h2>{dress.name}</h2>
    </section>
  );
}

export default DressPane;