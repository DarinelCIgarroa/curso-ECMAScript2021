window.addEventListener('DOMContentLoaded', () => {
    const contentPosts = document.querySelector("#posts");
    let loaded = "Cargando.....";
    contentPosts.innerHTML += loaded;

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            contentPosts.innerHTML = "";
            mostrarPosts(data)
        });

    function mostrarPosts(posts) {
        posts.forEach(post => {
            const structPost = ` <h2>Titulo del post: ${post.title}</h2>
                            <p>Descripcion del post: ${post.body}</p> <hr>`;
            contentPosts.innerHTML += structPost;

        });
    }
})