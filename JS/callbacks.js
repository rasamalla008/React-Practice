// its a function is passed inside another function
function getUser(callbackFunction) {
  console.log("here is function getUSer details");
  const user = { name: "nikhil", age: 28 };
  callbackFunction(user);
}

function fetchUserDetail(user) {
  console.log(user);
}

getUser(fetchUserDetail);



console.log("logging and checking the effect of console.log");


const getUsers = (callback)=>{
    setTimeout(()=>{const user  = {name: 'nikhil'}; callback(user)})
}

getUsers((user)=>{console.log(user)})

//callback hell
apurl.createORder(()=>{
    apiUrl.getPayment(()=>{
        api.getAddress(()=>{
            api.orderSummary(()=>{
                ap.dispatch(()=>{
                    api.orderList(()=>{
                        apiUrl.getPayment(()=>{
                            api.getAddress(()=>{
                                api.orderSummary(()=>{
                                    ap.dispatch(()=>{
                                        api.orderList(()=>{
                                            apiUrl.getPayment(()=>{
                                                api.getAddress(()=>{
                                                    api.orderSummary(()=>{
                                                        ap.dispatch(()=>{
                                                            api.orderList(()=>{
                                        
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})