import { NextResponse } from "next/server";
const url = process.env.API_URL;

export async function GET() {
    
    try {
        if(!url){
            // return NextResponse.json(new Error("API URL not found"));
            return NextResponse.json({
                status: 500,
                statusText: "API URL not found"
            });
        }
        const response = await fetch(`${url}/objects`,{
            cache: "no-cache",
        });
        if(!response.ok){
            return NextResponse.json({
                status: response.status,
                statusText: response.statusText
            });
        }
        const data = await response.json();
        return NextResponse.json(data,{status: response.status});

    } catch (error) {
        return NextResponse.json({
            status: 500,
            statusText: 'Internal Server Error. '+ error,
        });
    }
}