import { QuestionProps, ResultCount } from "./types"


let questionList: QuestionProps[] = [
    {
        "question_id": 1,
        "question_content": `<p class='question__title'>Which of the following is the correct name of React.js?</p>`,
        "answerList": [
            { "answer_id": 1, "answer_title": "React", 'isSelected': false },
            { "answer_id": 2, "answer_title": "React.js", 'isSelected': false },
            { "answer_id": 3, "answer_title": "ReactJS", 'isSelected': false },
            { "answer_id": 4, "answer_title": "All of the above", 'isSelected': false }
        ],
        "correct_answer_id": 4,
        'result': 0,
    },
    {
        "question_id": 2,
        "question_content": `<p class='question__title'>What of the following is used in React.js to increase performance?</p>`,
        "answerList": [
            { "answer_id": 1, answer_title: "Original DOM", 'isSelected': false },
            { "answer_id": 2, "answer_title": "Virtual DOM", 'isSelected': false },
            { "answer_id": 3, "answer_title": "Both A and B.", 'isSelected': false },
            { "answer_id": 4, "answer_title": "None of the above.", 'isSelected': false }

        ],
        "correct_answer_id": 2,
        'result': 0,
    },
    {
        "question_id": 3,
        "question_content": `<p class='question__title'>A class is a type of function, but instead of using the keyword function to initiate it, which keyword do we use?</p>`,
        "answerList": [
            { "answer_id": 1, "answer_title": "Constructor", 'isSelected': false },
            { "answer_id": 2, "answer_title": "Class", 'isSelected': false },
            { "answer_id": 3, "answer_title": "Object", 'isSelected': false },
            { "answer_id": 4, "answer_title": "DataObject", 'isSelected': false },
            { "answer_id": 5, "answer_title": "Array", 'isSelected': false }
        ],
        "correct_answer_id": 2,
        'result': 0,
    },
    {
        "question_id": 4,
        "question_content": `<p class='question__title'>Which of the following acts as the input of a class-based component?</p>`,
        "answerList": [
            { "answer_id": 1, "answer_title": "Class", 'isSelected': false },
            { "answer_id": 2, "answer_title": "Factory", 'isSelected': false },
            { "answer_id": 3, "answer_title": "Props", 'isSelected': false },
            { "answer_id": 4, 'answer_title': "State", 'isSelected': false },
            { 'answer_id': 5, 'answer_title': 'Render', 'isSelected': false }
        ],
        "correct_answer_id": 3,
        'result': 0,
    }, {
        "question_id": 5,
        "question_content": `<p class='question__title'>What would be the output of the following example?</p><br/><div class='question__image'><img src='/code.png'/></div>`,
        "answerList": [
            { "answer_id": 1, "answer_title": "Hello World 1", 'isSelected': false },
            { "answer_id": 2, "answer_title": "Hello World 2", 'isSelected': false },
            { "answer_id": 3, "answer_title": "Hello World 3", 'isSelected': false },
            { 'answer_id': 4, 'answer_title': 'Hello World 1 Hello World 2', 'isSelected': false },
            { 'answer_id': 5, 'answer_title': 'Error', 'isSelected': false }
        ],
        "correct_answer_id": 5,
        'result': 0,
    }
]


// get question based on question_id
export const getQuestionById = (question_id: number) => questionList.find((question) => question.question_id === question_id)

//update answer
export const updateAnswer = (question_id: number, answer_id: number) => {
    const question = questionList.find((question) => question.question_id === question_id && question.correct_answer_id === answer_id)

    if (question) {
        question.result += 1
    }


}

// get Result
export const getResult = () => {
    const resultCount: ResultCount = questionList.reduce((count, question) => {
        count[question.result]++;
        return count;
    }, { 0: 0, 1: 0 } as ResultCount);
    return resultCount;
};

// get questionListCount
export const getQuestionListCount = () => questionList.length;