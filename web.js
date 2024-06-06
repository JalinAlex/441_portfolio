//Alex Zheng Qiuyang
// Function to set the username and password in a cookie
function setUserInfo738() {
    const usernameInput = document.getElementById('usernameInput').value.trim();
    const passwordInput = document.getElementById('passwordInput').value.trim();
    if (usernameInput !== '' && passwordInput !== '') {
        setCookie738('username', usernameInput, 30); // Set cookie with name "username" lasting 30 days
        setCookie738('password', passwordInput, 30);
        alert(`"${usernameInput}" has been set in the cookie.`);
        location.assign("login.html");
    } else {
        alert('Please enter a valid username or password.');
    }
}

function setCookie738(cookieName, cookieValue, expirationDays) {
    const d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}



// Function to compare the username and password with the cookie
function getUserInfo738() {
    const username = getCookie738('username');
    const password = getCookie738('password');
    if (username !== '' || password !== '') {
        var usernameInput = document.getElementById('usernameInput').value;
        var passwordInput = document.getElementById('passwordInput').value;

        if (usernameInput == username && passwordInput == password) {
            location.assign("shopping.html");
            setCookie738('isLogin', true, 0.00069);
        }
        else {
            alert('Username or Password entered incorrectly.');
            setCookie738('isLogin', false, 0.00069);
        }
    } else {
        alert('Username cookie or Password cookie not found.');
    }
}

function getCookie738(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

function checkLogin738(){
    if(!getCookie738('isLogin') || getCookie738('isLogin')== ""){
        location.assign("login.html");
    }
}


//Shopping cart code
let cart = [];

function renderCart738() {
    const cartElement = document.getElementById('items');
    cartElement.innerHTML = ''; // #items initialize
    let totalPrice = 0;
    cart.forEach(item => {
        const itemElement = document.createElement('li');

        // Set text in the cart item
        itemElement.classList.add('item');
        itemElement.textContent = `${item.name} - AUD ${item.price}`;
        
        // Set remove button in the cart item
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeItem738(item);
        itemElement.appendChild(removeButton);

        // Add the item to #items
        cartElement.appendChild(itemElement);
        totalPrice += item.price;
    });

    //Change total text in time
    document.getElementById('total').textContent = `Total: AUD ${totalPrice}`;
}

function addItem738(itemName, itemPrice) {
    if (itemName && itemPrice) {
        cart.push({ name: itemName, price: itemPrice });
        renderCart738();
    } 
}

function removeItem738(item) {
    const index = cart.indexOf(item);
    if (index !== -1) {
        cart.splice(index, 1);
        renderCart738();
    }
}

function checkout738() {
    alert(`Thank you for your purchase! ${document.getElementById('total').textContent}`);
    clearCart738();
}

function clearCart738() {
    cart = [];
    renderCart738();
}



// Wait for document loaded
document.addEventListener("DOMContentLoaded", (event) => {
    // Create a "close" button and append it to each list item
    var nodelist = document.querySelectorAll("#todoList > li");
    for (var i = 0; i < nodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        nodelist[i].appendChild(span);
    }

    // Add a "checked" symbol when clicking on a list item
    var list = document.getElementById("todoList");
    list.addEventListener('click', function (checked) {
        if (checked.target.tagName === 'LI') {
            checked.target.classList.toggle('checked');
        }
    }, false);

    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
});

// Create a new list item when clicking on the "Add" button
function addTodo738() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("todoInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("todoList").appendChild(li);
    }
    document.getElementById("todoInput").value = "";
    
    // Create a "close" button and append it to each list item
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

