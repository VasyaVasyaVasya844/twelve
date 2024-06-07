import camelCase from 'lodash/camelCase';

// BEGIN
export default function normalize(document) {
    const elements = document.body.getElementsByTagName('*');
    Array.from(elements).forEach(element => {
        const classNames = element.className.split(' ');
        const normalizedClassNames = classNames.map(className => camelCase(className));
        element.className = normalizedClassNames.join(' ');
    });
}

// END