<template>
  <a v-for="menuItem in menuItems" :href="menuItem.url"
     :style="{display: !(false === menuItem.show) ? 'flex' : 'none'}"
  >
    <div class="container-desktop-menu-item">
      <p class="desktop-menu-item title">{{ menuItem.name }}</p>
      <p class="desktop-menu-item subtitle">{{ menuItem.english ? menuItem.english : '' }}</p>
    </div>
  </a>
</template>

<script>
export default {
  name: "desktopMenu",
  props: {
    settings: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const menuItems = props.settings.menuItems;

    return {
      menuItems
    }
  }
}

</script>

<style scoped>
.container-desktop-menu-item {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 5px 5px 20px 0 rgb(0 0 0 / 16%);
  font-weight: bold;
  min-width: 10vw;
  margin: 0 2vw;
  transition: all .375s ease-in-out;
}

.desktop-menu-item {
  text-align: center;
}

.desktop-menu-item.subtitle {
  font-size: smaller;
}

.container-desktop-menu-item:hover {
  transform: scale(1.02);
  box-shadow: 10px 10px 20px 0 rgb(0 0 0 / 20%);
  background: #BFD08C;
}

a {
  transition: all .375s ease-in-out;
}
</style>