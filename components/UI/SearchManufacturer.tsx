"use client";

import { manufacturers } from "../../constants";
import { useState } from "react";
import Image from "next/image";
import { SearchManufacturerProps } from "../../types";
import { Combobox, Transition } from "@headlessui/react";
import { Fragment } from "react";

const SearchManufacturer = (props: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");

  const { manufacturer } = props;
  // sets query to input value
  const QueryChangeHandler = (event: any) => {
    setQuery(event.target.value);
  };

  // display manufacurers names in the combobox based on the query or input typed by the user
  // returns manufacturers starting from the alphabets typed by the user
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) => {
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""));
        });

  return (
    // Container
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          {/* Logo Image */}
          <Combobox.Button className="absolute top-[14px] ">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              alt="Car Logo"
              className="ml-4"
            />
          </Combobox.Button>

          {/* Placeolder text */}
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={QueryChangeHandler}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => {
              setQuery("");
            }}
          >

            <Combobox.Options>

              
                {/* Rendering manufactures which match query */}
                {filteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {item}
                  </Combobox.Option>
                ))}
                

            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
