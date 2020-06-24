import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import ReactPlaceholder from 'react-placeholder';

import Time from './Time.component';

describe('Time component', () => {
  it('should render proper time', () => {
    const { getByTestId } = render(
      <Time loading={false} serverTime={0} pastTime="00:00:00" />
    );
    const el = getByTestId('Time-root');
    const timeEl = getByTestId('Time-serverTime');
    const diffEl = getByTestId('Time-difference');

    expect(el).toBeInTheDocument();
    expect(timeEl).toHaveTextContent('0');
    expect(diffEl).toHaveTextContent('00:00:00');
  });

  it('should render loading placeholder when loading', () => {
    const wrapper = mount(<Time loading={true} time="00:00:00" />);

    expect(wrapper.find(ReactPlaceholder)).toHaveLength(1);
    expect(wrapper.find('[data-testid="Time-time"]')).toHaveLength(0);
  });
});
