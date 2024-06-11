const xhr = new XMLHttpRequest(); //creates request to send to the backend

//async
xhr.addEventListener('load', () => {
    console.log(xhr.response);
});

//types of requests GET, POST, PUT, DELETE
xhr.open('GET', 'https://supersimplebackend.dev/products/first'); //url of where to send message/request to
xhr.send();
