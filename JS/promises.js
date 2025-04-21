const promise2 = new Promise((resolve, reject)=>{
    const data= fetch(apiUrl);
    if(data.length > 0 && data.statusCode === 200){
        resolve();
    }else{
        reject();
    }
})
const promise3 = new Promise((resolve, reject)=>{
    const data= fetch(apiUrl);
    if(data.length > 0 && data.statusCode === 200){
        resolve();
    }else{
        reject();
    }
})
const promise = fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    //   anotherAPI
  })
  .catch((err) => {
    console.log(err);
  })
  .then((res) => {})
  .catch((err) => {
    console.log(err);
  })
  .then((res) => {})
  .catch((err) => {
    console.log(err);
  })
  .then((res) => {})
  .catch((err) => {
    console.log(err);
  });

console.log(promise);

const promise1 = new Promise((resolve, reject) => {
  const data = fetch("https://jsonplaceholder.typicode.com/users/1"); //creatOrder

  if (data.length >= 0) {
    resolve();
  } else {
    reject();
  }
});
promise1
  .then((res) => {
    if (res) {
      // call another
    }
  })
  .then(() => {
    const fetchGetPAymentMEthod = fetch("apiURlForGetPayment");
  }).theb;

//promise.all([promise1, promise2]);
//promise.race([promise1, promise2]).then((ress)={console.log(ress)}).catch((err)=>{console.log(Err)})

