import { NextRequest, NextResponse } from 'next/server';
import register from '@/src/lib/prometheus';

export async function GET(_: NextRequest) {
  const res = new Response();
  res.headers.set('Content-Type', register.contentType);
  return res
}

export async function POST(_: NextRequest) {
}

export async function PUT(_: NextRequest) {
}

export async function DELETE(_: NextRequest) {
}