import axios from "axios";
export async function MakeApiCall(url, method, data = null) {
    let options = {
        method: method,
        cache: "no-cache"
    };


    let response = await fetch(url, options);
    let responseData = await response.json();
    return responseData;
}


