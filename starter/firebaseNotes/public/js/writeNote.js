window.onload = (event) =>{
    firebase.auth().onAuthStateChanged((user)=>{
        if (user){
            consolde.log(user);
        } else{
            window.location = "index.html";
        }
    })
};