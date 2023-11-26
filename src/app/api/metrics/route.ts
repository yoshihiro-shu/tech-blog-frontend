import { NextRequest } from 'next/server';
import register from '@/src/lib/prometheus';

/**
 * Retrieves metrics and returns a Response object with the metrics data and appropriate headers.
 *
 * @param {NextRequest} _ - The request object.
 * @return {Promise<Response>} A promise that resolves to a Response object containing the metrics data.
 */
export async function GET(_: NextRequest) {
  const metrics = await register.metrics();
  // NextResponse cannot set headers.So use Response
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