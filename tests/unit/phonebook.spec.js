import { shallowMount } from '@vue/test-utils'
import PhoneBook from '@/components/PhoneBook.vue'

describe('PhoneBook.vue', () => {
  it('renders h1 with text Phone Book when rendered', () => {
    const wrapper = shallowMount(PhoneBook);

    expect(wrapper.find('h1').text()).toEqual('Phone Book')
  });
});
