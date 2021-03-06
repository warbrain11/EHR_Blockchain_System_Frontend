var selected;

//Must load the last window that was previously loaded
load_this = localStorage.getItem("index_last_nav_viewed");
selected = document.getElementById(load_this);

//Check if token is saved, if token exists, set account label to username
token = localStorage.getItem("Token");
username = localStorage.getItem("Username");

if(token != "null" && username != "null"){
    //Change the Account List Index Text to the Username
    accountLabel = document.getElementById("account_label");
    accountLabel.innerText = username;
    
    //Disable the Login Button
    loginButton = document.getElementById("login_button");
    loginButton.style.display = "none";

    //Go to home page
    display_home();
} else {
    //Enable the Login Button
    loginButton = document.getElementById("login_button");
    loginButton.style.display = "block";

    //Wipe Username Label
    accountLabel = document.getElementById("account_label");
    accountLabel.innerText = "Account";

    if(localStorage.getItem("index_last_nav_viewed") == "login")
    {
        display_login();
    }
}


if(selected != null)
{
    selected.style.visibility = "visible";
}

function display_login()
{
    if(selected != null)
    {
        selected.style.visibility = "hidden";
        console.log("disabled previous window");
    }
    selected = document.getElementById("login");
    selected.style.visibility = "visible";
    console.log("enabled login window");

    localStorage.setItem("index_last_nav_viewed", "login")
}

function display_home()
{
    if(selected != null)
    {
        selected.style.visibility = "hidden";
        console.log("disabled previous window");
    }
    selected = document.getElementById("home");
    selected.style.visibility = "visible";
    console.log("enabled home window");

    localStorage.setItem("index_last_nav_viewed", "home")
}

function display_about_us()
{
    if(selected != null)
    {
        selected.style.visibility = "hidden";
        console.log("disabled previous window");
    }
    selected = document.getElementById("about_us");
    selected.style.visibility = "visible";
    console.log("enabled about_us window");

    localStorage.setItem("index_last_nav_viewed", "about_us")
}



