function hideContainer(titleLink, containerDiv, containerHeight, onShow, onHide) {
    titleLink.addEventListener('click', function(event) {
        event.preventDefault();

        if (containerDiv.style.height) {
            containerDiv.style.height = '';
            containerDiv.style.opacity = '';
            if (onHide) {
                onHide();
            }
        } else {
            containerDiv.style.opacity = '1';
            containerDiv.style.height = `${containerHeight || containerDiv.scrollHeight}px`;
            if (onShow) {
                onShow();
            }
        }
    });
}

const requestForm = document.getElementById('request-form');
const requestButton = document.getElementById('request-button');

hideContainer(
    requestButton,
    requestForm,
    920,
    () => requestButton.innerHTML = 'Свернуть',
    () => requestButton.innerHTML = 'Записаться на консультацию'
);

const sections = document.getElementsByClassName('section');
for (const section of sections) {
    const sectionTitle = section.getElementsByClassName('sectionTitle')[0];
    const sectionBody = section.getElementsByClassName('sectionBody')[0];
    hideContainer(sectionTitle, sectionBody);
}
