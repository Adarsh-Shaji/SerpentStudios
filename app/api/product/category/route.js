
import connectDB from "@/config/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const categoryParam = searchParams.get("category");

    if (!categoryParam) {
      return NextResponse.json({
        success: false,
        message: "Category is required",
      });
    }

    const category = decodeURIComponent(categoryParam).trim(); // remove extra spaces

    // Case-insensitive and trimmed search
    const products = await Product.find({
      category: { $regex: `^${category}$`, $options: "i" }
    });

    return NextResponse.json({ success: true, products });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
