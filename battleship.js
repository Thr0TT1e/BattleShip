let location1 = 3,
    location2 = 4,
    location3 = 5,
    guess,
    guesses = 0,
    hits = 0,
    isSunk = false;

while (!isSunk) {
    guess = prompt('Введите координаты корабля (от 0 до 6):');

    if (guess < 0 || guess > 6) {
        alert('Пожалуйста, введите корректный номер!');
    } else {
        guesses++;

        if (guess == location1 || guess == location2 || guess == location3) {
            hits++;

            if (hits == 3) {
                isSunk = true;
                alert('Ура!!! Корабль потоплен!');
            }
        }
    }
}