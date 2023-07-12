export function getRandomString() {
    const cities = ['Saint Petersburg', 'Moscow', 'Minsk', 'Volgograd', 'Kazan', 'Samara']
    const randomIndex = Math.floor(Math.random() * cities.length);
    return cities[randomIndex];
}