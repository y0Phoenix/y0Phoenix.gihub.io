function onsubmit(data, div, form) {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    const container = document.getElementById('container');
    if (container.innerHTML !== "") {
        container.innerHTML = "";
    }
    const clear = document.createElement('button');
    clear.setAttribute('class', 'buttons');
    clear.setAttribute('id', 'clearlist');
    clear.setAttribute('style', 'top:215px; left:35%;');
    clear.setAttribute('onclick', 'clearlist()');
    clear.innerHTML = 'Clear Search Results';
    const h3 = document.createElement('h3');
    h3.innerHTML = `Here are the results for your search query`;
    h3.setAttribute('class', 'text');
    container.appendChild(h3);
    container.appendChild(clear);
    const filter1 = (a) => {
        if (a[11] <= max) {
            return a[11] >= min
        }
    }
    const sort = (a, b) => {
        let c = parseInt(a[11]);
        let d = parseInt(b[11]);
        if (c > d) {
            return -1;
        }
        if (c < d) {
            return 1;
        }
        return 0;
        
    }
    var _check = [...data];
    _check.sort(sort);
    var _data = [..._check].filter(filter1);
    const ul = document.createElement('ul');
    ul.setAttribute('id', 'searchresultlist');
    const h32 = document.createElement('h3');
    h32.setAttribute('class', 'text');
    h32 .innerHTML = `${_data.length} Results Found`;
    container.appendChild(h32);
    for (let i = 0;
        i < _data.length;
        i++) {
        const li = document.createElement('li');
        li.innerHTML = `${i + 1}: ${_data[i][8]} <b>Salary</b>: ${_data[i][11]}`;
        li.setAttribute('id', `search${i + 1}`);
        li.setAttribute('class', 'text');
        ul.appendChild(li);
    }
    container.appendChild(ul);
}
onsubmit(boston.data, document.getElementById('searchform'), form);