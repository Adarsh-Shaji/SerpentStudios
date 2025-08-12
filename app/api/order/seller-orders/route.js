import connectDB from "@/config/db"
import authSeller from "@/lib/authSeller"
import Address from "@/models/Address"
import Order from "@/models/Order"
import { NextResponse } from "next/server"

const { getAuth } = require("@clerk/nextjs/server")

export async function GET(request){

    try {
        
        const {userId} = getAuth(request)

        const isSeller = await authSeller(userId)

        if(!isSeller){
            return NextResponse.json({succes:false, message:'not Authorized'})
        }

        await connectDB()

        Address.length

        const orders = await Order.find({}).populate('address items.product')

        return NextResponse.json({success:true, orders})



    } catch (error) {

        return NextResponse.json({success:true, message:error.message})
        
    }
    
}