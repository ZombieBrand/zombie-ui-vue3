import { defineComponent, PropType } from "vue";
import { Icon } from "@iconify/vue";

export const type = [
  "default",
  "primary",
  "success",
  "warning",
  "error",
] as const;
export const size = ["small", "medium", "large"] as const;
export type IType = (typeof type)[number];
export type ISize = (typeof size)[number];
export const colorsVariant = {
  default: "bg-slate-600 hover:bg-slate-500 focus:ring-slate-300",
  primary: "bg-blue-600 hover:bg-blue-500 focus:ring-blue-300",
  success: "bg-green-600 hover:bg-green-500 focus:ring-green-300",
  warning: "bg-yellow-600 hover:bg-yellow-500 focus:ring-yellow-300",
  error: "bg-red-600 hover:bg-red-500 focus:ring-red-300",
};

export const props = {
  // 新增
  size: {
    type: String as PropType<ISize>,
    default: "medium",
  },

  type: {
    type: String as PropType<IType>,
    default: "default",
  },
  round: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: "",
  },
} as const;

export default defineComponent({
  name: "ZButton",
  props,
  components: {
    Icon,
  },
  setup(props, { slots }) {
    console.log(slots);
    const size = {
      small: "px-4 py-1 text-sm",
      medium: "px-6 py-2 text-base",
      large: "px-8 py-3 text-lg",
    };
    return () => (
      <button
        class={`
        transform ${props.round && "rounded-lg"} ${colorsVariant[props.type]} ${
          size[props.size]
        } m-1 font-medium capitalize tracking-wide text-white transition-colors duration-300  focus:outline-none focus:ring focus:ring-opacity-80
        `}
      >
        {slots.default?.()}
        {slots.icon ? slots.icon() : props.icon && <Icon icon={props.icon} />}
      </button>
    );
  },
});
