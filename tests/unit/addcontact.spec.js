import { shallowMount } from '@vue/test-utils'
import AddContact from '@/components/AddContact.vue'
import sinon from 'sinon'

describe('AddContact.vue', () => {
  it('renders h2 with text Add New Contact when rendered', () => {
    const wrapper = shallowMount(AddContact);

    expect(wrapper.find('h2').text()).toEqual('Add New Contact')
  });

  it('renders a button with text Add Contact when rendered', () => {
    const wrapper = shallowMount(AddContact);

    expect(wrapper.find('button').text()).toEqual('Add Contact')
  });

  it('sets values', async () => {
    const wrapper = shallowMount(AddContact)
    const nameInput = wrapper.find('.name')
    await nameInput.setValue('Rachel')
    expect(nameInput.element.value).toBe('Rachel')

    const numberInput = wrapper.find('.number')
    await numberInput.setValue('888-888-8888')
    expect(numberInput.element.value).toBe('888-888-8888')
  });

  it('triggers a mouseenter event on a button', () => {
    const wrapper = shallowMount(AddContact)

    wrapper.find('button').trigger('mouseenter')
  });
});
