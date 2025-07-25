import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const incidents = await prisma.incident.findMany();
  return NextResponse.json(incidents);
}

