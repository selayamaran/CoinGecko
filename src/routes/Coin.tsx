import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchAPI } from '../utils/fetch-api';

import { formatDate } from '../utils/dates';
import { Container, Row, Button } from 'react-bootstrap';

export interface ICoinDetail {
    name: string;
    symbol: string;
    hashing_algorithm: string;
    description: any;
    market_cap_rank: number;
    genesis_date: string;
    homepage: string;
}

const Coin: React.FC = () => {

    const { id } = useParams(); 
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<ICoinDetail>();  

    const loadCoin = useCallback(async () => {
        setIsLoading(true);
        let path = `${id}`;
        const res = await fetchAPI<ICoinDetail>({ path });
          if (res.success) {
              console.log('data', res.body);
            setData(res.body);
          }
          setIsLoading(false);        
    }, [setIsLoading]); 

    useEffect(() => {
        loadCoin();
    }, []) 

    return (
        <>
            {isLoading && <div>Loading...</div>}
            {data && data !== null && (
                <>
                <Container>
                <Row className="main-row">
                    <header className="header">
                        <h1>Coin Detail</h1>
                    </header>                    
                    <table className='coin-detail'>
                        <tr>
                            <td>Name:</td>
                            <td>{data.name}</td>
                        </tr>
                        <tr>
                            <td>Symbol:</td>
                            <td>{data.symbol}</td>
                        </tr> 
                        <tr>
                            <td>Hashing Algorithm:</td>
                            <td>{data.hashing_algorithm}</td>
                        </tr>
                        <tr>
                            <td>Description:</td>
                            <td>{data.description.en}</td>
                        </tr>
                        <tr>
                            <td>Market cap in Euro:</td>
                            <td>{data.market_cap_rank}</td>
                        </tr>
                        <tr>
                            <td>Genesis Date:</td>
                            <td>{formatDate(data.genesis_date)}</td>
                        </tr>
                    </table>
                    <Link to="/coins">
                        <Button>View Coins</Button>            
                    </Link>
                </Row>
                </Container>
                </>
            )}
        </>
    )
}

export default Coin;