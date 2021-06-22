<template>
  <button
    :class="$style.burgerMenu"
    @click="toggleHeader()"
  >
    <img
      :src="BurgerIcon"
      alt=""
    >
  </button>
  <div
    v-if="headerActive"
    :class="$style.backdrop"
    @click="toggleHeader()"
  />
  <header
    :class="[
      $style.container, 
      { [$style.subMenuActive]: subMenuActive },
      { [$style.headerActive]: headerActive }
    ]"
  >
    <ul :class="$style.menu">
      <li
        v-for="({ text, url, subItems, hasSubMenu }, itemId) in items"
        :key="itemId.toString()"
        :class="[$style.item, { [$style.hasSubMenu]: hasSubMenu }]"
        @mouseenter="hasSubMenu ? toggleSubMenuActive() : null "
        @mouseleave="hasSubMenu ? toggleSubMenuActive() : null "
      >
        <a
          :href="url"
          :class="$style.itemLink"
        >
          <span>
            {{ text }}
          </span>
        </a>
        <template v-if="hasSubMenu">
          <ul :class="$style.subMenu">
            <li
              v-for="(subItem, subItemId) in subItems"
              :key="subItemId.toString()"
              :class="$style.item"
            >
              <a
                :href="subItem.url"
                :class="$style.itemLink"
              >
                <span>
                  {{ subItem.text }}
                </span>
              </a>
            </li>
          </ul>
        </template>
      </li>
    </ul>
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
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {items, socials} from "./NAV_DATA";
import BurgerIcon from '@/assets/icons/burger-menu.svg'

export default defineComponent({
  name: "SideNavModule",

  setup() {
    
    
    const subMenuActive = ref(false)
    const toggleSubMenuActive = () => {
      subMenuActive.value = !subMenuActive.value
    }

    const headerActive = ref(false)
    const toggleHeader = () => {
      headerActive.value = !headerActive.value
    }

    return {
      toggleSubMenuActive,
      toggleHeader,
      subMenuActive,
      headerActive,
      items,
      socials,
      BurgerIcon,
    };
  },
});
</script>

<style lang="scss" module>

.container {
  position: absolute;
  top: 0;
  right: -100%;
  z-index: 10;

  display: flex;
  align-items: center;
  height: 100%;

  transition: right 0.3s;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    width: 100%;
    height: 100%;
    border-left: 2px solid rgba($color: $white, $alpha: 0.2);

    background-color: rgba($color: $white, $alpha: 0.1);
    backdrop-filter: blur(8px);

    content: "";
  }

  &::after {
    position: absolute;
    top: 50%;
    left: 0;

    width: 4px;
    height: 180px;
    border-radius: 4px;

    background-color: $white;
    transform: translate(-50%, -50%);

    transition: width 0.3s, opacity 0.3s;

    content: '';
  }

  &.subMenuActive {
    &::after {
      width: 0;

      opacity: 0;
    }
  }

  &.headerActive {
    right: 0;
  }

  @media only screen and (min-width: 1400px) {
    right: 0;
  }
}

.menu,
.subMenu {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.subMenu {
  position: absolute;
  top: 0;
  left: calc(-100% - 2px);

  justify-content: center;
  height: 100%;
  border-left: 2px solid rgba($color: $white, $alpha: 0.2);

  background-color: rgba($color: $white, $alpha: 0.1);
  transform: translateX(8px);
  opacity: 0;
  backdrop-filter: blur(8px);

  transition-duration: 0.3s;
  transition-property: opacity, transform;

  pointer-events: none;
}

.hasSubMenu:hover .subMenu {
  transform: translateX(0);
  opacity: 1;

  pointer-events: all;

  &::before {
    position: absolute;
    top: 50%;
    left: -2px;

    width: 4px;
    height: 180px;
    border-radius: 4px;

    background-color: $white;
    transform: translate(-50%, -50%);

    content: '';
  }
}

.itemLink {
  @include typo-headline;

  display: block;
  padding: 0 40px;

  color: $white;
  text-decoration: none;

  span {
    position: relative;

    padding-bottom: 8px;

    &::after {
      position: absolute;
      bottom: 4px;
      left: 0;

      display: inline-block;
      width: 0;
      height: 1px;

      background-color: $white;

      transition: width 0.3s;

      content: '';
    }
  }
}

.item:hover > .itemLink > span::after {
  width: 100%;
}

.burgerMenu {
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 20;

  border: 0;

  background-color: transparent;

  @media only screen and (min-width: 1400px) {
    display: none;
  }
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  width: 100%;
  height: 100%;
}

.socialsContainer {
  position: absolute;
  bottom: 54px;
  left: 50%;

  display: flex;
  gap: 16px;
  align-items: center;

  transform: translateX(-50%);

  & > li > a > img {
    height: 35.99px;
  }
}
</style>
