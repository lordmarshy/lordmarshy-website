import { expect, test } from "bun:test";
import { renderToString } from "react-dom/server";
import Entry from "../src/page-components/Entry";
import GlassSurface from "../src/components/GlassSurface";

test("entry markup is stable before browser effects run", () => {
  const originalRandom = Math.random;

  try {
    Math.random = () => 0;
    const serverMarkup = renderToString(<Entry />);
    Math.random = () => 0.99;
    const browserMarkup = renderToString(<Entry />);

    expect(browserMarkup).toBe(serverMarkup);
  } finally {
    Math.random = originalRandom;
  }
});

test("glass markup does not depend on browser CSS support during hydration", () => {
  const serverMarkup = renderToString(<GlassSurface>Navigation</GlassSurface>);
  const originalWindow = Object.getOwnPropertyDescriptor(globalThis, "window");
  const originalCSS = Object.getOwnPropertyDescriptor(globalThis, "CSS");

  try {
    Object.defineProperty(globalThis, "window", { configurable: true, value: {} });
    Object.defineProperty(globalThis, "CSS", {
      configurable: true,
      value: { supports: () => true },
    });

    expect(renderToString(<GlassSurface>Navigation</GlassSurface>)).toBe(serverMarkup);
  } finally {
    if (originalWindow) Object.defineProperty(globalThis, "window", originalWindow);
    else Reflect.deleteProperty(globalThis, "window");

    if (originalCSS) Object.defineProperty(globalThis, "CSS", originalCSS);
    else Reflect.deleteProperty(globalThis, "CSS");
  }
});
