// function Header(argument = 'The data format is not correct Please contact your admin.'){
//     console.log(argument);
    
//     if(argument.length>0){
//     argument.map((item)=>  return (<>{<li>item.name</li>}</>))
// }else{
//     console.log(argument)
// }}
// var a =10;
// Header(a)

let user = [{name: null, age: 0, country: ""}, {name: 'nikhil', age: 28, country: "India"}
    , {name: 'nikhil', age: 28, country: "India"}
    , {name: 'nikhil', age: 28, country: "India"}
    , {name: 'nikhil', age: 28, country: "India"}
    , {name: 'nikhil', age: 28, country: "India"}, {name: 'nikhil', age: 28, country: "India"}, {name: 'nikhil', age: 28, country: "India"}];
    
    // user.map((userDetail)=>(<li> {userDetail?.name}</li>))
    
    // if(userDetail.name !== null){
    //     console.log(userDetail.name)
    // }
    
    //falsy value means if value is null | undefined | false | 0| "";
    // truthy means value if value is "nikhil", 1, true;
    
    //short circuting  &&
    // the rhs will only be executed only if lhs is not falsy(null || undeinfed)
    
    // console.log(user[0].name && 18 )
    // console.log(user[0].name && "Guest Name")
    
    //  // nullish coaelscing ??
    // console.log(user[0].name ?? "Guest Name")  // if the value of lhs is null or undefined then only it will move to rhs (default)
    
    // &&                                                                       ??
    // rhs will execute only if lhs is not null or undefined               rhs will only run if lhs is null or undefined;
    
    
    // const a  =fetch(apiUrl)
    
    // try {
    //     manipulate with a and go with further operation
    // }
    // catch(err){
    //     console.log('error is there please fix it')
    // }
    
    
    // localstorage || sessionStorage
    
    sessionStorage.setItem('jwtToken', 'asfdasdfasdf')
    localStorage.setItem("jwtToken", "Asdfasdfas");
    
    
    localstorage.getItem("jwtToken");
    sessionStorage.getItem("jwtToken");
    
    sessionStorage.removeItem("jwtToken");
    localStorage.removeItem("jwtoekn")
    
    
    