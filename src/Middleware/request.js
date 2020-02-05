import axios from 'axios';

const TodosLink = `https://jsonplaceholder.typicode.com/users/1/todos`


export const fetchFacilities = (callback) => {
    console.log("Fetching facilities");
    axios.get(TodosLink)
        .then(function (response) {
            callback(null, response.data)
            // handle success
            console.log(response.data[0]);
        })
        .catch(function (error) {
            callback(error, null);
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
            console.log("Executed");
        });
}