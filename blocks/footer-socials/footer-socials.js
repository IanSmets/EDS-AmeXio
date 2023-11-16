export default function decorate(block) {
    const cols = [...block.firstElementChild.children];
    block.classList.add(`footer-socials-${cols.length}-cols`);

    // setup image footer-socials
    [...block.children].forEach((row) => {
        [...row.children].forEach((col) => {
            const pic = col.querySelector('picture');
            if (pic) {
                const picWrapper = pic.closest('div');
                if (picWrapper) {
                    picWrapper.classList.add('footer-socials-img-col');
                }
            }
        });
    });


    // Create orange divider
    var newDiv = document.createElement('div');
    newDiv.className = 'footer-divider';
    var existingFooter = document.querySelector('.footer.block');
    existingFooter.insertAdjacentElement('beforebegin', newDiv);

}