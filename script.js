//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function() {
    // Retrieve user inputs
    const text = document.getElementById("text").value;
    const delay = Number(document.getElementById("delay").value);
    const outputDiv = document.getElementById("output");

    // Clear previous output message
    outputDiv.innerText = "";

    // Validate the delay input
    if (isNaN(delay) || delay < 0) {
        outputDiv.innerText = "Please enter a valid delay in milliseconds.";
        return;
    }

    // Async function to wait for specified delay
    await delayMessage(text, delay);
});

// Async function to introduce delay and display message
async function delayMessage(message, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            // Display the message after delay
            document.getElementById("output").innerText = message;
            resolve();
        }, delay);
    });
}

