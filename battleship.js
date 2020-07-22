let randomLoc = Math.floor(Math.random() * 5),
    location1 = randomLoc,
    location2 = location1 + 1,
    location3 = location2 + 1,
    guess,
    guesses = 0,
    hits = 0,
    isSunk = false;

while (!isSunk) {
    guess = prompt('Введите координаты корабля (от 0 до 6):');

    if (guess < 1 || guess > 6) {
        alert('Пожалуйста, введите корректный номер!');
    } else {
        guesses++;

        if (guess == location1 || guess == location2 || guess == location3) {
            hits++;
            alert('ПОПАЛ!');

            if (hits == 3) {
                isSunk = true;
                alert('Ура!!! Корабль потоплен!');
            }
        } else {
            alert('Промахнулся');
        }
    }
}

alert(`Количество попыток: ${guesses}, Ваша точность: ${3 / guesses}`);