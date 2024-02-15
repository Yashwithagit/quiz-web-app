import { MESSAGE, STATUSCODE } from "@/app/lib/constant"
import { getResult } from "@/app/lib/data"
import { NextResponse } from "next/server"

// get result
export const GET = async (req: Request, res: Response) => {
    try {
        const result=getResult()
        return NextResponse.json({ responseMessage: MESSAGE.SUCCESS, responseData: result }, { status: STATUSCODE.OK })
    } catch (err) {
        return NextResponse.json({ responseMessage: MESSAGE.FAILURE, err }, {
            status: STATUSCODE.SEVERERROR
        })
    }
}