import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './page'; 
import Quiz from '../app/components/quiz';
import Footer from '../app/components/footer';

jest.mock('../app/components/quiz');
jest.mock('../app/components/footer');

const MockedQuiz = jest.mocked(Quiz);
const MockedFooter = jest.mocked(Footer);

describe('Landing Page', () => {
    beforeEach(() => {
        MockedQuiz.mockImplementation(() => <div>Mocked Quiz Component</div>);
        MockedFooter.mockImplementation(() => <div>Mocked Footer Component</div>);
    });

    describe('Render the page',() => {
        it('should render the initial page on load', () => {
            render(<Home/>);

            const heroHeading = screen.getByRole('heading', {'name': 'Be good to yourself'});

            expect(heroHeading).toBeInTheDocument();
        })
    });
})