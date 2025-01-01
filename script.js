let isModalAnimating = false;

function openModal() {
    if (isModalAnimating) return;
    isModalAnimating = true;

    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('modal');

    overlay.style.display = 'block';
    modal.style.display = 'block';

    setTimeout(() => {
        overlay.style.opacity = '1';
        modal.style.opacity = '1';
        modal.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 10);

    setTimeout(() => {
        isModalAnimating = false;
    }, 300);

    // Открываем вкладку Мувмент по умолчанию
    openTab(null, 'movement');
}

function closeModal() {
    if (isModalAnimating) return;
    isModalAnimating = true;

    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('modal');

    overlay.style.opacity = '0';
    modal.style.opacity = '0';
    modal.style.transform = 'translate(-50%, -50%) scale(0.9)';

    setTimeout(() => {
        overlay.style.display = 'none';
        modal.style.display = 'none';
        isModalAnimating = false;
    }, 300);
}

function openTab(event, tabName) {
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }
    document.getElementById(tabName).style.display = 'block';

    const tabLinks = document.getElementsByClassName('tab-link');
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove('active');
    }
    if (event) {
        event.currentTarget.classList.add('active');
    } else {
        tabLinks[0].classList.add('active');
    }
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
}

// Добавил функцию для копирования IP
document.addEventListener('DOMContentLoaded', function() {
    const ipElement = document.querySelector('.highlight-green');
    if (ipElement) {
        ipElement.addEventListener('click', function() {
            const ip = this.textContent;
            navigator.clipboard.writeText(ip).then(() => {
                alert('IP скопирован: ' + ip);
            }).catch(err => {
                console.error('Не удалось скопировать IP: ', err);
            });
        });
    }
});

let isDiscordWidgetOpen = false;

function toggleDiscordWidget() {
    const widget = document.getElementById('discord-widget');
    const buttonImg = document.querySelector('.discord-widget-btn img');

    if (isDiscordWidgetOpen) {
        widget.style.left = '-400px';
        widget.style.opacity = '0';
        buttonImg.style.transform = 'scaleX(1)';
    } else {
        widget.style.left = '20px';
        widget.style.opacity = '1';
        buttonImg.style.transform = 'scaleX(-1)';
    }

    isDiscordWidgetOpen = !isDiscordWidgetOpen;
}