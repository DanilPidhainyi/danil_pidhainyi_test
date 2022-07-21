import React, {useState} from "react";
import './App.scss';
import Table2 from "./Table2";
import {clearStore, getItemsWithStore} from "./store";


const search = text => {
    return fetch(`http://universities.hipolabs.com/search?country=${text}`)
        .then(res => res.json())
        .catch(e => console.log(e))
}



function App() {


    const [data, setData] = useState(getItemsWithStore())

    const onClickSearch = () => {
        return async () => setData(
            await search(
                document.getElementById('inp').value)
        )
    }

    const onClickClose = () => {
        return  () => {
            setData([])
            document.getElementById('inp').value = ''
            clearStore()
        }
    }

    return (
        <div className="App">
            <label className="input-container">
                <input id={'inp'} type="text" className="input" pattern={'[0-9A-Za-z]+'} defaultValue={'ukraine'}/>
                <button className="button" onClick={onClickSearch()}>🔍</button>
                <button className="button" onClick={onClickClose()}>❌</button>
            </label>
            <Table2 data={data}/>
        </div>
    );
}

export default App;
