import Header from '../../components/Header';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';

import { plusAction, selectCount } from '../../store/counter';

import style from './style.module.css';

const HomePage = () => {

  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  console.log('#########, ', count);

  const handleClickButton = () => {
    dispatch(plusAction(1));
  }

  return (
    <div className={style.App}>

      <Header
        title="It is a Header!"
        descr="description"
      />

      <Layout
        title="Rules"
        descr="Rules is here!"
        colorBg="#4fc9ea"
      >
        <button onClick={handleClickButton} style={{ width: '300px', height: '75px', background: 'red', zIndex: '99999' }} >Click</button>
        <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
        <p>Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p><br />
        <p className={style.last}>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.</p>
      </Layout>

    </div>
  );
}

export default HomePage;
