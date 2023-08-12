const tabsContainer = document.querySelector('.tabs');

if (tabsContainer) {
  const tabs = tabsContainer.querySelectorAll('.tab');
  const tabContents = tabsContainer.querySelectorAll('.tab__content');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('tab_active'));
      tab.classList.add('tab_active');

      tabContents.forEach((content, contentIndex) => {
        if (contentIndex === index) {
          content.classList.add('tab__content_active');
        } else {
          content.classList.remove('tab__content_active');
        }
      });
    });
  });
}
