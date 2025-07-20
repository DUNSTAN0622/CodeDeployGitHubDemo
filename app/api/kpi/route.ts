import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    revenue: 126400,
    orders: 231,
    traffic: 87500,
    conversion: 2.14,
  });
}
