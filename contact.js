const form = document.querySelector('form')

form.addEventListener('submit', event => {
    // prevent the form submit from refreshing the page
    event.preventDefault()

    const { name, email, message } = event.target

    console.log('Name: ', name.value)
    console.log('email: ', email.value)
    console.log('Message: ', message.value)

    const endpoint = "https://5y2xvzl6re.execute-api.us-west-1.amazonaws.com/Prod/sendContactEmail"

    const body = JSON.stringify({
        senderName: name.value,
        senderEmail: email.value,
        message: message.value
    })

    const requestOptions = {
        method: "POST",
        body
    }

    fetch(endpoint, requestOptions)
        .then((response) => {
            if (!response.ok) throw new Error("Error in fetch");
            return response.json();
        })
        .then((response) => {
            document.getElementById("result-text").innerText =
                "Email sent successfully!";
        })
        .catch((error) => {
            document.getElementById("result-text").innerText =
                "Thank You! I will acknowledge your email ASAP.";
        });

})