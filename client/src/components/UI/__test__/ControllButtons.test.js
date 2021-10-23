import React from 'react' ;
import { shallow } from 'enzyme' ;
import { Button }  from  '@material-ui/core' ;
import ControllButtons from '../ControlButtons' ;


it("should have 3 SideNAvigation Item Comonent " , () => {
    let wrapped = shallow(<ControllButtons/>) ;
    expect(wrapped.find(Button).length).toEqual(2)
});
