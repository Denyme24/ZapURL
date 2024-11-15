import { NextResponse } from "next/server";
import connectDB from "@/db/mongodb";
import Url from "@/models/url";

export async function PUT(request) {
  await connectDB();
  try {
    const { shortUrl, url } = await request.json();
    const updateUrl = await Url.findOneAndUpdate(
      { originalUrl: url },
      { shortUrl: shortUrl },
      { new: true }
    );
 
    return NextResponse.json(updateUrl);
  } catch (error) {
    console.log(error);
    return NextResponse.error({ message: "Error updating URL" });
  }
}
export async function GET(request) {
  await connectDB();
  try {
    const urls = await Url.find({});
    return NextResponse.json(urls);
  } catch (error) {
    console.log(error);
    return NextResponse.error({ message: "Error fetching URLs" });
  }
}

export async function DELETE(request) {
  await connectDB();
  try {
    const { shortUrl } = await request.json();
    const deleteUrl = await Url.findOneAndDelete({ shortUrl });
   
    return NextResponse.json(deleteUrl);
  } catch (error) {
    console.log(error);
    return NextResponse.error({ message: "Error deleting URL" });
  }
}
