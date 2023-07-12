"use client";

import Link from "next/link";
import { Button } from "@/components";
import { useAuth } from "@/hooks";
import { usePathname } from "next/navigation";
import { Navbar, Typography } from "@/external";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function AppNav() {
  const { signOut } = useAuth();
  const pathname = usePathname();

  const isMyListsPage = pathname === "/lists";
  const isCreateListPage = pathname === "/lists/new-list";

  return (
    <Navbar className="sticky flex justify-between text-primary-800 items-center rounded-none py-1">
      <Link href="/">
        <Typography variant="h5">GoCart</Typography>
      </Link>
      <nav className="flex flex-row-reverse">
        <Button className="flex-initial" onClick={signOut}>
          Sign Out
        </Button>
        {!isMyListsPage && (
          <Link href="/lists">
            <Button className="flex-initial">My Lists</Button>
          </Link>
        )}
        {!isCreateListPage && (
          <Link href="/lists/new-list">
            <Button className="flex-initial">+ New List</Button>
          </Link>
        )}
      </nav>
    </Navbar>
  );
}
