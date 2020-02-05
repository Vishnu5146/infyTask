import React, { Fragment, useEffect, useState } from 'react'
import { fetchFacilities } from '../Middleware/request'

//REACT BOOTSTRAP TABLE 
import Table from 'react-bootstrap/Table'
import Paginatecomponent from './Paginate.component'


export default function Tablecomponent() {


    //INITIALISING THE FUNCTIONAL COMPONENTS STATE USING REACT HOOOKS -- USESTATE
    const [getData, setData] = useState([])
    const [getCurrentPage, setCurrentPage] = useState(1)
    const [getDataPerPages, setDataPerPage] = useState([10, 20])
    const [getSelectQty, setSelectQty] = useState(10);
    const totalPage = getData.length / getSelectQty
    const indexOfLastPost = getCurrentPage * getSelectQty
    const indexOfFirstPost = indexOfLastPost - getSelectQty
    const PaginatedData = getData.slice(indexOfFirstPost, indexOfLastPost);


    useEffect(() => {
        fetchFacilities((error, data) => {
            if (data) {
                setData(data)
            } else {
                console.log(error);
            }
        });
    }, [])


    //RENDERS THE TABLE ROW - USING REACT HOOKS
    const dataRow = PaginatedData.map((data, index) => {
        return (<tr key={index}>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.userId}</td>
        </tr>);
    })


    //CHANGE PAGE
    //LETS YOU CHANGE THE PAGE USING REACT HOOKS
    const changePage = (page) => {
        setCurrentPage(page);
    }

    //SELECT DROPDOWN
    //LETS YOU SELECT THE TOTAL DATA TO BE SHOWED PER PAGE
    const selector = getDataPerPages.map((qty, index) => {
        return (
            <option key={index} name={index} value={qty}>{qty}</option>
        );
    });

    //CHANGES THE RECRD TO BE SHOWED
    //PER PAGE USING REACT HOOKS
    const recordsPerPage = (e) => {
        setSelectQty(e.target.value);
    };

    return (
        <Fragment>
            <div className="container">
                <label>DATA PER PAGE</label>
                <select onChange={(e) => recordsPerPage(e)}>
                    {selector}
                </select>
                <Table responsive hover>
                    <thead>
                        <tr>
                            <th>S NO</th>
                            <th>Todo</th>
                            <th>User Id</th>
                        </tr>
                        {dataRow}
                    </thead>
                    <tbody>

                    </tbody>
                </Table>
                <Paginatecomponent changePage={changePage} ActivePage={getCurrentPage} totalPage={totalPage} />
            </div>
        </Fragment>
    )
}
