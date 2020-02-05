import React, { Fragment } from 'react'
import { PageItem, Pagination } from 'react-bootstrap'


export default function Paginatecomponent(props) {


    const totalpage = props.totalPage

    const page = function (pageQty) {
        const items = [];
        for (let number = 1; number <= pageQty; number++) {
            items.push(
                <PageItem key={number} active={number === props.ActivePage} onClick={() => props.changePage(number)}>
                    {number}
                </PageItem>
            );
        }
        return items;
    }

    return (
        <Fragment>
            <Pagination>{page(totalpage)}</Pagination>
        </Fragment>
    )
}
