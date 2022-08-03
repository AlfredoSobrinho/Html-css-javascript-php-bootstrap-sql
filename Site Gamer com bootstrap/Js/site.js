const setLocalStorage = (jogo) => localStorage.setItem('jogo', JSON.stringify(jogo));
const getLocalStorage = () => JSON.parse(localStorage.getItem('jogo')) ?? [];

function salvarEabrirNovaPagina(elementoDivCard) {
    setLocalStorage({
        nome: elementoDivCard.dataset.nome,
        qtd_imagen: elementoDivCard.dataset.qtd_imagen,
        imagen: elementoDivCard.dataset.imagen,
        descricao: elementoDivCard.dataset.descricao

    });

    window.location.href = "jogos.html";

}
function carregarpaginajogo() {

    if (window.location.pathname.indexOf('jogos.html') > 0) {

        var jogoSelecionado = getLocalStorage();

        document.getElementById('url-jogo').innerHTML = `https://www.${jogoSelecionado.imagen}.com`;
        document.getElementById('texto-jogo').innerHTML = jogoSelecionado.descricao;
        document.getElementById('banner-jogo').appendChild(elementoImagem(jogoSelecionado.imagen, true));

        for (var index = 1; index <= parseInt(jogoSelecionado.qtd_imagen); index++) {
            var nomeImagen = jogoSelecionado.imagen + index + '.jpg';
            console.log('nome imagen: ', nomeImagen);

            //criar div que contem imagens lado  a ado
            var divImagen = document.createElement('div');
            divImagen.classList.add('col-md-4');


            //Adicionar as imagens na div 
            divImagen.appendChild(elementoImagem(nomeImagen));
            document.getElementById('galeria-jogo').appendChild(divImagen);


        }

    }
}




function elementoImagem(nomeImagen, isBanner = false) {


    var imagen = document.createElement('img');
    imagen.alt = nomeImagen;





    if (isBanner) {

        imagen.src = `./img/banner/${nomeImagen}-1920x600.jpg`;
        imagen.classList.add('d-block', 'w-100');

    }

    else {
        imagen.src = `./img/games/${nomeImagen}`;
        imagen.classList.add('rounded', 'img-jogo-descricao');
    }



    return imagen;
}







carregarpaginajogo();