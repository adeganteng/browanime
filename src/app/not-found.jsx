"use client";

import { FileMagnifyingGlass, House } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-7">
      <div className="flex gap-3 items-center">
        <FileMagnifyingGlass size={44} className="text-color-accent" />
        <h1 className="text-color-accent text-4xl">Halaman Tidak Ditemukan</h1>
      </div>
      <Link className="flex gap-3 items-center text-color-primary hover:text-color-accent" href={"/"}>
        <House size={22} />
        <p>Kembali</p>
      </Link>
    </div>
  );
};

export default Page;
