import React from "react";
import {mount ,shallow } from "enzyme";
import Layout from "../Layout";
import Header from "../Header";
import SideNav from "../SideBar";
import MobileNav from "../MobileNav";



describe("<Layout/> large size ", () => {
  let wrappedCmp ;
  beforeEach(() => {
    wrappedCmp = shallow(<Layout />);
  });

  it("should render a <SideBar/> " , () => {
      expect(wrappedCmp.find(SideNav).length).toEqual(1)  ;
  })

  it("should render header ", () => {
      expect(wrappedCmp.find(Header).length).toEqual(1);
   });
//
    it("should render MobileNav", () => {
      expect(wrappedCmp.find(MobileNav).length).toEqual(0);
    });
});







