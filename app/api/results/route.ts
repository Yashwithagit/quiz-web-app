import { MESSAGE, STATUSCODE } from "@/app/lib/constant"
import { getResult, resetResult } from "@/app/lib/data"
import { NextResponse } from "next/server"

// get result
export const GET = async (req: Request, res: Response) => {
    try {
         const resetId = req.url.split('=')[1]
         if(resetId){
            const data=resetResult()
            return NextResponse.json({ responseMessage: MESSAGE.SUCCESS, responseData: data }, { status: STATUSCODE.OK })
         }else {
        const result=getResult()
        return NextResponse.json({ responseMessage: MESSAGE.SUCCESS, responseData: result }, { status: STATUSCODE.OK })}
    } catch (err) {
        return NextResponse.json({ responseMessage: MESSAGE.FAILURE, err }, {
            status: STATUSCODE.SEVERERROR
        })
    }
}


