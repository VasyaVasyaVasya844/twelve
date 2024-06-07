// BEGIN
export default function prettify(document) {
    const divElements = document.querySelectorAll('div');
    divElements.forEach(div => {
        const textNodes = Array.from(div.childNodes).filter(node => node instanceof Text);
        textNodes.forEach(textNode => {
            const trimmedText = textNode.textContent.trim();
            if (trimmedText !== '') {
                const paragraphElement = document.createElement('p');
                paragraphElement.textContent = trimmedText;
                textNode.replaceWith(paragraphElement);
            }
        });
    });
}

// END