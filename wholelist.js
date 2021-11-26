function wholeList(boston){
    const people = boston.data
    var container = document.getElementById("container");
    if (container.innerHTML !== ''){
        let html = '';
        let html2 = '';
        for (let i = 0; i < boston.data.length; i++) {
            if (i === 0) {
                html2 += `<h1><h3 class="text">There Are ${people.length} Employees</h3> 
                <button id="clearlist" onclick = "clearlist()" class="buttons" style="top:215px; left:35%">Clear List</button></h1>`;
            }
            html +=`<li class="text" id="${i}"><h3>${people[i][8]}</h3><p>Salary: $${people[i][11]}</p></li>`;
        }
        container.innerHTML = `${html2}<ul id = "data" class="text">${html}</ul>`;
    }
    let button = document.getElementById("returnwholelist");
    button.style.left = `275px`
    button.style.top = `225px`
}
wholeList(boston);