<template>
  <aside class="add">
    <form action="#" class="add_from form" @submit.prevent="submit">
      <label class="form__label form__label_name">
        <span class="form__title">Наименование товара</span>
        <input
          class="form__input"
          :class="{ 'input-error': errors.nameErr }"
          type="text"
          name="name"
          placeholder="Введите наименование товара"
          required
          v-model="product.name"
        />
        <span class="form__error" v-show="errors.nameErr">
          {{ errors.nameErr }}
        </span>
      </label>
      <label class="form__label form__label_about">
        <span class="form__title">Описание товара</span>
        <textarea
          class="form__textarea form__input"
          name="about"
          placeholder="Введите наименование товара"
          v-model="product.about"
        ></textarea>
      </label>
      <label class="form__label form__label_link">
        <span class="form__title">Ссылка на изображение товара</span>
        <input
          class="form__input"
          :class="{ 'input-error': errors.linkErr }"
          type="text"
          name="link"
          placeholder="Введите ссылку"
          required
          v-model="product.link"
        />
        <span class="form__error" v-show="errors.linkErr">
          {{ errors.linkErr }}
        </span>
      </label>
      <label class="form__label form__label_price">
        <span class="form__title">Цена товара</span>
        <input
          class="form__input"
          :class="{ 'input-error': errors.priceErr }"
          type="text"
          name="price"
          placeholder="Введите цену"
          required
          v-model.number="product.price"
        />
        <span class="form__error" v-show="errors.priceErr">
          {{ errors.priceErr }}
        </span>
      </label>
      <transition name="added" mode="out-in">
        <button v-if="!addProduct"
          class="form__btn"
          :class="{ 'btn-active': anyErrors }"
          :disabled="!anyErrors"
          type="submit"
        >
          Добавить товар
        </button>
        <div v-else>
            Товар успешно добавлен
        </div>
      </transition>
    </form>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: "",
        about: "",
        link: "",
        price: null,
      },

      errors: {
        nameErr: null,
        linkErr: null,
        priceErr: null,
      },

      send: false,
      addProduct: false,
    };
  },
  props: ["newProduct"],
  methods: {
    checkName() {
      if (this.product.name) {
        this.product.name.length < 3
          ? (this.errors.nameErr = "Имя не может быть меньше 3 символов")
          : (this.errors.nameErr = null);
      } else this.errors.nameErr = null;
    },
    checkLink() {
      if (this.product.link) {
        try {
          new URL(this.product.link);
          this.errors.linkErr = null;
        } catch (error) {
          this.errors.linkErr = "Неверная ссылка";
        }
      } else this.errors.linkErr = null;
    },
    checkPrice() {
      if (this.product.price) {
        this.product.price > 1
          ? (this.errors.priceErr = null)
          : (this.errors.priceErr = "Введено занчение меньше 1");
      } else this.errors.priceErr = null;
    },
    submit() {
        this.addProduct = true;
      this.$emit("update:newProduct", this.product);
      setTimeout(() => {
        this.reset();
      }, 0);
      setTimeout(() => {
        this.addProduct = false;
      }, 1000);
    },
    reset() {
      this.errors.nameErr = null;
      this.errors.priceErr = null;
      this.errors.linkErr = null;
      this.product.price = null;
      this.product.name = "";
      this.product.link = "";
      this.product.about = "";
    },
  },
  computed: {
    price() {
      return this.product.price;
    },
    name() {
      return this.product.name;
    },
    link() {
      return this.product.link;
    },
    anyErrors() {
      return (
        ((this.errors.nameErr === null) &
          (this.errors.priceErr === null) &
          (this.errors.linkErr === null) &
          (this.product.name != "") &
          (this.product.price != null) &
          (this.product.link != "")) |
        this.send
      );
    },
  },
  watch: {
    price() {
      this.checkPrice();
    },
    name() {
      this.checkName();
    },
    link() {
      this.checkLink();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles.scss";
</style>