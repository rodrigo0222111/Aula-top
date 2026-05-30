const filmes = [
    {
        titulo: "Vingadores",
        imagem: "https://image.tmdb.org/t/p/w300_and_h450_face/in1R2dDc421JxsoRWaIIAqVI2KE.jpg",
        descricao: "Os amigos do BATMAN",
    },
    {
        titulo: "BATMAN",
        imagem: "https://image.tmdb.org/t/p/w300_and_h450_face/Qjwp9w0qRfW5HgIHNA7ul9wPDG.jpg",
        descricao: "O cavaleiro das trevas",
    },
    {
        titulo: "Homem-Aranha: No Aranhaverso ",
        imagem: "https://www.themoviedb.org/t/p/w300_and_h450_face/gte2cJ3mtc2I8hZyXwRTzyclKuC.jpg",
        descricao: "Miles Morales é um jovem negro do Brooklyn que se tornou o Homem-Aranha inspirado no legado de Peter Parker, já falecido.",
    },
    {
        titulo: "Mulher Maravilha",
        imagem: "https://image.tmdb.org/t/p/w600_and_h900_face/miSHDjGoeoUFdwraljj6iCzus8P.jpg",
        descricao: "Mulher Maravilha 1984",
    },
    {
        titulo: "Vingadores: Ultimato",
        imagem: "https://image.tmdb.org/t/p/w600_and_h900_face/9fRX8UKlIW7Lb9GqNsJVakWWFCi.jpg",
        descricao: "Os Vingadores se reúnem para enfrentar Thanos e salvar o universo.",
    }

];
const listaFilmes = document.getElementById("listaFilmes")

function mostrarFilme(lista) {
    listaFilmes.innerHTML = ""
    lista.forEach(filme => {
        listaFilmes.innerHTML += `
            <div class="col-md-4">
                <div class="card-filme h-100">
                    <img src="${filme.imagem}" class="card-img-top" width="100" height="150" alt="${filme.titulo}">
                    <div class="card-body">
                        <h3>${filme.titulo}</h3>
                        <p>${filme.descricao}</p>
                        <button class="btn btn-primary" onclick="detalhesFilme('${filme.titulo}')">Ver Detalhes</button>
                    </div>
                </div>
            </div>
        `
    })
}

mostrarFilme(filmes)

function detalhesFilme(titulo) {
    Swal.fire ({
        title:titulo,
        text:"Mais informações do filme.",
        icon:"info"
    })
}

const campoBusca = document.getElementById("campoBusca")

campoBusca.addEventListener("input", () => {
    const texto = campoBusca.value.toLowerCase()
    const filmesFiltrados = filmes.filter(filme => filme.titulo.toLowerCase().includes(texto))
    mostrarFilme(filmesFiltrados)
})