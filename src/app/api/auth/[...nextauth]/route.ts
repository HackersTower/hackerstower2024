import {NextRequest,NextResponse} from "next/server"
export async function Post(req: NextRequest){
    return NextResponse.json({message:"Hii"})
}