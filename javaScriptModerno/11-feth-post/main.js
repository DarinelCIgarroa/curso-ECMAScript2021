let newPost = JSON.stringify({
    userId: 1,
    title: 'nuevos post de darinel',
    body: 'El cuerpo de mi post'
});

fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "POST",
    body: newPost,
    headers:{
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(data => console.log(data));

