export default (document) => {
  // BEGIN
  // Находим элемент с классом 'content'
  const content = document.querySelector('.content');
  // Извлекаем заголовок категории
  const title = content.querySelector('h1').textContent.trim();
  // Извлекаем описание категории
  const description = content.querySelector('.description').textContent.trim();
  // Извлекаем все элементы div с классом 'links'
  const linkDivs = content.querySelectorAll('.links > div');
  // Преобразуем коллекцию элементов в массив и для каждого извлекаем данные статьи
  const items = Array.from(linkDivs).map((div) => {
    // Извлекаем заголовок статьи
    const articleTitle = div.querySelector('h2 > a').textContent.trim();
    // Извлекаем описание статьи
    const articleDescription = div.querySelector('p').textContent.trim();
    // Формируем объект с данными статьи
    return { title: articleTitle, description: articleDescription };
  });
  // Возвращаем объект с данными категории
  return { title, description, items };

  // END
};
