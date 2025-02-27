"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppBreadcrumb() {
  const pathname = usePathname();
  const pathNames = pathname.split("/").filter((path) => path);
  console.log(pathNames);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathNames.map((path, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathNames.length - 1;
          return (
            <BreadcrumbItem key={path}>
              {isLast ? (
                <BreadcrumbPage>{path}</BreadcrumbPage>
              ) : (
                <>
                  <BreadcrumbLink asChild>
                    <Link href={href}>
                      {path === "dashboard" ? "dashboard" : path}
                    </Link>
                  </BreadcrumbLink>
                  <BreadcrumbSeparator />
                </>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
