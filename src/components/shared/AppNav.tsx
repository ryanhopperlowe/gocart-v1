"use client";

import Link from "next/link";
import { useAuth } from "@/hooks";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { routes } from "@/routes";

export function AppNav() {
  const { signOut } = useAuth();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const paths = [
    {
      path: routes.lists(),
      label: "My Lists",
    },
    {
      path: routes.newList(),
      label: "New List",
    },
  ];

  return (
    <nav className="navbar bg-primary px-4">
      <div className="navbar-start">
        <h4 className="text-primary-content">GoCart</h4>
      </div>
      <div className="navbar-end">
        <input
          type="checkbox"
          id="menu-drawer"
          checked={isOpen}
          className="drawer-toggle"
        />
        <i
          className="ri-menu-4-fill text-lg text-primary-content"
          onClick={() => setIsOpen(true)}
        />
        <div className="drawer-side w-full">
          <label
            htmlFor="menu-drawer"
            className="drawer-overlay"
            onClick={() => setIsOpen(false)}
          ></label>
          <ul className="menu w-60 p-4 h-full bg-base-200 text-base-content">
            {paths.map(
              (path) =>
                path.path !== pathname && (
                  <li key={path.label} onClick={() => setIsOpen(false)}>
                    <Link href={path.path}>{path.label}</Link>
                  </li>
                )
            )}
            <li>
              <button onClick={signOut}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
