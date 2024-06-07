import escapeHtml from 'escape-html';

export default () => {
    const form = document.querySelector('.feedback-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = form.elements.email.value;
        const name = form.elements.name.value;
        const comment = form.elements.comment.value;

        const sanitizedEmail = escapeHtml(email);
        const sanitizedName = escapeHtml(name);
        const sanitizedComment = escapeHtml(comment);

        const result = document.createElement('div');
        result.innerHTML = `
      <p>Feedback has been sent</p>
      <div>Email: ${sanitizedEmail}</div>
      <div>Name: ${sanitizedName}</div>
      <div>Comment: ${sanitizedComment}</div>
    `;

        form.replaceWith(result);
    });
};
