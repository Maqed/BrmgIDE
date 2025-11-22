"use client";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import { Suspense } from "react";

function ChooseLocaleInner() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  function onSelectChange(nextLocale: "ar" | "en") {
    const url = `${pathname}${
      searchParams.toString() ? `?${searchParams.toString()}` : ""
    }`;
    router.push(url, {
      locale: nextLocale,
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Languages />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onSelect={() => {
            onSelectChange("en");
          }}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => {
            onSelectChange("ar");
          }}
        >
          العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ChooseLocale() {
  return (
    <Suspense fallback={<Languages />}>
      <ChooseLocaleInner />
    </Suspense>
  );
}

export default ChooseLocale;
