import App from '../App';
import { render } from '@testing-library/react';

test("App appears", () => {
    const app = render(<App />);

    expect(app).toMatchSnapshot();
});