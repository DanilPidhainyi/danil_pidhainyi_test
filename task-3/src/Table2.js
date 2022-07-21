import React, { useState } from "react";
import "./Table.css";
import {setItemsToStore} from "./store";


function Table2({data}) {
    console.log(data)

    const [checks, setChecks] = useState(0)
    const setChecked = () => {
        let items = document.getElementsByClassName('check')
        let filterItems = [].filter.call(items, item => item.checked)
        const nedId = filterItems.map(item => item.id)
        const filter = data.filter((_, i) => nedId.includes(i + ''))
        setItemsToStore(filter)
        setChecks(filter.length)
    }


    const renderTableData = () => {
        return data.map((item, index) => {
            const { alpha_two_code, country, name, web_pages, domains} = item; //destructuring
            return (
                <tr key={name}>
                    <td>{index}</td>
                    <td>{alpha_two_code}</td>
                    <td>{country}</td>
                    <td>{name}</td>
                    <td><a href={web_pages[0]}>{web_pages[0]}</a></td>
                    <td>{domains}</td>
                    <td><input id={index} type="checkbox" className={'check'}
                    onClick={() => setChecked()}
                    /></td>
                </tr>
            );
        });
    };

    const renderTableHeader = () => {
        //let header = ['index', ...Object.keys(data[0])];
        let header = ['index', 'alpha_two_code', 'country', 'name', 'web_pages', 'domains', 'Сохранить'];
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>;
        });
    };

    return (
        data.length === 0 ? <></> :
        <>
            <h3 className={'h3'}> {checks} відмічено для збереження</h3>
            <table id="students" className={data.length === 0 ? 'none' : ''}>
                <tbody>
                <tr>{renderTableHeader()}</tr>
                {renderTableData()}
                </tbody>
            </table>
        </>
    );
}

export default Table2;
