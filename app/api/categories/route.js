import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, slug, description, imageUrl, isActive } =
      await request.json();
    const newCategory = await db.category.create({
      data: { title, slug, description, imageUrl, isActive },
    });
    console.log(newCategory);
    return NextResponse.json(newCategory);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Create Category Fail",
        error,
      },
      { status: 500 }
    );
  }
}
