import React from "react";

import { shallow } from "enzyme";

import { findByTestAttr } from "../../../tests/testutils";

import Layout from "../";

describe("<Layout />", () => {
  test("should render without errors", () => {
    const wrapper = shallow(<Layout />);
    expect(
      wrapper.contains(
        <a href="#home" data-test="anchor" className="active">
          Politico
        </a>
      )
    ).toBe(true);
  });
  test("should change open state from false to true on menu click", () => {
    const wrapper = shallow(<Layout />);
    const menuitem = findByTestAttr(wrapper, "nav-toggle");
    menuitem.simulate("click");
    expect(wrapper.state().open).toBe(true);
  });
  test("should render different icons on open state change", () => {
    const wrapper = shallow(<Layout />);
    expect(findByTestAttr(wrapper, "menu-open").exists()).toBe(true);
    expect(findByTestAttr(wrapper, "menu-close").exists()).toBe(false);
    const menuitem = findByTestAttr(wrapper, "nav-toggle");
    menuitem.simulate("click");
    wrapper.update();
    expect(findByTestAttr(wrapper, "menu-open").exists()).toBe(false);
    expect(findByTestAttr(wrapper, "menu-close").exists()).toBe(true);
  });

  test("should render all anchor tags to the screen", () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find("a").some(`[data-test="anchor"]`)).toBe(true);
  });
});