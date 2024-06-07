document.querySelectorAll('.nav-link').forEach(tab => {
  tab.addEventListener('click', () => {
    // Get the tab content container
    const tabContentContainer = document.querySelector('.tab-content');

    // Ensure the tab content container exists
    if (!tabContentContainer) return;

    // Remove 'active' class from all tabs and panes
    document.querySelectorAll('.nav-link').forEach(t => t.classList.remove('active'));
    tabContentContainer.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));

    // Add 'active' class to the clicked tab
    tab.classList.add('active');

    // Get the target pane from data attribute
    const targetPaneId = tab.getAttribute('data-target');
    const targetPane = tabContentContainer.querySelector(`#${targetPaneId}`);

    // Ensure the target pane exists
    if (targetPane) {
      targetPane.classList.add('active');
    }
  });
});
