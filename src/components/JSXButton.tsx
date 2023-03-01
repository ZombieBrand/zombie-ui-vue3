import { defineComponent, h } from "vue";

export default defineComponent({
  name: "JSXButton",
  render() {
    return (
      <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
        JSX Button
      </button>
    );
  },
});
