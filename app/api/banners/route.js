import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Create Banner Fail",
        error,
      },
      { status: 500 }
    );
  }
}
