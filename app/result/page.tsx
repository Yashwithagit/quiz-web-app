'use client'
import { ButtonName, ImagePath, RESULT_PATH } from '@/app/lib/constant';
import styles from './result.module.css'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { makeGetRequest } from '../lib/apiService';
import { ResultProgressBar } from '../components/ProgressBar/ResultProgressBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Result() {

    const { QuestionBg } = ImagePath
    const { StartAgain } = ButtonName
    const router = useRouter()
    const [resultData, setResultData] = useState({
        0: 0,
        1: 1
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
                    <ResultProgressBar result={resultData[1]} total={resultData[1] + resultData[0]} />
                </div>
                <div className={styles.card__content}>
                    <div
                        className={styles.card__resultItem}
                    >
                        <div className={`${styles.result__circle} ${styles.circle__success}`}>

                        </div>
                        <p><span>{resultData[1]}</span>Correct</p>
                    </div>
                    <div
                        className={styles.card__resultItem}
                    >
                        <div className={`${styles.result__circle} ${styles.circle__fail}`}>

                        </div>
                        <p><span>{resultData[0]}</span>Incorrect</p>
                    </div>
                </div>
                <div className={styles.btn__container}  >
                    <button onClick={() => router.push('/')} className='btn'>{StartAgain} </button>
                </div>
            </section>
            <ToastContainer />
        </main>
    );
}
