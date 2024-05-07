import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      title,
      slug,
      imageUrl,
      description,
      sku,
      barcode,
      productPrice,
      salePrice,
      categoryId,
      farmerId,
      tags,
      isActive,
    } = await request.json();
    const newProduct = await db.banner.create({
      data: {
        title,
        slug,
        imageUrl,
        description,
        sku,
        barcode,
        productPrice,
        salePrice,
        categoryId,
        farmerId,
        tags,
        isActive,
      },
    });
    console.log(newProduct);
    return NextResponse.json(newProduct);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Create Product Fail",
        error,
      },
      { status: 500 }
    );
  }
}
