import React from 'react';
import { mount } from 'enzyme';

import RootPage from 'src/pages/RootPage';
import Time from 'src/components/Time';
import Metrics from 'src/components/Metrics';

describe('RootPage component', () => {
  it('should render proper time', () => {
    const wrapper = mount(<RootPage />);

    expect(wrapper.find(Time)).toHaveLength(1);
    expect(wrapper.find(Metrics)).toHaveLength(1);
  });
});
