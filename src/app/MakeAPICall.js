export async function MakeApiCall(url, method, data = null) {
    if (!url || !method) {
        console.log("Both 'url' and 'method' parameters are required.");
        return null; // or handle the error appropriately
    }

    const validMethods = ['GET', 'POST', 'PUT', 'DELETE']; // Add more methods if needed

    if (!validMethods.includes(method.toUpperCase())) {
        console.log("Invalid method. Please provide a valid HTTP method.");
        return null; // or handle the error appropriately
    }

    let options = {
        method: method,
        cache: "no-cache"
    };

    try {
        let response = await fetch(url, options);

        if (!response.ok) {
            console.log("Error:", response.status, response.statusText);
            return null; // or handle the error appropriately
        }

        let responseData = await response.json();
        return responseData;
    } catch (error) {
        console.log("An error occurred:", error.message);
        return null; // or handle the error appropriately
    }
}


