<template>
  <footer :class="$style.container">
    <Wrapper :class="$style.inner"> 
      <img
        :class="$style.logo"
        :src="LogoMini"
        alt=""
      >
      <ul :class="$style.linkList">
        <li
          v-for="({text, url}, itemId) in items"
          :key="itemId.toString()"
        >
          <a :href="url">{{ text }}</a>
        </li>
      </ul>
      <div :class="$style.infos">
        <ul :class="$style.socialList">
          <li
            v-for="({text, url, icon}, socialId) in socials"
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
        <p :class="$style.copyright">
          © 2021 PERSIL & ROMARIN 
          - Par AIL & FINES HERBES bio
        </p>
      </div>
    </Wrapper>
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { items, socials } from "./NAV_DATA";
import LogoMini from '@/assets/logo-mini.svg'

export default defineComponent({
  name: "SideNavModule",

  setup() {

    return {
      items,
      socials,
      LogoMini,
    };
  },
});
</script>

<style lang="scss" module>
.container {
  padding: 24px;

  background-color: $cream;

  @media only screen and (min-width: 720px) {
    padding: 184px 24px 74px 24px;
  }
}

.inner {
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 720px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.logo {
  width: 48px;
  margin: 0 auto;

  @media only screen and (min-width: 720px) {
    width: auto;
    margin: 0;
  }
}

.linkList {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 18px;
  justify-content: center;
  margin-top: 32px;

  a {
    position: relative;

    color: $cactus;
    text-transform: uppercase;
    text-decoration: none;

    &::before {
      position: absolute;
      bottom: 0;
      left: 0;

      width: 0;
      height: 1px;

      background-color: $cactus;

      transition: width 0.3s;

      content: '';
    }

    &:hover::before {
      width: 100%;
    }
  }

  @media only screen and (min-width: 720px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-top: 0;
  }
}

.infos {
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 290px;
  margin: 24px auto 0;

  @media only screen and (min-width: 720px) {
    align-items: flex-end;
    margin: 0;
  }
}

.socialList {
  display: flex;
  gap: 10px;
  align-items: center;
}

.copyright {
  @include typo-body;
  margin-top: 24px;

  color: $cactus;
  text-align: center;

  @media only screen and (min-width: 720px) {
    text-align: right;
  }
}
</style>
