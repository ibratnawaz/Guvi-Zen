function makeRequest(method, url) {
    return new Promise((resolve, reject) => {
        var httpCountry = new XMLHttpRequest();
        httpCountry.open(method, url);
        httpCountry.send();
        httpCountry.onload = function () {
            if (httpCountry.status == 200) {
                resolve(httpCountry.response);
            } else {
                reject({
                    message: httpCountry.statusText,
                });
            }
            httpCountry.onerror = function () {
                reject({
                    message: httpCountry.statusText,
                });
            };
        };
    });
}

makeRequest("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
    .then((result) => {
        let data = JSON.parse(result);

        let container = document.getElementById('container');

        data.forEach(obj => {
            let outer = createMyElement('div', 'card flex-col center');

            let img = createMyElement('img', 'card-header flex-col center');
            img.src = obj.flag;
            img.alt = `${obj.name}-flag.jpg`;

            let inner = createMyElement('div', 'card-body flex-col');

            let name = createMyElement('span', 'text');
            name.innerHTML = `${obj.name}`;

            let capital = createMyElement('span');
            capital.innerHTML = `Capital: `;
            let value1 = createMyElement('span', 'capital');
            value1.innerHTML = `${obj.capital}`;
            capital.appendChild(value1);

            let countryCode = createMyElement('span');
            countryCode.innerHTML = `Country Code: `;
            let value2 = createMyElement('span', 'value');
            value2.innerHTML = `${obj.alpha2Code}, ${obj.alpha3Code}`;
            countryCode.appendChild(value2);

            let region = createMyElement('span');
            region.innerHTML = `Region: `;
            let value3 = createMyElement('span', 'value');
            value3.innerHTML = `${obj.region}`;
            region.appendChild(value3);

            let LatLong = createMyElement('span');
            LatLong.innerHTML = `LatLong: `;
            let value4 = createMyElement('span', 'value');
            value4.innerHTML = `${obj.latlng[0]}, ${obj.latlng[1]}`;
            LatLong.appendChild(value4);


            inner.append(name, capital, countryCode, region, LatLong);
            outer.append(img, inner);
            container.appendChild(outer);
        });
    })
    .catch((error) => {
        console.log(error);
    });

function createMyElement(tagName, className = '') {
    let ele = document.createElement(tagName);
    ele.setAttribute('class', className);
    return ele;
}