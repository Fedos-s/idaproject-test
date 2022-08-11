<template>
  <main class="main">
    <div class="main_container content">
      <div class="content__top">
        <h2 class="title">Добавление товара</h2>
        <select name="filters" id="filter-select" class="select-filter">
          <option class="select-placeholder" value="" disabled selected hidden>
            По умолчанию
          </option>
          <option value="name">А-Я</option>
          <option value="max">Max-Min</option>
          <option value="min">Min-Max</option>
        </select>
      </div>
      <div class="content__catalog">
        <AddForm :newProduct.sync="newProduct" />

        <section class="catalog">
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
                  <span class="catalog__price">
                    {{ product.price | PriceFormat }} ₽
                  </span>
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
    };
  },
  components: { AddForm },
  filters: { PriceFormat },
  methods: {
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
      }
    },
    removeProduct(id) {
      this.products.splice(
        this.products.findIndex((e) => e.id === id),
        1
      );
    },
  },
  watch: {
    newProduct() {
      this.addNewProduct();
      this.newProduct = null;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles.scss";
// Animation
.product-enter-active,
.product-leave-active {
  transition: opacity 5s;
}
.product-enter,
.product-leave-to {
  opacity: 0;
}
</style>
