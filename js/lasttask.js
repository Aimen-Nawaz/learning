//Task 20
let choice;

do {

    choice = prompt(
        "--- Food Ordering System ---\n" +
        "1. Burger\n" +
        "2. Pizza\n" +
        "3. Exit\n\n" +
        "Enter your choice (1-3):"
    );

    if (choice === "1") {
        alert("You ordered a Burger! ");
    } else if (choice === "2") {
        alert("You ordered a Pizza! ");
    } else if (choice === "3" || choice === null) {
        alert("Exiting system. Goodbye! ");
        choice = "3";
    } else {
        alert("Invalid choice, please try again.");
    }

} while (choice !== "3");
