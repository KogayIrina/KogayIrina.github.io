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

function hideText (titleLink, containerDiv) {
    titleLink.addEventListener('click', function(event) {
        event.preventDefault();

        if (containerDiv.style.height === 'unset'){
            containerDiv.style.height = '';
        } else {
            containerDiv.style.height = 'unset';
        }
    });
}

const title = document.getElementById('titlePages');
const services = document.getElementById('insideServices');

const titleAboutMe = document.getElementById('titleAboutMe');
const background = document.getElementById('typeBackround');

const legalSection = document.getElementById('tagForLegalSection');
const conteinerLegalSection = document.getElementById('typeLegalSection');

hideText(title, services);

hideText(titleAboutMe, background);

hideText(legalSection, conteinerLegalSection);

