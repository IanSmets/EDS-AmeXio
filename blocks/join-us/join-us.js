export default function decorate(block) {
    const cols = [...block.firstElementChild.children];

    // setup image footer-socials
    [...block.children].forEach((row) => {

        [...row.children].forEach((col) => {

            const pic = col.querySelector('picture');
            if (pic) {
                const picWrapper = pic.closest('div');
                if (picWrapper) {
                    picWrapper.classList.add('join-us-message');
                    picWrapper.parentNode.classList.add('join-us-message-list')
                }
            }
            const title = col.querySelector('h2');
            if(title) {
                const picWrapper = title.closest('div');
                if (picWrapper) {
                    picWrapper.classList.add('join-us-title');
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