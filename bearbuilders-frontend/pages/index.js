import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function index() {
  return (
    <div className="home">
      <Link href="/marketplace">
        <a>
          <Image src="/img/landing.png" width={650} height={150} />
        </a>
      </Link>
    </div>
  );
}
