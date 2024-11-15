import { NextResponse } from "next/server";
import connectDB from "@/db/mongodb";
import AuthUsers from "@/models/authusers";
export async function POST(request) {
  await connectDB();
  try {
    const { email, name } = await request.json();

   
    let userCredentials = await AuthUsers.create({
      email: email,
      name: name,
    });

    return NextResponse.json(userCredentials);
  } catch (error) {
    console.log(error);
    return NextResponse.error(error);
  }
}
