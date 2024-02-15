export interface AnswerProps{
    answer_id:number;
    answer_title:string;
    isSelected:boolean;
}
export interface QuestionProps{
    question_id:number;
    question_content:string;
    answerList:AnswerProps[];
    correct_answer_id:number;
    result:number;
    totalCount?:number
}

export interface ResultCount {
  [key: number]: number;
}