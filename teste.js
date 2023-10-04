const pegaTexto = document.getElementById('pegaTexto')
const setTexto = document.querySelector('.textinho')


const storage = JSON.parse(localStorage.getItem("storage")) || []

storage.forEach( (element) => {
    alteraTexto(element)
} )


pegaTexto.addEventListener('submit', (e)=>{
    e.preventDefault();
    const txt = e.target.elements['texto']
    const pushaTexto = {'txt': txt.value}
    
    alteraTexto(pushaTexto)
    
    storage.push(pushaTexto)
    
    localStorage.setItem('storage', JSON.stringify(storage))


    txt.value = ""
})

function alteraTexto(texto){
    let textin = document.createElement('li')
    textin.innerHTML = texto.txt
    setTexto.appendChild(textin)
}

