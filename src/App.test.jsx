import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App.jsx';
import '@testing-library/jest-dom';

describe('App', async () => {
    it('should render while authenticating', () => {
        render(<App />);

        expect(screen.getByText('Vite + React')).toBeInTheDocument();
    });
});
