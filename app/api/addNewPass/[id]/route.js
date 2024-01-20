import Password from "@/models/Password";
import { connection } from "@/utils/db";
import { NextResponse } from "next/server";

export const PUT = async (req, { params }) => {
  const { id } = params;
  const { siteName, username, password } = await req.json();
  const hashedPassword = encrypt(password);
  await connection();
  await Password.findByIdAndUpdate(id, {
    siteName,
    username,
    password: hashedPassword.password,
    iv: hashedPassword.iv,
  });
  return NextResponse.json({ message: "Password Updated" }, { status: 200 });
};

export const GET = async (req, { params }) => {
  const { id } = params;
  await connection();
  const password = await Password.findOne({ _id: id });
  return new NextResponse(JSON.stringify(password), { status: 200 });
};
