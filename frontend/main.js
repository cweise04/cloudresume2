window.addEventListener('DOMContentLoaded', (event) => {
    getVisitorCount();
})
const functionpi = '';
const getVisitorCount = () => {
    let count = 30;

    // Use the fetch API to make a GET request to your API endpoint
    fetch(functionapi).then(response => {
            return response.json();
        })
        .then(response => {
            // Update the count with the data from the API response
        console.log("Website called function API");
        count = response.count;
        document.getElementById("counter").innerText = count;
        })
        .catch(function(error){
            console.log(error);
        });
        return count
}
