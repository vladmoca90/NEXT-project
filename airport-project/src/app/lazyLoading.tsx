"use client";
import Image from "next/image";
import loadingImg from "../../../public/images/loading.gif";

export default function Loading() {
    return (
        <div>
            <Image height={100} width={100} alt="Loading" src={loadingImg} />
        </div>
    );
}