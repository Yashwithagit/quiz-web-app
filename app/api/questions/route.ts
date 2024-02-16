import { MESSAGE, STATUSCODE } from "@/app/lib/constant"
import { getQuestionById, getQuestionListCount, getResult, resetResult, updateAnswer } from "@/app/lib/data"
import { NextResponse } from "next/server"

// get question by ID
export const GET = async (req: Request, res: Response) => {

      const questionId = req.url.split('=')[1]
      if(questionId){
    try {
       
        const question = getQuestionById(+questionId)
        const questionListCount = getQuestionListCount()
        
        const result = question?{ ...question, totalCount: questionListCount }:{}
        return NextResponse.json({ responseMessage: MESSAGE.SUCCESS, responseData: result }, { status: STATUSCODE.OK })
    } catch (err) {
        return NextResponse.json({ responseMessage: MESSAGE.FAILURE, err }, {
            status: STATUSCODE.SEVERERROR
        })
    }
}
}
// update result for each question
export const POST = async (req: Request, res: Response) => {
    const { questionId, answerId } = await req.json()
    try {

      const result=updateAnswer(questionId, answerId)
    //   getResult()
        return NextResponse.json({ responseMessage: MESSAGE.SUCCESS,responseData:result }, { status: STATUSCODE.CREATED })
    } catch (err) {
        return NextResponse.json({ responseMessage: MESSAGE.FAILURE, err }, {
            status: STATUSCODE.SEVERERROR
        })
    }

}

