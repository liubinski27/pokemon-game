import HeaderMenu from '../../components/HeaderMenu';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import PokemonCard from '../../components/PokemonCard';

import background1 from '../../img/bg1.jpg';
import background2 from '../../img/bg2.jpg';

import POKEMONS from '../../pokemons';

import style from './style.module.css';

const pokemons = POKEMONS;
console.log(pokemons); 

const HomePage = ({ onChangePage }) => {
  const handleClickButton = (page) => {
    console.log('####: <HomePage />');
    onChangePage && onChangePage(page);
  }
  return (
    <div className={style.App}>

      <HeaderMenu/>

      <Header
        title="It is a Header!"
        descr="description"
        onClickButton={handleClickButton}
      />

      <Layout
        title="Rules"
        descr="Rules is here!"
        urlBg={background1}
      >
        <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
        <p>Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p><br />
        <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.</p>
      </Layout>

      <Layout
        title="I want"
        descr="to learn React!"
        colorBg="#4fc9ea"
      >
        <div className="flex">
          {
            POKEMONS.map(item => <PokemonCard key={item.id} id={item.id} name={item.name} img={item.img} type={item.type} values={item.values}/>)
          }
        </div>
      </Layout>

      <Layout
        title="title"
        descr="text :)"
        urlBg={background2}
      />

      <Footer />

    </div>
  );
}

export default HomePage;
