import React from 'react';
import Tablecomponent from '../Components/Table.component'



export const routes = [
    {
        path: "/paginate",
        exact: true,
        main: () => <Tablecomponent />
    },
    {
        path: "/form",
        main: () => <h2>Form Component</h2>
    },
    {
        path: "/calculator",
        main: () => <h2>Calculator</h2>
    }
];