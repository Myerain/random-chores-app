function getRandomChore() {
    const chores = [
        "Clean the house",
        "Wash the dishes",
        "Do the laundry",
        "Clean the windows",
        "Make the bed",
        "Vacuum the floor",
        "Take out the trash",
        "Organize the closet"
    ];

    const randomIndex = Math.floor(Math.random() * chores.length);
    const randomChore = chores[randomIndex];

    const choreElement = document.getElementById('chore');
    choreElement.innerText = `Congratulations!!You have won：${randomChore}`;
}
