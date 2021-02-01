import { shallowMount } from '@vue/test-utils'
import Contact from '@/components/Contact.vue'

describe('AddContact.vue', () => {
  it('renders a button', () => {
    const wrapper = shallowMount(Contact);

    expect(wrapper.find('button'))
  });

  it('renders a h3 tag', () => {
    const wrapper = shallowMount(Contact);

    expect(wrapper.find('h3'))
  });

  it('renders a p tag', () => {
    const wrapper = shallowMount(Contact);

    expect(wrapper.find('p'))
  });
});
