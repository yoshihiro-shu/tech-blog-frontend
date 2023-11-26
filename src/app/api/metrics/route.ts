import { NextRequest, NextResponse } from 'next/server';
import register from '@/src/lib/prometheus';

export async function GET(_: NextRequest) {
  const metrics = await register.metrics();
  return new Response(metrics, {
    headers: {
      'Content-Type': register.contentType
    }
  });
}

export async function POST(_: NextRequest) {
}

export async function PUT(_: NextRequest) {
}

export async function DELETE(_: NextRequest) {
}