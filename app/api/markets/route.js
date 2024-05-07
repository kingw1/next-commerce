import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, slug, description, imageUrl, categoryIds, isActive } =
      await request.json();
    const newMarket = await db.market.create({
      data: { title, slug, description, imageUrl, categoryIds, isActive },
    });
    console.log(newMarket);
    return NextResponse.json(newMarket);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Create Market Fail",
        error,
      },
      { status: 500 }
    );
  }
}
