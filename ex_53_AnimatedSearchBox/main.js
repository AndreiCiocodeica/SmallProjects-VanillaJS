window.onload = () => {
    let btn = document.querySelector('.search-box button');
    let searchBox = document.querySelector('.search-box');
    let searchInput = document.querySelector('.search');

    btn.onclick = () => {
        searchBox.classList.toggle('active');
        //auto focus on input search
        searchInput.focus({
            preventScroll: true
        });
        searchInput.value = '';
        searchBox.style['box-shadow'] = '';
        if (searchBox.classList.contains('active')) {
            btn.innerHTML = '<i class="fa fa-times-circle"></i>'
        } else {
            btn.innerHTML = '<i class="fa fa-search"></i>'
        }
    }

    searchInput.oninput = (e) => {
        let value = e.target.value;
        let length = value.split('').length;
        searchBox.style['box-shadow'] = `0 0 ${length * 2}px #21f9ff,0 0 ${length * 1.5}px #21f9ff,0 0 ${length}px #21f9ff`;
    }
}
