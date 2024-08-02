import React, { useState } from 'react';
import { quizData } from '../mockData/mockData';
import Link from 'next/link';

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState(Array(quizData.questions.length).fill(null));
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);

    const handleOptionClick = (optionValue: string | boolean) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = optionValue;
        setAnswers(newAnswers);
        if (currentQuestionIndex < quizData.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsQuizCompleted(true);
        }
    };

    const goToPreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const checkForRejection = () => {
        return quizData.questions.some((question, index) =>
            question.options.some(
                (option) => option.value === answers[index] && option.isRejection
            )
        );
    };

    const resetQuiz = () => {
        setCurrentQuestionIndex(0);
        setAnswers(Array(quizData.questions.length).fill(null));
        setIsQuizCompleted(false);
    };

    const currentQuestion = quizData.questions[currentQuestionIndex];

    if (isQuizCompleted) {
        const hasRejection = checkForRejection();
        return (
            <div className='p-10'>
                {hasRejection ? (
                    <p className='text-[16px] leading-[30px] font-light mb-10'>
                        Unfortunately, we are unable to prescribe this medication for you.
                        This is because finasteride can alter the PSA levels, which may be used
                        to monitor for cancer. You should discuss this further with your GP or
                        specialist if you would still like this medication.
                    </p>
                ) : (
                    <p className='text-[16px] leading-[30px] font-light mb-10'>
                        Great news! We have the perfect treatment for your hair loss. Proceed to <Link href="https://manual.co/" target="_blank">www.manual.co</Link>, and prepare to say hello to your new hair!</p>
                )}
                <button onClick={resetQuiz} className='focus:outline-none uppercase text-white bg-red-900 hover:bg-white hover:text-red-900 hover:border-red-900 focus:ring-4 focus:ring-red-900 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-900 dark:hover:bg-white dark:focus:ring-red-900'>Start Again</button>
            </div>
        );
    }

    return (<>
        <div className='py-3 md:p-5'>
            <h2 className="text-xl md:text-3xl text-[#0B3B3C] text-center font-['TT norms'] py-3 lg:py-10 tracking-[-0.03em] md:w-3/5 m-auto text-center">{currentQuestion.question}</h2>
            <ol className="text-center w-auto py-10">
                {currentQuestion.options.map((option, index) => (
                    <li
                        key={index}
                        className={`inline-block hover:border-black mt-1 m-3 option ${answers[currentQuestionIndex] === option.value ? 'selected' : ''}`}
                        onClick={() => handleOptionClick(option.value)}
                    >
                        {option.display.startsWith('<img') ? (
                            <button dangerouslySetInnerHTML={{ __html: option.display }} />
                        ) : (
                            <button
                                className="w-100 h-100 select-none rounded-lg border border-gray-900 p-10 text-center align-middle font-sans text-[18px] font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                {option.display}</button>
                        )}
                        <p className='text-[16px] leading-[30px] font-light mt-10 text-[#0B3B3C]'>{option.value}</p>
                    </li>
                ))}
            </ol>
            <div className="navigation text-center">
                {currentQuestionIndex > 0 && (

                    <button type="button" onClick={goToPreviousQuestion} className="focus:outline-none uppercase text-white bg-red-900 hover:bg-white hover:text-red-900 hover:border-red-900 focus:ring-4 focus:ring-red-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-900 dark:hover:bg-white dark:focus:ring-red-900">Previous</button>
                )}
            </div>
        </div>
    </>
    );
};

export default Quiz;
