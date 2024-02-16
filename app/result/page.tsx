'use client'
import { ButtonName, ImagePath, RESULT_PATH } from '@/app/lib/constant';
import styles from './result.module.css'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { makeGetRequest } from '../lib/apiService';
import { ResultProgressBar } from '../components/ProgressBar/ResultProgressBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { assert } from 'console';

export default function Result() {

    const { QuestionBg } = ImagePath
    const { StartAgain } = ButtonName
    const router = useRouter()
    const [resultData, setResultData] = useState({
        successCount: 0,
        failCount: 0
    })

    // get question data
    const getResultData = async () => {
        try {
            const result: any = await makeGetRequest(RESULT_PATH);
            setResultData(result?.responseData);
        } catch (error) {
            toast.error(`${error}`);
        }
    }

    // get question data
    const resetResultData = async () => {
        try {
             await makeGetRequest(RESULT_PATH,{reset:0});
        } catch (error) {
            toast.error(`${error}`);
        }
    }



// handle Restart quiz
    const handleReStartQuiz=()=>{
        resetResultData()
        router.push('/')
    }

    useEffect(() => {
        getResultData()
    }, [])

    return (
        <main className='container'>

            <div className='container__img'>
                <img src={QuestionBg} alt="bg" />
            </div>
            <section className='card'>
                <div className={styles.card__header}>

                    <h1 className='card__title'>Your Result</h1>
                    <ResultProgressBar result={resultData.successCount} total={resultData.successCount + resultData.failCount} />
                </div>
                <div className={styles.card__content}>
                    <div
                        className={styles.card__resultItem}
                    >
                        <div className={`${styles.result__circle} ${styles.circle__success}`}>

                        </div>
                        <p><span>{resultData.successCount}</span>Correct</p>
                    </div>
                    <div
                        className={styles.card__resultItem}
                    >
                        <div className={`${styles.result__circle} ${styles.circle__fail}`}>

                        </div>
                        <p><span>{resultData.failCount}</span>Incorrect</p>
                    </div>
                </div>
                <div className='btn__container'  >
                    <button onClick={ handleReStartQuiz} className='btn'>{StartAgain} </button>
                </div>
            </section>
            <ToastContainer />
        </main>
    );
}
