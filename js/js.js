document.addEventListener("DOMContentLoaded", function() {
    var cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    // 更新光标位置，使用 clientX 和 clientY 考虑滚动偏移
    document.addEventListener("mousemove", function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // 监听所有<p>元素的鼠标悬停和离开事件
    var pElements = document.querySelectorAll('p');
    pElements.forEach(function(p) {
        p.addEventListener('mouseenter', function() {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.2)';
            cursor.style.width = '32px'; // 或任何你希望放大到的尺寸
            cursor.style.height = '32px'; // 或任何你希望放大到的尺寸
        });
        p.addEventListener('mouseleave', function() {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.width = '24px'; // 恢复原始尺寸
            cursor.style.height = '24px'; // 恢复原始尺寸
        });
    });
});
