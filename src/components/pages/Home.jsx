import { Link } from 'react-router-dom';

const Home = () => {
  if (!window.dresses) return null;

  return (
    <main className="home">
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
          {window.dresses.map(dress => (
            <Link to={`/dresses/${dress.id}`} className="dress-image" key={dress.id}>
              <img className="dress-image__image" src={`/images/dresses/${dress.display_photo}`} alt={dress.name} />
              <img className="dress-image__image-hidden" src={`/images/dresses/${dress.second_display_photo}`} alt={dress.name} />
            </Link>
          ))}
        </section>
      </section>
    </main>
  );
}

export default Home;