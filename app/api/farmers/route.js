import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      code,
      name,
      phone,
      email,
      physicalAddress,
      contactPerson,
      contactPersonPhone,
      terms,
      notes,
      isActive,
    } = await request.json();
    const newFarmer = await db.market.create({
      data: {
        code,
        name,
        phone,
        email,
        physicalAddress,
        contactPerson,
        contactPersonPhone,
        terms,
        notes,
        isActive,
      },
    });
    console.log(newFarmer);
    return NextResponse.json(newFarmer);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Create Farmer Fail",
        error,
      },
      { status: 500 }
    );
  }
}
