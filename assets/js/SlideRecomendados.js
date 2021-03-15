var slide = document.getElementById('slide-container');




gerarNumeros = (qtdPost) => {
    numeros = []
    for (let i = 0; i < qtdPost; i++) {
        const n = this.gerarNumerosNaoContidos(numeros)
        numeros.push(n)
    } 
    return numeros
}

gerarNumerosNaoContidos = (nums) => {
    const novo = parseInt(Math.random() * postsHref.length - 1) + 1;
    return nums.includes(novo) ? this.gerarNumerosNaoContidos(nums) : novo
}

exibirPosts = () => {
    var posts = gerarNumeros(3);
    //console.log(posts)

    for (post in posts) {
        document.write(
            `<div id="slidePost" class="slider" style="background-image: url(${slidesCapa[posts[post]]});">
                <div class="playSlide"></div>
                <p><a id="linkSlide" href="${slidesHref[posts[post]]}">${slidesTitle[posts[post]]}</a></p>
            </div>`
        )
    }
}
exibirPosts();
