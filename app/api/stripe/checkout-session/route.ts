import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import Stripe from "stripe";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
    const {price , oneTime} = await req.json();


    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: "2022-11-15",
    });

    const session = await getServerSession(authOptions);

    if (!session?.user) {
        return NextResponse.json(
            {
                error: {
                    code: "no-access",
                    message: "You are not signed in.",
                },
            },
            { status: 401 }
        );
    }

    const customer = await stripe.customers.create();

    const invoiceItem = await stripe.invoiceItems.create({
        price: oneTime,
        customer: customer.id,
    })
    
    const checkoutSession = await stripe.checkout.sessions.create({
        client_reference_id: session.user.id, 
        mode: "subscription",
        customer: customer.id,
        line_items: [
            {
                price: price,
                quantity: 1,
            },
        ],
        success_url: process.env.NEXT_PUBLIC_WEBSITE_URL + `?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: process.env.NEXT_PUBLIC_WEBSITE_URL + `/plans`,
        subscription_data: {
            metadata: {
                payingUserId: session.user.id,
            },
        },
    });

    if (!checkoutSession.url) {
        return NextResponse.json(
            {
                error: {
                    code: "stripe-error",
                    message: "Could not create checkout session",
                },
            },
            { status: 500 }
        );
    }

    return NextResponse.json({ session: checkoutSession }, { status: 200 });
}