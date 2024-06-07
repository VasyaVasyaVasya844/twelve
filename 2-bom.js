// BEGIN
// solutions/2-bom.js
export default function solution(url) {
    // Получаем информацию о браузере из объекта navigator
    const userAgent = navigator.userAgent;

    // Переходим на новую страницу
    location.assign(url);

    // Формируем и возвращаем строку с информацией о браузере и новой странице
    return `${userAgent} ${url}`;
}


// END