import { render } from '@testing-library/vue';
import MyComponent from '@/components/MyComponent.vue';

describe('Test suite', () => {
  it('should pass', () => {
    render(MyComponent);
  });
});
