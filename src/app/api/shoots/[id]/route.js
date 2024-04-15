/** @format */

import connectDB from '@/config/database';
import Shoots from '@/models/Shoots';

// GET /api/shoots/[id]

export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const shoot = await Shoots.findById(params.id);
    if (!shoot) return new Response('ugh you fucked up again', { status: 404 });

    return new Response(JSON.stringify(shoot), {
      status: 200,
    });
  } catch (error) {
    return new Response('Something went wrong', { status: 500 });
  }
};
