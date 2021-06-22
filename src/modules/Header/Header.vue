<template>
  <header
    :class="[
      $style.container, 
    ]"
  >
    <Wrapper :class="$style.inner">
      <button :class="$style.burgerMenu">
        <img
          :src="BurgerIcon"
          alt="burger"
        >
      </button>
      <div :class="$style.center"> 
        <a href="">LE CONCEPT</a>
        <img
          :src="Logo"
          alt="Logo"
        >
        <a href="">contactez-nous</a>
      </div>
      <ul :class="$style.socialsContainer">
        <li
          v-for="({url, icon, text}, socialId) in socials"
          :key="socialId.toString()"
        >
          <a :href="url">
            <img
              :src="icon"
              :alt="text"
            >
          </a>
        </li>
      </ul>
    </Wrapper>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {items, socials} from "./NAV_DATA";
import BurgerIcon from '@/assets/icons/burger-menu-cactus.svg'
import Logo from '@/assets/logo-cactus.svg'
import Wrapper from "../../components/Wrapper";

export default defineComponent({
    name: "SideNavModule",
    components: { Wrapper },
    setup() {
        const subMenuActive = ref(false);
        const toggleSubMenuActive = () => {
            subMenuActive.value = !subMenuActive.value;
        };
        const headerActive = ref(false);
        const toggleHeader = () => {
            headerActive.value = !headerActive.value;
        };
        return {
            toggleSubMenuActive,
            toggleHeader,
            subMenuActive,
            headerActive,
            items,
            socials,
            BurgerIcon,
            Logo
        };
    },
});
</script>

<style lang="scss" module>
.container {
  position: sticky;
  top: 0;
  z-index: 5;

  padding: 24px;

  background-color: $white;

  @media only screen and (min-width: 800px) {
    height: 90px;
  }
}

.inner {
  position: relative;

  display: flex;
  justify-content: space-between;
}

.burgerMenu {
  border: 0;

  background-color: transparent;

  img {
    width: 40px;
  }
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  gap: 64px;
  align-items: center;

  transform: translate(-50%, -50%);

  img {
    height: 32px;

    @media only screen and (min-width: 800px) {
      height: 35.99px;
    }
  }

  a {
    display: none;
    flex-shrink: 0;

    @include typo-body;
    color: $cactus;
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    @media only screen and (min-width: 800px) {
      display: block;
    }
  }
}

.socialsContainer {
  display: flex;
  gap: 8px;
  align-items: center;

  img {
    width: 32px;
  }

  @media only screen and (min-width: 800px) {
    gap: 16px;

    img {
      width: 35.99px;
    }
  }
}
</style>
