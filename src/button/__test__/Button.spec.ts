import Button from "../Button";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

// 测试分组
describe("Button", () => {
  test("mount  @vue/test-utils", () => {
    const App = {
      components: { Button },
      template: `
          <Button>
            button
          </Button>
      `,
    };
    const wrapper = shallowMount(App, {
      global: {
        renderStubDefaultSlot: true,
      },
    });
    console.dir(wrapper.html());
    expect(wrapper.text()).toBe("button");
  });
});
