let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
const URL = "https://api.openweathermap.org/data/2.5/weather";

let container = createMyTag('div', 'container');
let row = createMyTag('div', 'row mb-3');

async function getCountry() {
    try {
        let resCountry = await fetch('https://restcountries.eu/rest/v2/all');
        let data = await resCountry.json();
        data.forEach((obj, i) => {
            if (obj.latlng[0] && obj.latlng[1]) {
                let col = createMyTag('div', 'col-lg-4 col-md-6 col-sm-12 col-12 mt-5 my-box');
                let card = createMyTag('div', 'card center');
                let head = createMyTag('div', 'card-header');
                head.innerHTML = obj.name;
                let flag = createMyTag('img', 'card-img-top center mt-4');
                flag.src = obj.flag;
                let info = createMyTag('div', 'card-body center');
                let capital = createMyTag('h6', 'card-title');
                capital.innerHTML = `Capital: ${obj.capital}`
                let region = createMyTag('h6', 'card-title');
                region.innerHTML = `Region: ${obj.region}`
                let code = createMyTag('h6', 'card-title');
                code.innerHTML = `Country Code: ${obj.alpha3Code}`
                let latLng = createMyTag('h6', 'card-title');
                latLng.innerHTML = `LatLng: ${obj.latlng[0]}, ${obj.latlng[1]}`
                let btn = createMyTag('button', 'btn btn-primary');
                btn.id = `btn-${i}`;
                btn.setAttribute('onclick', `showWeather(${i},'btn-${i}')`);
                btn.innerHTML = 'Click for Weather';
                let temp = createMyTag('h6', 'card-title temp');
                temp.setAttribute('id', `temp-${i}`);
                getWeather(obj.latlng[0], obj.latlng[1]).then(res => {
                    temp.innerHTML = `Temp: ${res}°C`;
                })
                info.append(capital, region, code, latLng, btn, temp);
                card.append(head, flag, info);
                col.appendChild(card);
                row.appendChild(col);
            }
        });
        container.appendChild(row);
        document.body.appendChild(container);
    } catch (error) {
        console.error(error);
    }
}

function createMyTag(myTag, myClass = '') {
    let ele = document.createElement(myTag);
    ele.setAttribute('class', myClass);
    return ele;
}

function showWeather(index, btnId) {
    let btn = document.getElementById(btnId);
    btn.style.display = 'none';
    let temp = document.getElementById(`temp-${index}`);
    temp.style.display = 'flex';
}

async function getWeather(lat, lng) {
    try {
        const FULL_URL = `${URL}?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
        let resWeather = await fetch(FULL_URL);
        let data = await resWeather.json();
        return data.main.temp;
    } catch (error) {
        console.error(error);
    }

}

getCountry();