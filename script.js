import countries_data from './countriesData.js';
const population = document.querySelector('.population');
const languages = document.querySelector('.languages');
const info = document.querySelector('.graph-title');

const names = document.querySelector('.names');
const stats = document.querySelector('.stats');

// console.log(countries_data);

population.addEventListener('click', () => {
    info.innerHTML = " ";
    info.innerHTML = "10 Most populated countries in the world";
    info.style.marginBottom = "10px";

    while (names.firstChild) {
        names.removeChild(names.firstChild);
    }
    while (stats.firstChild) {
        stats.removeChild(stats.firstChild);
    }
    const datas = countries_data;
    datas.sort(function (a, b) {
        let dataA = a.population;
        let dataB = b.population;
        if (dataA > dataB) {
            return -1;
        }
        else if (dataA < dataB) {
            return 1;
        }
        return 0;
    });

    const items = datas.slice(0, 10);
    //console.log(items);
    for (let t of items) {
        const pp = document.createElement('p');
        pp.textContent = t.name;
        const ppp = document.createElement('p');
        ppp.textContent = t.population;
        names.appendChild(pp);
        stats.appendChild(ppp);
    }
});





function sortMapByValue(map) {
    // Convert the Map to an array of key-value pairs
    const mapEntries = Array.from(map.entries());

    // Sort the array by the values (index 1 of each key-value pair)
    mapEntries.sort((a, b) => b[1] - a[1]);

    // Create a new Map from the sorted array
    const sortedMap = new Map(mapEntries);
    return sortedMap;


}


languages.addEventListener('click', () => {
    info.innerHTML = " ";
    info.innerHTML = "10 Most Spoken languages in the world";
    info.style.marginBottom = "10px";


    while (names.firstChild) {
        names.removeChild(names.firstChild);
    }
    while (stats.firstChild) {
        stats.removeChild(stats.firstChild);
    }
    const datas = countries_data;
    const mp = new Map();

    for (const t of datas) {
        for (const tt of t.languages) {
            if (mp.has(tt)) {
                mp.set(tt, mp.get(tt) + 1);
            } else {
                mp.set(tt, 1);
            }
        }
    }
    const sortedMap = sortMapByValue(mp);
    // sortedMap.forEach((value, key) => {
    //     console.log(`Key: ${key}, Value: ${value}`);
    // });

    const takenEntries = [];
    let count = 0;

    for (const entry of sortedMap) {
        if (count >= 10) {
            break;
        }
        takenEntries.push(entry);
        count++;
    }
    //console.log(takenEntries);

    for (let i = 0; i < 10; i++) {
        const pp = document.createElement('p');
        pp.textContent = takenEntries[i][0];
        const ppp = document.createElement('p');
        ppp.textContent = takenEntries[i][1];
        names.appendChild(pp);
        stats.appendChild(ppp);
    }

});