import { NextResponse } from "next/server";
import connectDB from "@/db/mongodb";
import Url from "@/models/url";

export async function POST(request) {
  await connectDB();
  try {
    const { url, shortUrl } = await request.json();
    console.log("URL : " + url, "Short URL : " + shortUrl);
    // check if the short url already exists
    const doc = await Url.findOne({ shortUrl: shortUrl });
    if (doc) {
      return NextResponse.json({ message: "Short URL already exists" });
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
