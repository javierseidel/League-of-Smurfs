import React, {useState, useEffect} from "react";

export default function Accounts(props: { accountName: string; userName: string; accountPassword: string; })  {
    const [isShownP, setIsShownP] = useState(false);
    const [isShownC, setIsShownC] = useState(false);
            // @ts-ignore
    const handleClickP = event => {
        setIsShownP(current => !current);
    };
  // @ts-ignore
    const handleClickC = event => {
        setIsShownC(current => !current);
    };

    const [accounts, setAccounts] = useState<any>([]);
    const [stats, setStats] = useState<any>([]);


    useEffect(() => {
      fetchAccountInfo();
    }, []);

    const apiKey = "RGAPI-e2798eab-f07c-47d7-ac96-84a9699b08ed"

    async function fetchAccountInfo() {

        await fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${props.accountName}?api_key=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
            fetch(`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${data.id}?api_key=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                setStats(data);
                console.log(data);
                })
                })
        
    }

    return (

    <div onClick={handleClickC}>
        <p>{props.accountName}</p>
            {isShownP && 
                <p>Username: {props.userName}. Password: {props.accountPassword}</p>
            }
                    <button onClick={handleClickP}>Click</button> 
            {isShownC && stats.length == 1 &&
                (
                    <div>
                    <p>{stats[0].tier} : {stats[0].rank}</p>
                    <p>Wins: {stats[0].wins}</p>
                    <p>Losses: {stats[0].losses}</p>
                    </div>
                )
            }
            {isShownC && stats.length == 2 &&
                (
                <div>
                    <p>{stats[1].tier} : {stats[1].rank}</p>
                    <p>Wins: {stats[1].wins}</p>
                    <p>Losses: {stats[1].losses}</p>
                    <p>W/L: {stats[1].wins / stats[1].losess}</p>
                </div>
                )
            }            
    </div>
    )

}