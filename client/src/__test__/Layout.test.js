//Layout tests

import React from 'react';
// import App from 'App';
import { shallow } from 'enzyme' ;
import Layout from '../components/Layout/Layout'  ;
import Header  from '../components/Layout/Header'  ;
import SideBar from '../components/Layout/SideBar';
import MobileNav from '../components/Layout/MobileNav' ;

let wrappedAppCmp ;

beforeEach(() => {
    wrappedAppCmp = shallow(<Layout/>) ;

});

it('should render header ', () => {
  expect(wrappedAppCmp.find(Header).length).toEqual(1) ;
});

it('should render SideNav', () => {
  expect(wrappedAppCmp.find(SideBar).length).toEqual(1) ;
});


//it('should render MobileNav', () => {
   //let match = false ;
   //if (match) {
       //expect(wrappedAppCmp.find(MobileNav).length).toEqual(1) ;
   //} else {
       //expect(wrappedAppCmp.find(MobileNav).length).toEqual(0) ;
   //}
//});
