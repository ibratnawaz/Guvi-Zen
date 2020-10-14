/**
- Solving problems using array functions on rest countries data.
- DONE:Get all the countries from Asia continent using Filter function
- DONE:Get all the countries with population of less than 2 lakh using Filter function
- DONE:Print the following details name, capital, flag using forEach function
- DONE:Print the total population of countries using reduce function
- DONE:Print the total population of countries in Asia continent using reduce and filter function
- DONE:Print the countries which use US Dollars as currency. 

* JSON task https://medium.com/@reach2arunprakash/guvi-zen-code-sprint-javascript-practice-problems-in-json-objects-and-list-49ac3356a8a5
* Add error handling to the xml http request code
*/

let request = new XMLHttpRequest;
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function () {

    let response = JSON.parse(this.response);
    let countriesInAsia = response.filter(obj => obj.region == 'Asia')
    console.log('Countries which belongs to Asia region:', countriesInAsia);

    let countriesWithPopulation = response.filter(obj => obj.population < 200000)
    console.log('Countries with population less than 2 Lakhs:', countriesWithPopulation);

    let countries = [];
    response.forEach(obj => {
        countries.push({
            name: obj.name,
            capital: obj.capital,
            flag_url: obj.flag
        });
    });
    console.log('Countries:', countries);

    console.log('Total Population in the world:', response.reduce((totalPopulation, obj) => {
        return totalPopulation + parseInt(obj.population)
    }, 0));

    console.log('Total Population in the Asia region:', countriesInAsia.reduce((totalPopulation, obj) => {
        return totalPopulation + parseInt(obj.population)
    }, 0));

    let countriesWithDollar=response.filter(obj => {
        return obj.currencies[0].code=='USD'
    });
    console.log(countriesWithDollar);
}