document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        let preview = document.getElementById(item.dataset.target);
        let rect = item.getBoundingClientRect();
        preview.style.top = rect.bottom + "px"; // Position under the element
        preview.style.left = rect.left + "px"; 
        preview.style.display = "block";
        preview.style.maxHeight = "500px";
        preview.style.opacity = "1";
    });

    item.addEventListener('mouseleave', () => {
        setTimeout(() => {
            let preview = document.getElementById(item.dataset.target);
            if (!preview.matches(':hover')) {
                preview.style.display = "none";
                preview.style.maxHeight = "0";
                preview.style.opacity = "0";
            }
        }, 200);
    });
});

document.querySelectorAll('.preview-container').forEach(preview => {
    preview.addEventListener('mouseleave', () => {
        preview.style.display = "none";
        preview.style.maxHeight = "0";
        preview.style.opacity = "0";
    });
});