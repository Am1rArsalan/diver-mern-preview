import React from 'react' ;
import { shallow } from 'enzyme' ;
import UserAvatar  from  '../UserAvatar' ;
import UserInfo  from '../UserInfo' ;
import { Badge } from '@material-ui/core' ;


describe('UserInfo ', () => {
    it('should have one Badge and One Avatar ', () => {
        let wrapped = shallow(<UserInfo/>) ;
        expect(wrapped.find(UserAvatar).length).toEqual(1)
        expect(wrapped.find(Badge).length).toEqual(1)
    });
});
