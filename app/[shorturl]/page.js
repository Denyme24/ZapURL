import { redirect } from "next/navigation";
import connectDB from "@/db/mongodb";
import Url from "@/models/url";

export default async function Page({ params }) {
  const shorturl = (await params).shorturl;
  await connectDB();
  const doc = await Url.findOne({ shortUrl: shorturl });
  if (doc) {
    redirect(doc.originalUrl);
  } else {
    redirect(process.env.NEXT_PUBLIC_HOST);
  }
}
