import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Quiz from './quiz';
import { quizData } from '../mockData/mockData';

jest.mock('next/link', () => {
    return ({ children }: any) => children;
});

describe('Quiz Component', () => {
    it('should render the first question correctly', () => {
        render(<Quiz />);
        
        const questionElement = screen.getByText(quizData.questions[0].question);
        expect(questionElement).toBeInTheDocument();
    });

    it('should render options for the first question', () => {
        render(<Quiz />);
        
        quizData.questions[0].options.forEach(option => {
            //@ts-expect-error - mockdata
            const optionElement = screen.getByText(option.value);
            expect(optionElement).toBeInTheDocument();
        });
    });

    it('should handles option click and moves to the next question', () => {
        render(<Quiz />);
        
        //@ts-expect-error - using mockdata
        const firstOption = screen.getByText(quizData.questions[0].options[0].value);
        fireEvent.click(firstOption);
        
        const nextQuestion = screen.getByText(quizData.questions[1].question);
        expect(nextQuestion).toBeInTheDocument();
    });

    it('should can navigate back to the previous question', () => {
        render(<Quiz />);
        // @ts-expect-error -- using mockdata
        const firstOption = screen.getByText(quizData.questions[0].options[0].value);
        
        fireEvent.click(firstOption);
        const prevButton = screen.getByText(/previous/i);
        
        fireEvent.click(prevButton);
        const firstQuestion = screen.getByText(quizData.questions[0].question);
        
        expect(firstQuestion).toBeInTheDocument();
    });

    it('should displays rejection message if an option with isRejection is selected', () => {
        render(<Quiz />);
        const rejectionOption = quizData.questions[0].options.find(option => option.isRejection);
        if (rejectionOption) {
            // @ts-expect-error -- using mockdata
            const rejectionOptionElement = screen.getByText(rejectionOption.value);
            fireEvent.click(rejectionOptionElement);
        }
        quizData.questions.slice(1).map(question => {
            // @ts-expect-error -- using mockdata
            const nextOption = screen.getByText(question.options[0].value);
            fireEvent.click(nextOption);
        });
        const rejectionMessage = screen.getByText(/Unfortunately, we are unable to prescribe this medication for you/i);
        
        expect(rejectionMessage).toBeInTheDocument();
    });

    it('should display the success message if no rejection options are selected', () => {
        render(<Quiz />);
        quizData.questions.forEach((question, index) => {
            const option = question.options.find(option => !option.isRejection);
            if (option) {
                // @ts-expect-error -- using mockdata
                const optionElement = screen.getByText(option.value);
                fireEvent.click(optionElement);
            }
        });
        const successMessage = screen.getByText(/Great news! We have the perfect treatment for your hair loss/i);
        
        expect(successMessage).toBeInTheDocument();
    });

    it('should reset the quiz when Start Again is clicked', () => {
        render(<Quiz />);
        // @ts-expect-error -- using mockdata
        const firstOption = screen.getByText(quizData.questions[0].options[0].value);
        fireEvent.click(firstOption);
        
        quizData.questions.slice(1).map(question => {
            // @ts-expect-error -- using mockdata
            const nextOption = screen.getByText(question.options[0].value);
            fireEvent.click(nextOption);
        });
        
        const startAgainButton = screen.getByText(/start again/i);
        fireEvent.click(startAgainButton);
        
        const firstQuestion = screen.getByText(quizData.questions[0].question);
        
        expect(firstQuestion).toBeInTheDocument();
    });
});
