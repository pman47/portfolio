import { getUserCollection } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const collection = await getUserCollection();
    const data = await collection.findOne({});
    return new NextResponse(JSON.stringify(data), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch user data" }),
      { status: 500 }
    );
  }
}
