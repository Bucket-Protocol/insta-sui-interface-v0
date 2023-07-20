import Image from "next/image";
import { useRef, useState } from "react";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Head from "next/head";
import Navbar from "@/components/navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { mockNFTList } from "@/constants/mockNFTList";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  const scrollingRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head>
        <title>Insta Sui</title>
        <meta
          name="description"
          content="Build your own Photo NFT collection with Insta Sui."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        id="main"
        ref={scrollingRef}
        className={cn(
          "relative w-screen h-screen bg-[#F7FBFC] overflow-scroll"
        )}
      >
        <div className="w-full max-w-360 mx-auto">
          <Navbar scrollingRef={scrollingRef} />
          <div className="w-full pt-4 pb-10 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6 mt-32 px-4 lg:px-8 overflow-hidden">
            {mockNFTList.map((nft, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                }}
              >
                <Card className="bg-[#D6E6F2] bg-opacity-80 backdrop-blur-2xl shadow-xl cursor-pointer">
                  <CardHeader>
                    <Image
                      className="rounded-xl"
                      src={"/images/demo.jpeg"}
                      alt="NFT Image"
                      width={300}
                      height={300}
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-[#769FCD]">
                      {nft.title}
                    </CardTitle>
                    <CardDescription className="mt-4 text-[#93c6e5]">
                      {nft.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
