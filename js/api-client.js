const apiUrl = 'http://localhost:3000/';

const apiGetRequest = async () => {
    try {
        let result = await fetch(`${apiUrl}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            }
        })
        return result.json();
    } catch (error) {
        console.error(error);
    }
}
const apiPostRequest = async (task) => {
    try {
        let result = await fetch(`${apiUrl}`, {
            method: "POST",
            // mode: 'no-cors',
            body: JSON.stringify(task),
            headers: {
                'Content-type': 'application/json',
                //  'Access-Control-Allow-Origin': '*',
            },
        });
    } catch (error) {
        console.error(error);
    }
}
const apiPutRequest = async (itemID, taskUpdate) => {
    try {
        let result = await fetch(`${apiUrl}${itemID}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(taskUpdate),
        });
    } catch (error) {
        console.error(error);
    }
}
const apiDeleteRequest = async (itemID) => {
    console.log(`${apiUrl}${itemID}`)
    try {
        let result = await fetch(`${apiUrl}${itemID}/`, {
            method: 'DELETE',
        });
        return result.json();
    } catch (error) {
        console.error(error);
    }
}