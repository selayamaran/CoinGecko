import React, { useCallback, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { fetchAPI } from '../utils/fetch-api';
import CoinCard from '../views/CoinCard';

export interface ICoin {
    id: string;
    name: string;
    image: string;
    symbol: string;
    current_price: number;
    high_24h: number;
    low_24h: number
}

const Coins: React.FC = () => {

    const [isLoading, setIsLoading] = useState(false);  
    const [data, setData] = useState<ICoin[]>([]);  

    const load = useCallback(async () => {
        setIsLoading(true);
        let path = 'markets?vs_currency=EUR&per_page=10';
        const res = await fetchAPI<ICoin[]>({ path });
          if (res.success) {
            setData(res.body);
          }
          setIsLoading(false);        
    }, [setIsLoading]);    

    useEffect(() => {
        load();
    }, [])
    
    return (
        <>
        {isLoading && <div>Loading...</div>}
        {data && data !== null && (
            <>
            <Container>
            <Row className="main-row">
                <header className="header">
                    <h1>Coin Markets</h1>
                </header>
                <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Symbol</th>
                                <th>Current Price</th>
                                <th>High 24 hour Price</th>
                                <th>Low 24 hour Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            data.length ? (
                                data.map((coin) => (
                                    <tr key={coin.id} >
                                        <CoinCard {...coin}/>
                                    </tr>
                                ))                 
                            ) : (
                                <tr>
                                    <td colSpan={3}>Sorry no results</td>
                                </tr>
                            )             
                        }        
                        </tbody>
                    </table>
            </Row>
            </Container>
            </>
        )}
    </>        
    )
};

export default Coins;