import '@testing-library/jest-dom';

jest.mock('./src/app/constants/env', () => ({
  BASE_URL: 'http://localhost:3000',
}));
