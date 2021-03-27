<template>
  <div id="app">
    <div id="view" class="section content" :class="{ collapsed: isCollapsed }">
      <router-view />
    </div>
    <SidebarMenu :menu="menu" :collapsed="true" @toggle-collapse="onCollapse()">
      <div slot="header">
        <b-image :src="require('@/assets/logo-placeholder.png')"></b-image>
      </div>
    </SidebarMenu>
  </div>
</template>

<style scoped lang="scss">
#view {
  padding-left: 400px;
  transition: 0.3s ease;
}
#view.collapsed {
  padding-left: 100px;
}
</style>

<script>
import { SidebarMenu } from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";

export default {
  name: "App",
  components: {
    SidebarMenu,
  },
  data() {
    return {
      menu: [
        {
          header: true,
          title: "CIS4250 Topic 1 Group Project",
          hiddenOnCollapse: true,
        },
        {
          href: { name: "Home" },
          title: "Home",
          icon: "fas fa-home",
        },
        {
          href: { name: "Whistleblow" },
          title: "Whistleblow",
          icon: "fas fa-file-pdf",
        },
        // {
        //   href: { name: "About" },
        //   title: "About",
        //   icon: "fas fa-info-circle",
        // },
        // {
        //   href: { name: "FAQ" },
        //   title: "FAQ",
        //   icon: "fas fa-question-circle",
        // },
        {
          title: "Policies",
          icon: "fas fa-balance-scale",
          child: [
            {
              href: { name: "UserAgreement" },
              title: "User Agreement",
              icon: "fas fa-user",
            },
            {
              href: { name: "PrivacyPolicy" },
              title: "Privacy Policy",
              icon: "fas fa-user-secret",
            },
          ],
        },
      ],
      isCollapsed: true,
    };
  },
  methods: {
    onCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>