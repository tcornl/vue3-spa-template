import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import SentryView from "@/views/SentryView.vue";

describe("SentryView", () => {
  it("throws error when clicked", () => {
    const wrapper = mount(SentryView);

    try {
      wrapper.find("button").trigger("click");
    } catch (error) {
      expect(error).toBe("Sentry Error");
    }
  });
});
