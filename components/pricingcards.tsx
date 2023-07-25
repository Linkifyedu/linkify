"use client"
import getStripe from "@/app/utils/getStripe";
import { Card, Divider, Button, CardBody, CardHeader, CardFooter } from "@nextui-org/react";
import { useState } from "react";

export default function Pricing(){      
      
        const handleCreateCheckoutSession = async (productId:string, oneTime = "price_1NXGlqEwUQtTxJwaHL4jH4Fr") => {
          const res = await fetch(`/api/stripe/checkout-session`, {
            method: "POST",
            body:JSON.stringify({
              price: productId,
              oneTime: oneTime
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
      
          const checkoutSession = await res.json().then((value) => {
            return value.session;
          });
      
          const stripe = await getStripe();
          const { error } = await stripe!.redirectToCheckout({
            sessionId: checkoutSession.id,
          });
      
          console.warn(error.message);
        };
    
    return (
    <>
        <Card shadow="sm" className="text-black justify-center w-full">
            <CardHeader className="flex flex-col gap-3">
                <h1 className="font-bold text-lg">Base Package</h1>
                <p className="text-small text-gray-500">4 sessions / month</p>
            </CardHeader>
            <CardBody className="flex flex-col gap-3 text-center">
                <h1><span className="font-bold text-4xl">$140</span> <span className="text-gray-500">per session</span></h1>
                <Button onPress={() => {handleCreateCheckoutSession("price_1NWNmXEwUQtTxJwaIhrZERp7")}}  color="primary">Subscribe now</Button>
            </CardBody>
            <Divider/>
            <CardFooter className="flex flex-col-2 px-3">
                <div>
                <h1 className="mb-4 ">Whats included</h1>
                <ul className="justify-start">
                <li className="text-sm mb-3 text-gray-500">✅ 4 sessions per month with a Linkify tutor</li>
                <li className="text-sm mb-3 text-gray-500">✅ Progress tracking</li>
                <li className="text-sm text-gray-500">✅ Student reward system</li>
                </ul>  
                </div>        
                  </CardFooter>
        </Card>

        <Card shadow="sm" className="w-full text-black justify-center">
            <CardHeader className="flex flex-col gap-3">
                <h1 className="font-bold text-lg">Premium Package</h1>
                <p className="text-small text-gray-500">8 sessions / month</p>
            </CardHeader>
            <CardBody className="flex gap-3 justify-center  flex-col text-center">
                <h1><span className="font-bold text-4xl">$240</span> <span className="text-gray-500">per session</span></h1>
                <Button onPress={() => {handleCreateCheckoutSession("price_1NXGZYEwUQtTxJwaAFAeXIqn")}} color="primary">Subscribe now</Button>
            </CardBody>
            <Divider/>
            <CardFooter className="flex flex-col-2 px-3">
                <div>
                <h1 className="mb-4 ">Whats included</h1>
                <ul className="justify-start">
                <li className="text-sm mb-3 text-gray-500">✅ 8 sessions per month with a Linkify tutor</li>
                <li className="text-sm mb-3 text-gray-500">✅ Progress tracking</li>
                <li className="text-sm text-gray-500">✅ Student reward system</li>
                </ul>  
                </div>        
                  </CardFooter>
        </Card>    
        </>
        
    );
}