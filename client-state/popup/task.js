let modal = document.getElementById('subscribe-modal');
let modalClose = document.querySelector('.modal__close')

const getCookie = (name) => {
        const value = "; " + document.cookie;
        let parts = value.split("; " + name + "=");

        if (parts.length === 2) {
            return parts
            .pop()
            .split(";")
            .shift();
        }
    }

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active');

    document.cookie = 'subscribeClosed=true';
})

if (!getCookie('subscribeClosed')) {
    modal.classList.add('modal_active');
}
