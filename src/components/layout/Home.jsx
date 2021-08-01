import { useEffect, useState } from 'react';
import { load } from '../../utils/load';
import { API_URL } from '../../config';

function Home() {
  const [dresses, setDresses] = useState([]);
  const [chosenDress, setChosenDress] = useState(null);

  // Load dresses
  useEffect(() => {
    (async () => {
      const dresses = await load(`${API_URL}/dresses`);

      setDresses(dresses);
    })();
  }, []);

  return (
    <main className="main">
      <section className="collection-image-container mb-20">
        <div className="collection-image-container__interaction-container">
          <div className="collection-image-container-interaction-container__container">
            <b>Новая коллекция</b>

            <h2>Spring 2021</h2>

            <a className="growing-underline growing-underline--white growing-underline--1px growing-underline--fix"
               href="/spring-2021">Смотреть всю коллекцию</a>
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <h2 className="text-center">Взгляните на новинки последней коллекции</h2>

        <section className="grid grid-cols-3 gap-4">
          {dresses.map(dress => (
            <a href={`javascript:void(${dress.id});`} className="dress-image" key={dress.id}>
              <img className="dress-image__image" onClick={() => setChosenDress(dress)} src={`/images/dresses/${dress.display_photo}`} alt={dress.name} />
              <img className="dress-image__image-hidden" src={`/images/dresses/${dress.second_display_photo}`} alt={dress.name} />
            </a>
          ))}
        </section>
      </section>
    </main>
  );
}

export default Home;