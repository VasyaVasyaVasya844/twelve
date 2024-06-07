// BEGIN
export default function extractData(documentElement) {
    // Получаем все элементы <p> в документе
    const paragraphs = documentElement.getElementsByTagName('p');

    // Преобразуем HTMLCollection в массив и извлекаем текстовое содержимое
    const paragraphTexts = Array.from(paragraphs).map(p => p.textContent.trim());

    // Возвращаем массив текстов
    return paragraphTexts;
}

// END