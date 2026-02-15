// ننتظر حتى يتم تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', () => {
    
    const buttons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.portfolio-item');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. إزالة التحديد عن كل الأزرار ووضعه على الزر الذي ضغطت عليه
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 2. الحصول على التصنيف المطلوب
            const filter = button.getAttribute('data-filter');

            // 3. التحكم في ظهور العناصر
            items.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || filter === category) {
                    item.style.display = 'block'; // أظهر العنصر
                } else {
                    item.style.display = 'none';  // أخفِ العنصر
                }
            });
        });
    });
});