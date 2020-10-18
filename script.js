const requestForm = document.getElementById('request-form');
const requestButton = document.getElementById('request-button');

requestButton.addEventListener('click', function() {
    if (requestForm.style.height !== '900px') {
        requestButton.innerHTML = 'Свернуть';
        requestForm.style.height = '900px';
        requestForm.style.opacity = '1';
    } else {
        requestForm.style.height = '0';
        requestForm.style.opacity = '0';
        requestButton.innerHTML = 'Записаться на консультацию';
    }
});

function hideText(titleLink, containerDiv) {
    titleLink.addEventListener('click', function(event) {
        event.preventDefault();

        if (containerDiv.style.height) {
            containerDiv.style.height = '';
        } else {
            containerDiv.style.height = `${containerDiv.scrollHeight}px`;
        }
    });
}

const sections = document.getElementsByClassName('section');
for (const section of sections) {
    const sectionTitle = section.getElementsByClassName('sectionTitle')[0];
    const sectionBody = section.getElementsByClassName('sectionBody')[0];
    hideText(sectionTitle, sectionBody);
}
