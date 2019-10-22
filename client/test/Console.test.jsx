import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Console from '../components/console/Console.tsx';

describe('Console', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Console/>, div);
    });

    let wrapper = mount(
        <Console
          onChange={jest.fn()}
        />
      )
    it('calls myEventHandler()', () => {
        const myEventHandler = jest.fn()
        wrapper.setProps({ onChange: myEventHandler})
        wrapper.find(suspects).simulate('change', { value: ['Miss Scarlett'] })
        expect(myEventHandler).toHaveBeenCalledWith(['Miss Scarlett'])
    })


    describe('render', () => {
        it('should render the console', () => {
            const weapons = shallow(<Console.weapons/>);
            const expectedWeapons = ["Candlestick", "Knife", "Pipe", "Pistol", "Rope", "Wench"];

            expect(expectedWeapons.contains(weapons)).toEqual(true);
        });
    });

    it('Make sure the keyed-in text is shorter than max length', () => {
        const result = mount(<Input maxLength={10}></Input>);
        result.find('input').simulate('change', { target: { value: '1234567890!!!' } });
        expect(result.state().value).to.equal("1234567890");
    });


jest.mock("react-select", () => ({ options, value, onChange }) => {
    function handleChange(event) {
      const option = options.find(
        option => option.value === event.currentTarget.value
      );
      onChange(option);
    }
    return (
      <select data-testid="select" value={value} onChange={handleChange}>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    );
  });
  
  test("Test with mock", () => {
    const { getByText, getByTestId } = render(<MySelector />);
    expect(getByText("Your favorite color is Red")).toBeInTheDocument();
    fireEvent.change(getByTestId("select"), { target: { value: "green" } });
    expect(getByText("Your favorite color is Green")).toBeInTheDocument();
  });
  
});