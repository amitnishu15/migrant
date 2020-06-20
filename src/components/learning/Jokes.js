import React,{useState,useEffect} from 'react'

function Jokes() {
    const [joke, setJoke] = useState("loading")
    const [fname, setFN] = useState("John")
    const [sname, setSN] = useState("doe")
    const newJoke = (first, second) => {
        fetch(`http://api.icndb.com/jokes/random?firstName=${first}&lastName=${second}`).
            then(res => res.json())
            .then(res2 => {
                console.log(res2);
                setJoke(res2.value.joke)
            })
    }
    useEffect(() => {
        newJoke(fname, sname);
    }, [fname, sname])
    return (
        <div>
            <h3>Hi Amit</h3>
            <input type="text" value={fname} onChange={(e) => setFN(e.target.value)} />
            <input type="text" value={sname} onChange={(e) => setSN(e.target.value)} />
            <h4>{joke}</h4>
            <button onClick={() => newJoke(fname, sname)}>Get another joke</button>
        </div>
    )
}

export default Jokes;
