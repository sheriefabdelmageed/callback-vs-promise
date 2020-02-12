const checkAuth = cb => {
    console.log("checking...")
    setTimeout(() => {
        cb({ isAuth: true })
    }, 2000)
}

const getUser = function (authInfo, cb) {
    console.log("getting data ...")
    if (!authInfo || !authInfo.isAuth) {
        cb(null);
        return
    }
    setTimeout(() => {
        cb({
            name: "hello"
        })
    }, 2000);
}

const transformUserData = (user, cb) => {
    console.log("Transforming Data ...");
    setTimeout(transformedData => {
        user.age = 5;
        cb(user)
    }, 2000);
}

checkAuth(authInfo => {
    getUser(authInfo, user => {
        transformUserData(user, (data) => {
            console.log(data);
        })
    })
})
