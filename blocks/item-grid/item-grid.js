export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`item-grid-${cols.length}-cols`);

  // setup image item-grid
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('item-grid-img-col');
        }
      }
    });
  });
}
