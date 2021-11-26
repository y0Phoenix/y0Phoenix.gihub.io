async function renderPosts(boston) {
  const container = document.getElementById('container');
  const people = boston.data;
  const len = boston.data.length;
  const compare = (a, b) => {
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
  const over200k = (a) => {
    return a[11] >= 200000;
  }

  let check = [...people];
  check.sort(compare);
  let _check = [...check].filter(over200k);
  console.log('I have sorted out the list from highest to lowest');
  check.splice(5);
  // TODO: add code to display the html variable inside a ul element with id="data"
  // container.innerHTML = `<ul id = "data">${html}</ul>`
  // Hint: you can use the container parameter's innerHTML property to insert Html tags
  var top5ul = document.createElement("ul")
  var over200kul = document.createElement('ul')
  over200kul.setAttribute("id" , "topEmployees")
  top5ul.setAttribute("id", "topSalaries");
  const top5 = async() => {
    for (let i = 0; i <  check.length; i++) {
      if (i === 0) {
        let text =  `Here are the Top <b>five</b> Earners`;
        let h1 = document.createElement('h1');
        h1.setAttribute("id", "h1top5")
        h1.setAttribute('class', 'text');
        h1.setAttribute("style", "left:50%")
        h1.innerHTML = text;
        top5ul.appendChild(h1);
      }
      let text = `<b>${i + 1}</b>: ${check[i][8]} <b>Salary</b>: ${check[i][11]}`;
      let li = document.createElement('li');
      li.setAttribute(`id`, `${i}`)
      li.setAttribute('class', 'text');
      li.innerHTML = text;
      top5ul.appendChild(li);
    }
  };
  const list200k = async () => {
    for (let i = 0; i < _check.length; i++) {
      if (i === 0) {
        const _text = `Here are the people who make over 200k`;
        const h1 = document.createElement('h1');
        h1.setAttribute("id", "h1200k")
        h1.setAttribute('class', 'text');
        h1.innerHTML = _text;
        over200kul.appendChild(h1);
      }
      const text = `<b>${i + 1}</b> ${_check[i][8]} at ${_check[i][11]}`;
      const li = document.createElement('li', `id`, `200k ${i}`);
      li.setAttribute("id", `${i}`)
      li.setAttribute('class', 'text');
      li.innerHTML = text;
      over200kul.appendChild(li);
    }
  };
  
  await top5();
  await list200k();
  container.appendChild(top5ul);
  container.appendChild(over200kul);
}
renderPosts(boston, document.getElementById('container'));
