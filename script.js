const bnt = document.getElementById('btn-share');
const tooltip = document.getElementById('tooltip');

const tooltipFn = () => {
  bnt.addEventListener('click', (event) => {
    tooltip.classList.toggle('tooltip-show');
    bnt.classList.toggle('user__btn--active');
  });
};

export { tooltipFn };
