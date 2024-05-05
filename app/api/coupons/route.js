import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, conponCode, expiryDate } = await request.json();
    const newCoupon = { title, conponCode, expiryDate };
    console.log(newCoupon);
    return NextResponse.json(newCoupon);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Create Coupon Fail",
        error,
      },
      { status: 500 }
    );
  }
}
