
const userData = '{"name": "Ali"}';
function parseUser(json) {
    try {
        return JSON.parse(json);
    } catch (error) {
        return ("Invalid JSON: " + error.message);

        // return { name: "Unknown" };
    }
}
const validData = '{"name": "Ali"}';
console.log(parseUser(validData));
const invalidData = '{"name": "Ali"';
console.log(parseUser(invalidData));

//task 2
async function fetchUser() {
    return { name: "Jaffer", status: 200 };
}

async function getUser() {
    try {
        const data = await fetchUser();
        console.log("\n task 2\n", "User Data:", data);
    } catch (error) {
        console.log("Error occurred:", error);
    } finally {
        console.log("Request completed");
    }
}
getUser();

//task 3
function placeOrder(order, callback) {
    setTimeout(() => {
        console.log("task 3")
        if (!order) {
            callback("Order is missing", null);
        } else {
            callback(null, `Order placed for ${order}`);
        }
    }, 1000);
}
placeOrder("Burger", function (err, result) {
    if (err) {
        console.log("|\ntask 3\n", "Error:", err);
    } else {
        console.log(result);
    }
});
placeOrder("", function (err, result) {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log(result);
    }
});
//task 4
function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        if (email === "admin@gmail.com" && password === "1234") {
            resolve("Login successful");
        } else {
            reject("Invalid credentials");
        }
    });
}
loginUser("admin@gmail.com", "124")
    .then((result) => {
        console.log("\ntask 4\n", "Success:", result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

async function handleLogin() {
    try {
        await loginUser("admin@gmail.com", "1234")
            .then((res) => {
                console.log("Success:", res);
            })
    } catch (error) {
        console.log("Error:", error);
    } finally {
        console.log("Request completed", "\n");
    }
}
handleLogin();
//task 5
function getUsers() {
    return Promise.resolve(["Ali", "Sara"]);
}

function getPosts() {
    return Promise.resolve(["Post1", "Post2"]);
}
Promise.all([getUsers(), getPosts()])
    .then(([users, posts]) => {
        const result = {
            users: users,
            posts: posts
        };

        console.log("\n task 5\n", "Success:", result);
    })
    .catch((error) => {
        console.log("Error occurred:", error);
    });
//task 6
function api1() {
    return Promise.resolve("Success 1");
}

function api2() {
    return Promise.reject("Error 2");
}
Promise.allSettled([api1(), api2()])
    .then((results) => {
        console.log("API 1:", results[0]);
        console.log("API 2:", results[1]);
    });
//task 7
function fastAPI() {
    return new Promise(res => setTimeout(() => res("Fast API"), 5000));
}
function slowAPI() {
    return new Promise(res => setTimeout(() => res("Slow API"), 2000));
}
Promise.race([fastAPI(), slowAPI()])
    .then((response) => {
        console.log("\n task 7", "Fastest response:", response);
    })
    .catch((error) => {
        console.log("fastest failed:", error.errors);
    });
// task 8
function failAPI() {
    return Promise.reject("Fail");
}
function successAPI() {
    return Promise.resolve("Success");
}
Promise.any([failAPI(), successAPI()])
    .then((results) => {
        console.log("\ntask 8", "first successful result", results)
    })
    .catch((error) => {
        console.log("failed result", error)
    });

//Mini Project
function getUser() {
    return new Promise(res => setTimeout(() => res("User Data"), 1000));
}
function getOrders() {
    return new Promise(res => setTimeout(() => res("Orders Data"), 1500));
}
function getPayments() {
    return new Promise((res, rej) => setTimeout(() => rej("Payment Error"), 1200));
}
Promise.all([getUser(), getOrders(), getPayments()])
    .then((results) => {
        console.log("All Data:", results);
    })
    .catch((error) => {
        console.log("Error occurred:", error);
    });

async function loadData() {
    try {
        const results = await Promise.all([
            getUser(),
            getOrders(),
            getPayments()
        ]);

        console.log("All Data:", results);

    } catch (error) {
        console.log("Error:", error);

    }
}
Promise.allSettled([getUser(), getOrders(), getPayments()])
    .then((results) => {
        results.forEach((result) => {
            if (result.status === "fulfilled") {
                console.log("Success:", result.value);
            } else {
                console.log("Failed:", result.reason);
            }
        });
    });
Promise.race([getUser(), getOrders(), getPayments()])
    .then((result) => {
        console.log("Fastest Module:", result);
    })
    .catch((error) => {
        console.log("Fastest Module (Failed):", error);
    });
Promise.any([getUser(), getOrders(), getPayments()])
    .then((result) => {
        console.log("First Successful Module:", result);
    })
    .catch((error) => {
        console.log("All Failed:", error);
    });
Promise.allSettled([getUser(), getOrders(), getPayments()])
    .then((results) => {
        console.log("Results:", results);
    })
    .catch((error) => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Dashboard Loaded");
    });