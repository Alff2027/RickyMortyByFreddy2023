import { DataContext } from './context/DataContext';
import { useContext } from 'react';

import SearchBar from './components/SearchBar';
import Card from './components/Card';
import Loading from './components/Loading';
import Pagination from './components/Pagination';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App() {

  const {
    data,
    info,
    onPrevious,
    onNext
  } = useContext(DataContext)

  if (!data) {
    return (
      <>
        <Header />
        <main>
          <NotFound />
        </main>
        <Footer />
      </>
    )
  }

  if (data.length <= 0) {
    return (
      <>
        <Header/>
        <main>
          <Loading />
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header/>

      <main>
        <SearchBar />
        {
          info
            ? <Pagination next={info.next} prev={info.prev} onPrevious={onPrevious} onNext={onNext} />
            : null
        }
        <div className="cards-container">
          {
            data.map(card => <Card key={card.id} data={card} />)  
          }
        </div>

        {
          info
            ? <Pagination next={info.next} prev={info.prev} onPrevious={onPrevious} onNext={onNext} />
            : null
        }
      </main>

      <Footer/>
    </>
  );
}

export default App;