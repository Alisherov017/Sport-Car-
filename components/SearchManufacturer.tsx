"use client";

import { SearchManufacturerProps } from "@/types";
import { Combobox } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";

const SearchManufacturer = ({
  setManufacturer,
  manufacturer,
}: SearchManufacturerProps) => {
  const [query, SetQuery] = useState("");

  return (
    <div className="search-manufacturer ">
      <Combobox>
        <div className="relative w-full ">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacture__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => SetQuery(e.target.value)}
          />
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
