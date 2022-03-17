import MyHeader from "./components/MyHeader.vue";
export default {
  install: (app, options) => {
    app.component("my-header", MyHeader);

    app.directive("font-size", (el, binding, vnode) => {
      var size = 16;
      switch (binding.arg) {
        case "small":
          //   size = 12;
          size = options.fontSize.small;
          break;
        case "medium":
          //   size = 24;
          size = options.fontSize.medium;
          break;
        case "large":
          //   size = 36;
          size = options.fontSize.large;
          break;

        default:
          size = 16;
          break;
      }
      el.style.fontSize = size + "px";
    });

    app.mixin({
      data() {
        return {
          featuredLink: "https://medium.com/@mert.demir96",
        };
      },
      created() {
        console.log("mixin Created");
      },
    });

    const logout = () => {
      console.log("logout");
    };

    app.provide("logout", logout);
  },
};
