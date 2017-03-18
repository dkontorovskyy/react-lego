import { expect } from 'chai';
import { h } from 'preact';
import { shallow } from 'enzyme';

import NotFound from './NotFound';
import { copy } from './notFound-copy';

describe('NotFound', function () {

  it('should render with an id', ()=> {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.find('#not-found').length).to.eql(1);
  });

  it('should have a title and blurb', () => {
    const wrapper = shallow(<NotFound />);
    const title = wrapper.find('h2');
    expect(title).to.have.text(copy.mainTitle);
    expect(wrapper).to.contain.text(copy.blurb);
  });
});
