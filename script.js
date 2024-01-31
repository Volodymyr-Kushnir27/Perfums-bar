/* Карусель для новин */
document.addEventListener('DOMContentLoaded', function() {
    const newsElements = document.querySelectorAll('.news-section h');
    let currentIndex = 0;

    setInterval(() => {
        // Змінюємо видимий елемент
        newsElements[currentIndex].classList.remove('visible');
        currentIndex = (currentIndex + 1) % newsElements.length;
        newsElements[currentIndex].classList.add('visible');
    }, 3000);
});


document.addEventListener('DOMContentLoaded', function() {
    const photoDifuzor = document.querySelector('.photo-difuzor');
    const imageSources = [
        'photo/difuzor.webp',
        'photo/difuzor2.jpeg' ,
        'photo/difuzor1.jpeg',
        
    ];
    let currentIndex = 0;

    // Функція для додавання нової фотографії до елементу photo-difuzor
    function addNewImage() {
        // Створюємо новий елемент img
        const newImage = document.createElement('img');
        newImage.src = imageSources[currentIndex];
        newImage.alt = 'Фото продукту ' + (currentIndex + 1);
        newImage.classList.add('product-image', 'active');

        // Додаємо новий елемент img до photo-difuzor
        photoDifuzor.appendChild(newImage);

        // Отримуємо всі фотографії в photo-difuzor
        const images = photoDifuzor.querySelectorAll('.product-image');

        // Перевіряємо, чи перевищено обмеження кількості фотографій
        if (images.length > 1) {
            // Видаляємо попередню фотографію, якщо їх більше 1
            images[0].remove();
        }

        // Збільшуємо індекс для наступної фотографії
        currentIndex = (currentIndex + 1) % imageSources.length;
    }

    // Додаємо першу фотографію при завантаженні сторінки
    addNewImage();

    // Викликаємо функцію для додавання нової фотографії кожні 5 секунд
    setInterval(addNewImage, 4000);
});















    


