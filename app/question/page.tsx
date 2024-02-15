'use client'
import { ButtonName, ImagePath, QUESTION_PATH } from '@/app/lib/constant';
import styles from './question.module.css'
import { ScoreProgressBar } from '../components/ProgressBar/ScoreProgressBar';
import { useEffect, useMemo, useState } from 'react';
import { makeGetRequest, makePostRequest } from '../lib/apiService';
import { QuestionProps } from '../lib/types';
import DOMPurify from "dompurify";
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Question() {

    const { QuestionBg } = ImagePath
    const { Next } = ButtonName
    const [questionId, setQuestionId] = useState(1)
    const [questionData, setQuestionData] = useState<QuestionProps>()
    const router = useRouter()

    const isAllSelectedFalse = questionData && questionData?.answerList && questionData?.answerList.every(answer => !answer.isSelected);
    // get question data
    const getQuestionListData = async () => {
        try {
            const questionList: any = await makeGetRequest(QUESTION_PATH, { questionId: questionId });
            if (questionList?.responseData) {
                setQuestionData(questionList?.responseData);
            }
        } catch (error) {
            toast.error(`${error}`);
        }
    }

    // handle answer selection
    const handleSelect = (answerId: Number) => {
        const result = questionData?.answerList.map(answerItem => ({
            ...answerItem,
            isSelected: answerItem.answer_id === answerId ? !answerItem.isSelected : false
        })) ?? [];
        setQuestionData({ ...(questionData!), answerList: result });
    };


    //  update user answer
    const updateAnswer = async () => {
        try {
            const answerId = questionData!.answerList.find(item => item.isSelected)?.answer_id;
            const response: any = await makePostRequest(QUESTION_PATH,{ questionId: questionId, answerId: answerId });
        } catch (error) {
            toast.error(`${error}`);
        }
    }
    // handle next question
    const handleNextQuestion = () => {
        if (questionData && questionData.totalCount !== undefined) {
            if (questionId + 1 <= questionData.totalCount) {
                updateAnswer();
                setQuestionId((prevId) => prevId + 1);
            } else {
                router.push('/result');
            }
        }
    }

    useEffect(() => {
        getQuestionListData()
    }, [questionId])


    // answer List data
    const answerListData = useMemo(() => (
        questionData?.answerList && questionData.answerList.map((answer, index) => (

            <div key={answer.answer_id}
                className={`${styles.card__answerItem} ${answer.isSelected ? styles.card__answerItemSelected : ''}`}
                onClick={() => handleSelect(answer.answer_id)}
            >
                <div className={`${styles.checkbox_circle} ${answer.isSelected ? styles.checkbox_circle__selected : ''}`}>
                    {answer.isSelected && <span className={styles.span_circle}>&#10003;</span>}
                </div>
                <p>{answer.answer_title}</p>
            </div>
        ))
    ), [questionData])

    return (
        <main className='container'>
            <div className='container__img'>
            <img src={QuestionBg} alt="bg"  />
            </div>
            <section className='card'>
                <div className={styles.card__header}>
                    <ScoreProgressBar progressValue={questionId} totalCount={questionData?.totalCount ? questionData.totalCount : 0} />
                </div>
                <article className={styles.card__content}>
                    <div className={styles.card__questionContent} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(questionData ? questionData.question_content : '') }} />
                    <div className={styles.card__answerList}>
                        {
                            answerListData
                        }


                    </div>
                </article>
                <div className={styles.btn__container}  >
                    <button onClick={handleNextQuestion} className={`btn ${styles.btn__next} ${isAllSelectedFalse ? 'disabled' : ''}`}><div className={styles.btn_linkContainer}>{Next} <span>&rarr;</span></div></button>
                </div>
            </section>
            <ToastContainer />
        </main>
    );
}
