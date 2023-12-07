import { decrypt } from "@/utils/encryptionHandler";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { password, iv } = await req.json();
    let orgPassword = decrypt({ password: password, iv: iv });

    return new NextResponse(orgPassword, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred."+error },
      { status: 500 }
    );
  }
}
