document.addEventListener('click', function(event) {
    var userDropdown = document.querySelector('.user-dropdown');
    var cartDropdown = document.querySelector('.cart-dropdown');

    if (event.target.closest('.user-button')) {
        userDropdown.style.display = (userDropdown.style.display === 'block') ? 'none' : 'block';
        cartDropdown.style.display = 'none'; // إخفاء قائمة السلة عند فتح قائمة المستخدم
    } else if (event.target.closest('.cart-button')) {
        cartDropdown.style.display = (cartDropdown.style.display === 'block') ? 'none' : 'block';
        userDropdown.style.display = 'none'; // إخفاء قائمة المستخدم عند فتح قائمة السلة
    } else {
        userDropdown.style.display = 'none';
        cartDropdown.style.display = 'none';
    }
});
