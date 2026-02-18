function updateClock() {
    const now = new Date();
    
    const timeParts = {
        hours: String(now.getHours()).padStart(2, '0'),
        minutes: String(now.getMinutes()).padStart(2, '0'),
        seconds: String(now.getSeconds()).padStart(2, '0')
    };

    for (const part in timeParts) {
        const element = document.getElementById(part);
        const top = element.querySelector('.top');
        const bottom = element.querySelector('.bottom');
        
        if (top.innerText !== timeParts[part]) {
            // 数字が変わった時にアニメーションをリセット
            element.classList.remove('flip');
            void element.offsetWidth; // リフローを強制して再発火
            element.classList.add('flip');
            
            top.innerText = timeParts[part];
            bottom.innerText = timeParts[part];
        }
    }
}

// 1秒ごとに実行
setInterval(updateClock, 1000);
updateClock();
