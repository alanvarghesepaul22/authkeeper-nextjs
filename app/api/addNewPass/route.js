import { NextResponse } from "next/server";
import { connection } from "@/utils/db";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Password from "@/models/Password";
import { decrypt, encrypt } from "@/utils/encryptionHandler";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  try {
    const { siteName, username, password } = await req.json();
    const hashedPassword = encrypt(password);

    await connection();
    await Password.create({
      siteName,
      email,
      username,
      password: hashedPassword.password,
      iv: hashedPassword.iv,
    });

    return NextResponse.json({ message: "Password added." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while submission." },
      { status: 500 }
    );
  }
}

export const GET = async (req) => {
  try {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;

    await connection();

    const passwords = await Password.find({ email });

    return new NextResponse(JSON.stringify(passwords), { status: 200 });
  } catch (error) {
    return new NextResponse("Error fetching passwords: " + error, {
      status: 500,
    });
  }
};

export const DELETE = async (req) => {
  const id = req.nextUrl.searchParams.get("id");
  try {
    await connection();
    await Password.findByIdAndDelete(id);
    const updatedPapers = await Password.find();
    return new NextResponse(JSON.stringify(updatedPapers), { status: 200 });
  } catch (error) {
    return new NextResponse("Error deleting paper: ", error, { status: 500 });
  }
};
