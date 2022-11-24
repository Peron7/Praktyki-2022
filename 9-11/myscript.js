//9
const z9 = new Promise((res) => {
        setTimeout(() => {res("Udalo sie!");}, 5000);
    })
    .then(console.log);

//10

const MultiplyAsync = (x, y) => new Promise((res, reject) => {
        if (typeof x != 'number' || typeof y != 'number'){
        return reject("Źle, liczby musza być");
        }else{
        return res(x * y);
        }
    });

MultiplyAsync(2, 5)
    .then(console.log)
    .catch(console.error);

// //11
const get = () => fetch('https://jsonplaceholder.typicode.com/posts')

get()
    .then(res => {
        if (res.status == 200) return res.json();
        throw new Error("Error");
    })
    .then(posts => posts.forEach(({title, body}) => console.log(`title: ${title}\n`, `body: ${body}`)))
    .catch(console.error)