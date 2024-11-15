import { NextResponse } from "next/server";
import connectDB from "@/db/mongodb";
import Url from "@/models/url";

export async function POST(request) {
  await connectDB();
  try {
    const { url, shortUrl } = await request.json();
    
    // check if the short url and original URL already exists
    const doc = await Url.findOne({ shortUrl: shortUrl });
    const doc2 = await Url.findOne({ originalUrl: url });
    if (doc || doc2) {
      return NextResponse.json(
        {
          message: "Short URL or Original URL already exists",
        },
        { status: 400 }
      );
    } else {
      let urlData = await Url.create({
        originalUrl: url,
        shortUrl: shortUrl,
      });
      return NextResponse.json(urlData);
    }
  } catch (error) {
    console.log(error);
    return NextResponse.error(error);
  }
}

export async function GET(request) {
  await connectDB();
  try {
    const urls = await Url.find({});
    return NextResponse.json(urls);
  } catch (error) {
    console.log(error);
    return NextResponse.error(error);
  }
}
