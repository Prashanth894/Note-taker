var ul = document.getElementById('ul-id')
var submit = document.querySelector("#sub-btn")

submit.addEventListener("click", e => {
    e.preventDefault()

    const text = document.querySelector("#text-input").value
    const time = document.querySelector('#time').value
    //    console.log(time);
    var checkBox = document.querySelector("#check").checked
    //    console.log(checkbox);


    const newLi = document.createElement('li')
    newLi.setAttribute('class', 'h1 li-group-item ')
    newLi.setAttribute('id', 'li-grp')
    const newtime = document.createElement('span')
    newtime.setAttribute('class', 'h3 li-grp')
    newtime.setAttribute('id', 'time-id')

    newLi.textContent = text
    newtime.textContent = time
    newLi.appendChild(newtime)

    const delBtn = document.createElement("button")
    delBtn.setAttribute("class", "btn btn-danger btn")
    delBtn.textContent = "x"


    newLi.appendChild(delBtn)
    document.querySelector('ul').appendChild(newLi)

    setTimeout(() => { colorSet(newLi, checkBox) }, 0)

    ul.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn')) {

            const li = e.target.parentElement;
            // console.log(li);
            ul.removeChild(li)
        }
        // console.log(e.target);
    })
    
     document.querySelector("#text-input").value=""
     document.querySelector('#time').value=""
    //    console.log(time);
    document.querySelector("#check").checked=false
    //    console.log(checkbox);

})

function colorSet(newLi, checkBox) {
    if (checkBox) {
        newLi.classList.add('positive');
        // console.log('green');
    }
    else {
        newLi.classList.add('negative');
        // console.log('red');

    }

}








