// Image Paths
export enum ImagePath{
    LogoImage="/logo.png",
    QuestionBg='/questionBg.png'
}

// Button Name
export enum ButtonName{
Start="Start",
Next='Next',
StartAgain="StartAgain"
}

// constant values
export const API_BASE_PATH=`/api/`

// API paths
export const QUESTION_PATH='questions'
export const RESULT_PATH='results'
export const RESET_DATA='resetData'

// status code
export const STATUSCODE={
    OK:200,
    CREATED:201,
    SEVERERROR:500
    
}

// response message
export const MESSAGE = {
SUCCESS:'Success',
FAILURE:"Something went wrong"
}