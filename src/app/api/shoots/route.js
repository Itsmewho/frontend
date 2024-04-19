/** @format */

import connectDB from '@/config/database';
import Shoots from '@/models/Shoots';

// GET /api/shoots
export const GET = async (request) => {
  try {
    await connectDB();

    const shoots = await Shoots.find({});

    return new Response(JSON.stringify(shoots), {
      status: 200,
    });
  } catch (error) {
    return new Response('Something went wrong', { status: 500 });
  }
};
