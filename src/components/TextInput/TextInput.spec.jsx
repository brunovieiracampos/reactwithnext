import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {TextInput} from '.'

describe('<TextInput />', () => {
    it('should have a value of searchValue', () => {
        const fn = jest.fn(); 
        render(<TextInput handleChange={fn} searchValue={'tests'} />);
        const input = screen.getByPlaceholderText(/Type your search/i);
        expect(input).toBeInTheDocument();
        expect(input.value).toBe('tests');
    }); 
    
    it('should call handleChagen function on each key pressed', () => {
        const fn = jest.fn();
        render(<TextInput handleChange={fn}/>);

        const input = screen.getByPlaceholderText(/Type your search/i);

        const value = 'o valor';

        userEvent.type(input, value);
        expect(input.value).toBe(value);
        expect(fn).toHaveBeenCalledTimes(value.length);
    }); 

    it('should match snapshot', () => {
        const {container} = render(<TextInput />);

        expect(container.firstChild).toMatchSnapshot();
    });
});