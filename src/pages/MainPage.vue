<template>
  <main class="main">
    <div class="main_container content">
      <div class="content__top">
        <h2 class="title">Добавление товара</h2>
        <select
          name="filters"
          id="filter-select"
          class="select-filter"
          v-model="filter"
        >
          <option class="select-placeholder" value="" disabled selected hidden>
            По умолчанию
          </option>
          <option>А-Я</option>
          <option>Max-Min</option>
          <option>Min-Max</option>
        </select>
      </div>
      <div class="content__catalog">
        <AddForm :newProduct.sync="newProduct" />

        <PagePreloader v-if="preloader" />

        <section v-else class="catalog">
          <transition-group name="product" tag="ul" class="catalog__list">
            <li
              class="catalog__item"
              v-for="product in products"
              :key="product.id"
            >
              <a
                href="#"
                class="catalog__delete-btn active"
                @click.prevent="removeProduct(product.id)"
              >
                <svg class="icon">
                  <use xlink:href="#delete-btn"></use>
                </svg>
              </a>
              <a class="catalog__link" href="#">
                <img
                  class="catalog__pic"
                  :src="product.link"
                  :alt="product.name"
                />
                <div class="catalog__bottom-section">
                  <h3 class="catalog__title">{{ product.name }}</h3>
                  <p class="catalog__text">
                    {{ product.about }}
                  </p>
                  <div class="catalog__price">
                    {{ product.price | PriceFormat }} ₽
                  </div>
                </div>
              </a>
            </li>
          </transition-group>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import AddForm from "@/components/AddForm.vue";
import PriceFormat from "@/filters/PriceFormat";
import PagePreloader from "@/components/PagePreloader.vue";

export default {
  data() {
    return {
      newProduct: null,
      products: [
        {
          id: 1,
          name: "Наименование товара",
          about:
            "Довольно-таки интересное описание товара в несколько строк.Довольно-таки интересное описание товара в несколько строк",
          link: "https://randomwordgenerator.com/img/picture-generator/55e5dd474d5baf14f1dc8460962e33791c3ad6e04e507440772d73d49745c0_640.jpg",
          price: 10000,
        },
        {
          id: 2,
          name: "Наименование товара",
          about:
            "Довольно-таки интересное описание товара в несколько строк.Довольно-таки интересное описание товара в несколько строк",
          link: "https://randomwordgenerator.com/img/picture-generator/52e8dc46435aac14f1dc8460962e33791c3ad6e04e507440762e79d79e4bc1_640.jpg",
          price: 10000,
        },
        {
          id: 3,
          name: "Наименование товара",
          about:
            "Довольно-таки интересное описание товара в несколько строк.Довольно-таки интересное описание товара в несколько строк",
          link: "https://randomwordgenerator.com/img/picture-generator/55e7dc434957a814f1dc8460962e33791c3ad6e04e507440742a7ad6964bc1_640.jpg",
          price: 10000,
        },
      ],
      preloader: true,
      filter: "",
    };
  },
  components: { AddForm, PagePreloader },
  filters: { PriceFormat },
  methods: {
    //Работа с массивом продуктов
    //Добавление нового
    addNewProduct() {
      if (this.newProduct) {
        this.products.push({
          id:
            Math.max.apply(
              Math,
              this.products.map((e) => e.id)
            ) + 1,
          name: this.newProduct.name,
          about: this.newProduct.about,
          link: this.newProduct.link,
          price: this.newProduct.price,
        });
        this.sortProducts();
        this.saveProducts();
      }
    },
    //Удаление продукта
    removeProduct(id) {
      this.products.splice(
        this.products.findIndex((e) => e.id === id),
        1
      );
      this.saveProducts();
    },
    //Сохранение в локальном хранилище
    saveProducts() {
      const parsed = JSON.stringify(this.products);
      localStorage.setItem("products", parsed);
      localStorage.filter = this.filter;
    },

    //Сортировка массива
    sortProducts() {
      switch (this.filter) {
        case "А-Я":
          return this.products.sort((a, b) => a.name.localeCompare(b.name));
        case "Max-Min":
          return this.products.sort((a, b) => b.price - a.price);
        case "Min-Max":
          return this.products.sort((a, b) => a.price - b.price);
        default:
          return;
      }
    },
  },
  watch: {
    newProduct() {
      this.addNewProduct();
      this.newProduct = null;
    },
    filter() {
      this.sortProducts();
      this.saveProducts();
    },
  },
  //При загрузке страницы проверяем наличие данных в локальном хранилище и вызываем прелоадер
  mounted() {
    this.preloader = true;
    if (localStorage.getItem("products")) {
      try {
        this.products = JSON.parse(localStorage.getItem("products"));
      } catch (error) {
        localStorage.removeItem("products");
      }
    }
    if(localStorage.getItem("filter")) {
        this.filter = localStorage.filter
    }
    setTimeout(() => {
      this.preloader = false;
    }, 1000);
  },
};
</script>


<style lang="scss" scoped>
@import "@/assets/styles.scss";
</style>
