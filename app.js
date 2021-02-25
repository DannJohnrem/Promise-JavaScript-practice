const promise = new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.open("GET", "https://api.icndb.com/jokes/random");
    request.onload = () => {
        if (request.status === 200) {
            resolve(request.response);
        } else {
            reject(request.statusText);
        }
    };

    request.onerror = () => {
        reject(Error("error fethcing data"));
    };

    request.send();
});

console.log('Asynchronous request made.');

promise.then((data) => {
    console.log('Got data! Promise fulfilled');
    document.body.textContent = JSON.parse(data).value.joke;
}, (error) => {
    console.log('Promise rejected');
    console.log(error.message);
});
