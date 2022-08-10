<template>
    <main class="main">
        <div class="main_container content">
            <div class="content__top">
                <h2 class="title">Добавление товара</h2>
                <select name="filters" id="filter-select" class="select-filter">
                    <option class="select-placeholder" value="" disabled selected hidden>По умолчанию</option>
                    <option value="name">А-Я</option>
                    <option value="max">Max-Min</option>
                    <option value="min">Min-Max</option>
                </select>
            </div>
            <div class="content__catalog">
                <aside class="add">
                    <form action="#" class="add_from form">
                        <label class="form__label form__label_name">
                            <span class="form__title">Наименование товара</span>
                            <input class="form__input" type="text" name="name" placeholder="Введите наименование товара" required>
                        </label>
                        <label class="form__label form__label_about">
                            <span class="form__title">Описание товара</span>
                            <textarea class="form__textarea form__input" name="about" placeholder="Введите наименование товара"></textarea>
                        </label>
                        <label class="form__label form__label_link">
                            <span class="form__title">Ссылка на изображение товара</span>
                            <input class="form__input" type="text" name="link" placeholder="Введите ссылку" required>
                        </label>
                        <label class="form__label form__label_price">
                            <span class="form__title">Цена товара</span>
                            <input class="form__input" type="text" name="price" placeholder="Введите цену" required>
                        </label>
                        <button class="form__btn btn-active" type="submit">Добавить товар</button>
                    </form>
                </aside>
                <section class="catalog">
                    <ul class="catalog__list">
                        <li class="catalog__item">
                            <a href="#" class="catalog__delete-btn active">
                                <svg class="icon">
                                   <use xlink:href="#delete-btn"></use>
                                </svg>
                            </a>
                            <a class="catalog__link" href="#">
                                <img class="catalog__pic" src="@/assets/img.jpg" alt="Название товара">
                                <div class="catalog__bottom-section">
                                    <h3 class="catalog__title">                   
                                        Наименование товара
                                    </h3>
                                    <p class="catalog__text">
                                        Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк
                                    </p>
                                    <span class="catalog__price">
                                        10 000 ₽
                                    </span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@import '@/assets/styles.scss';
</style>
