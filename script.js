document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.portfolio-item');

    // تشغيل الأنيميشن لأول مرة عند تحميل الصفحة
    items.forEach(item => item.classList.add('show'));

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            items.forEach(item => {
                const category = item.getAttribute('data-category');
                
                // إضافة تأخير بسيط لإعطاء شكل جمالي
                item.classList.remove('show');
                
                setTimeout(() => {
                    if (filter === 'all' || filter === category) {
                        item.style.display = 'block';
                        // نستخدم requestAnimationFrame للتأكد من أن المتصفح استوعب ظهور العنصر قبل تحريكه
                        requestAnimationFrame(() => {
                            item.classList.add('show');
                        });
                    } else {
                        item.style.display = 'none';
                    }
                }, 300); // وقت الأنيميشن
            });
        });
    });
});