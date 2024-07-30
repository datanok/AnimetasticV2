import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    try {
        const res = await fetch('https://api.jikan.moe/v4/top/anime?filter=airing&sfw=true');
        const data = await res.json();
        
        return new NextResponse(JSON.stringify(data), { status: 200 });
    } catch (error) {
        return new NextResponse("Failed to fetch top animes", { status: 500 });
    }
};
