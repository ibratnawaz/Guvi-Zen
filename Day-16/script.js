let appId = 'd8703d95';
let appKey = 'f6273120f295c3c34324402702644504';
let dataList = [];

getResult = () => {

    let dishName = document.getElementById('search').value;
    let apiURL = `https://api.edamam.com/search?q=${dishName}&app_id=${appId}&app_key=${appKey}`;
    document.getElementById('loading').style.display = 'inline';
    document.getElementById('error').style.display = 'none';

    fetch(apiURL)
        .then(res => {
            return res.json();
        })
        .then(data => {

            let container = document.getElementById('result');
            container.innerHTML = '';

            document.getElementById('loading').style.display = 'none';
            if (data.count > 0) {
                let i = 0;
                data.hits.forEach((ele) => {

                    let healthLabels = ele.recipe.healthLabels;
                    let ingredientLines = ele.recipe.ingredientLines;
                    let totalNutrients = ele.recipe.totalNutrients;

                    dataList.push({
                        healthLabels,
                        ingredientLines,
                        totalNutrients
                    });

                    let div = createMyTag('div', 'card');
                    let head = createMyTag('div', 'card-header');
                    head.style.backgroundImage = `url(${ele.recipe.image})`;

                    let body = createMyTag('div', 'card-body center');
                    let name = createMyTag('span', 'd-name');
                    name.innerHTML = ele.recipe.label;
                    let cal = createMyTag('span', 'cal');
                    cal.innerHTML = `Calories ${ele.recipe.calories.toFixed(2)}`;
                    let list1 = createMyTag('span', 'list');
                    list1.setAttribute('onclick', `getList('ing',${i})`);
                    list1.innerHTML = `<i class="fa fa-cutlery" aria-hidden="true"></i>&nbsp;&nbsp;Ingredient Lists`;
                    let list2 = createMyTag('span', 'list');
                    list2.setAttribute('onclick', `getList('vtn',${i})`);
                    list2.innerHTML = `<i class="fa fa-apple" aria-hidden="true"></i>&nbsp;&nbsp;Vitamins Lists`;
                    let list3 = createMyTag('span', 'list');
                    list3.setAttribute('onclick', `getList('hl',${i})`);
                    list3.innerHTML = `<i class="fa fa-heart" aria-hidden="true"></i>&nbsp;&nbsp;Health Labels`;
                    body.append(name, cal, list1, list2, list3);
                    i++;
                    let foot = createMyTag('div', 'card-footer center');
                    let anc = createMyTag('a');
                    anc.type = 'button';
                    anc.href = ele.recipe.url;
                    anc.target = 'blank';
                    anc.innerHTML = `Read More`;
                    foot.append(anc);
                    div.append(head, body, foot);
                    container.appendChild(div);
                });
            } else {
                document.getElementById('error').style.display = 'inline';
            }
        })
        .catch(err => console.log(err));
}

createMyTag = (tagName, className = '') => {
    let ele = document.createElement(tagName);
    ele.setAttribute('class', className);
    return ele;
}

let toggle = true;
toggleModal = () => {

    let modal = document.getElementById('modal');
    if (toggle) {
        modal.style.display = 'flex';
        toggle = false;
    } else {
        modal.style.display = 'none';
        toggle = true;
    }
}

getList = (type, index) => {
    let modal = document.getElementById('modal-body');
    modal.innerHTML = '';
    let ul = createMyTag('ul');

    switch (type) {
        case 'ing':
            let recList = dataList[index]['ingredientLines'];
            for (let i = 0; i < recList.length; i++) {
                let li = createMyTag('li');
                li.innerHTML = recList[i];
                ul.appendChild(li);
            }
            break;
        case 'vtn':
            let nutrientList = dataList[index]['totalNutrients'];
            let li1 = createMyTag('li');
            li1.innerHTML = `${nutrientList['CA']['label']}: ${nutrientList['CA']['quantity'].toFixed(2)} ${nutrientList['CA']['unit']}`;
            let li2 = createMyTag('li');
            li2.innerHTML = `${nutrientList['PROCNT']['label']}: ${nutrientList['PROCNT']['quantity'].toFixed(2)} ${nutrientList['PROCNT']['unit']}`;
            let li3 = createMyTag('li');
            li3.innerHTML = `${nutrientList['VITC']['label']}: ${nutrientList['VITC']['quantity'].toFixed(2)} ${nutrientList['VITC']['unit']}`;
            let li4 = createMyTag('li');
            li4.innerHTML = `${nutrientList['FE']['label']}: ${nutrientList['FE']['quantity'].toFixed(2)} ${nutrientList['FE']['unit']}`;
            let li5 = createMyTag('li');
            li5.innerHTML = `${nutrientList['CHOCDF']['label']}: ${nutrientList['CHOCDF']['quantity'].toFixed(2)} ${nutrientList['CHOCDF']['unit']}`;

            ul.append(li1, li2, li3, li4, li5);
            break;
        case 'hl':
            let healthList = dataList[index]['healthLabels'];
            for (let i = 0; i < healthList.length; i++) {
                let li = createMyTag('li');
                li.innerHTML = healthList[i];
                ul.appendChild(li);
            }
            break;
    }

    modal.appendChild(ul);
    toggleModal();
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        toggle = true;
    }
}