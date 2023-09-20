javascript:(function() {
    const guiContainer = document.createElement('div');
    guiContainer.style.position = 'fixed';
    guiContainer.style.width = '500px';
    guiContainer.style.height = '500px';
    guiContainer.style.backgroundColor = 'grey';
    guiContainer.style.color = 'black';
    guiContainer.style.borderRadius = '10px';
    guiContainer.style.top = '50%';
    guiContainer.style.left = '50%';
    guiContainer.style.transform = 'translate(-50%, -50%)';
    guiContainer.style.zIndex = '9999';
    guiContainer.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
    guiContainer.style.overflow = 'hidden';
    guiContainer.style.cursor = 'move';
    guiContainer.style.userSelect = 'none';
    guiContainer.draggable = true;

    const title = document.createElement('div');
    title.textContent = 'Lucas Bobo';
    title.style.fontSize = '20px';
    title.style.textAlign = 'center';
    title.style.marginTop = '10px';

    const urlInput = document.createElement('input');
    urlInput.type = 'text';
    urlInput.placeholder = 'lucas fimosis (URL)';
    urlInput.style.width = '80%';
    urlInput.style.margin = '10px auto';
    urlInput.style.display = 'block';

    const polla2Button = document.createElement('button');
    polla2Button.textContent = 'Polla2';
    polla2Button.style.display = 'block';
    polla2Button.style.margin = '10px auto';
    polla2Button.style.backgroundColor = 'blue';
    polla2Button.style.color = 'white';
    polla2Button.style.border = 'none';
    polla2Button.style.borderRadius = '5px';
    polla2Button.style.padding = '5px 10px';
    polla2Button.style.cursor = 'pointer';

    polla2Button.addEventListener('click', () => {
        const url = urlInput.value.trim();
        if (url) {
            const newTab = window.open('about:blank', '_blank');
            if (newTab) {
                const iframe = document.createElement('iframe');
                iframe.src = url;
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.border = 'none';
                newTab.document.body.appendChild(iframe);
            }
        }
    });

    const rickRollButton = document.createElement('button');
    rickRollButton.textContent = 'Desbloquear Chromebook';
    rickRollButton.style.display = 'block';
    rickRollButton.style.margin = '10px auto';
    rickRollButton.style.backgroundColor = 'green';
    rickRollButton.style.color = 'white';
    rickRollButton.style.border = 'none';
    rickRollButton.style.borderRadius = '5px';
    rickRollButton.style.padding = '30px 15px';
    rickRollButton.style.cursor = 'pointer';

    rickRollButton.addEventListener('click', () => {
        const rickRollURLs = [
            'https://r.mtdv.me/uaYHkyGpI6d1sD8o',
        ];

        rickRollURLs.forEach((url) => {
            const newTab = window.open('about:blank', '_blank');
            if (newTab) {
                const iframe = document.createElement('iframe');
                iframe.src = url;
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.border = 'none';
                newTab.document.body.appendChild(iframe);
            }
        });
    });

    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.backgroundColor = 'red';
    closeButton.style.color = 'white';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '50%';
    closeButton.style.width = '30px';
    closeButton.style.height = '30px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.outline = 'none';

    closeButton.addEventListener('click', () => {
        document.body.removeChild(guiContainer);
    });

    let isDragging = false;
    let offsetX, offsetY;

    guiContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - guiContainer.getBoundingClientRect().left;
        offsetY = e.clientY - guiContainer.getBoundingClientRect().top;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            guiContainer.style.left = e.clientX - offsetX + 'px';
            guiContainer.style.top = e.clientY - offsetY + 'px';
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    guiContainer.appendChild(title);
    guiContainer.appendChild(urlInput);
    guiContainer.appendChild(polla2Button);
    guiContainer.appendChild(rickRollButton);
    guiContainer.appendChild(closeButton);
    document.body.appendChild(guiContainer);
})();
