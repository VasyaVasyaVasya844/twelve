// BEGIN
document.addEventListener('DOMContentLoaded', () => {
    // Получаем содержимое body как HTML
    const bodyContent = document.body.innerHTML;

    // Разбиваем содержимое по переводу строки
    const lines = bodyContent.split('\n').map(line => line.trim()).filter(line => line.length > 0);

    // Оборачиваем каждую строку в <p> и соединяем их обратно в одну строку
    const newContent = lines.map(line => `<p>${line}</p>`).join('\n');

    // Вставляем полученное содержимое обратно в body
    document.body.innerHTML = newContent;
});




// END