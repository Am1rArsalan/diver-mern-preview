import React from "react";
// import App from 'App';
import { shallow, mount } from "enzyme";
import Layout from "../Layout";
import Header from "../Header";
import SideBar from "../SideBar";
import MobileNav from "../MobileNav";

let wrappedAppCmp;



describe("<Layout/> on small size ", () => {
  beforeEach(() => {
    wrappedAppCmp = mount(<Layout />);
    window = Object.assign(window, { innerWidth: 500 });
  });

    it("should not render a <SideBar/> " , () => {
        console.log(window.innerWidth) ;
        expect(wrappedAppCmp.find(SideBar).length).toEqual(0)  ;
    })

    it("should render header ", () => {
       expect(wrappedAppCmp.find(Header).length).toEqual(1);
    });

    //it("should render MobileNav", () => {
       //console.log(wrappedAppCmp) ;
        //// should ....
        ////let match = true ;//match will come from some where
        ////if (match)  {
           ////expect(wrappedAppCmp.find(MobileNav).length).toEqual(1);
         ////}
    //});
});







