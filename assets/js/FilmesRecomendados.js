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
    var posts = gerarNumeros(15);
    //console.log(posts)


    for (post in posts) {
        document.write(
            `<div id="post" class="post">
                <div class="img-categoria" style="background-image: url(${postsImage[posts[post]]});">
                    <div id="categorias-area" class="categorias-area">
                        <div class="categoria">${postsCategoria[posts[post]]}</div>
                    </div><!--categoria-area-->
                    <div class="icon-play"></div>
                </div><!--img-categoria-->
                <p class="post-title"><a id="linkPost" href="${postsHref[posts[post]]}">${postsTitle[posts[post]]}</a></p>
            </div><!--Post-->`
        )
       
    }
}
exibirPosts()