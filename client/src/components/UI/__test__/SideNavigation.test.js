import React from 'react' ;
import { shallow } from 'enzyme' ;
import SideNavigationItem from  '../SideNavigationItem';
import SideNavigation from '../SideNavigation' ;


it("should have 3 SideNAvigation Item Comonent " , () => {
    let wrapped = shallow(<SideNavigation/>) ;
    expect(wrapped.find(SideNavigationItem).length).toEqual(3)
});
