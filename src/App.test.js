import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

beforeEach(() => {
  window.history.replaceState({}, '', '/');
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

test('mobile navigation opens, navigates to About, and closes', async () => {
  const user = userEvent;
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent("Hi, I'm Hill");
  await user.click(screen.getByRole('button', { name: 'Open navigation' }));
  const navigation = screen.getByRole('navigation', { name: 'Mobile navigation' });
  await user.click(within(navigation).getByRole('link', { name: 'About' }));
  expect(await screen.findByText('Bytronic Vision Intelligence')).toBeInTheDocument();
  expect(screen.getByText('Current role')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Open navigation' })).toHaveAttribute('aria-expanded', 'false');
  expect(screen.getByRole('link', { name: /Download/ })).toHaveAttribute('download', "Hill's Resume.pdf");
});

test('project cards start collapsed and can be opened independently', async () => {
  const user = userEvent;
  window.history.replaceState({}, '', '/project');
  render(<App />);
  const toggle = screen.getByRole('button', { name: /Advanced Video Analytics/ });
  const textileToggle = screen.getByRole('button', { name: /Computer Vision for Automated Textile Colour Sorting/ });
  expect(textileToggle).toHaveAttribute('aria-expanded', 'false');
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await user.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  expect(textileToggle).toHaveAttribute('aria-expanded', 'false');
  expect(screen.getByRole('link', { name: /View frontend website/ })).toHaveAttribute('href', 'https://fyp-react-control-panel.pages.dev/');
  await user.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await user.click(textileToggle);
  expect(textileToggle).toHaveAttribute('aria-expanded', 'true');
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
});
