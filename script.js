function showAlert() {
    alert("Button was clicked!");

    // Prompt for a number
    const userInput = prompt("Please enter a number:");
    const number = parseInt(userInput, 10);

    // Check if the number is even or odd
    if (!isNaN(number)) {
        if (number % 2 === 0) {
            alert(number + " is even.");
        } else {
            alert(number + " is odd.");
        }

        // Log numbers from 1 to the user's number
        for (let i = 1; i <= number; i++) {
            console.log(i);
        }
    } else {
        alert("That's not a valid number!");
    }
}
