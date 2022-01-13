function updateNavActive(set) {
    const home = document.getElementById('home link')
    console.log(home);
    const portfolio = document.getElementById('portfolio link')
    console.log(portfolio);
    const aboutme = document.getElementById('about me link')
    console.log(aboutme);
    const contact = document.getElementById('contact link')
    console.log(contact);
    const navArr = [
        document.getElementById('home link'),
        document.getElementById('portfolio link'),
        document.getElementById('about me link'),
        document.getElementById('contact link'),
    ];
    navArr.forEach(nav => {
        if(nav.className === 'nav link active') {
            nav.classList = 'nav link';
        }
        if (nav.id === set) {
            nav.className = 'nav link active';
        }
    });

}

export default updateNavActive
