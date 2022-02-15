import { ICoin } from '../routes/Coins';
import { Link } from 'react-router-dom';

type coin = ICoin;

const CoinCard = (coin: coin) => {

    
    const {id, name, image, symbol, current_price, high_24h, low_24h} = coin;

    return (
        <>
        <td><img src={image} /></td>
        <td>{name}</td>
        <td>{symbol}</td>
        <td>{current_price}</td>
        <td>{high_24h}</td>
        <td>{low_24h}</td>
        <td>
           <Link to={`${id}`}>Edit</Link>
        </td>
        </>
    )
}  

export default CoinCard;