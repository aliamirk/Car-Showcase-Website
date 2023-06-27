"use client";

import { manufacturers } from "../../constants";
import { useState } from "react";
import Image from "next/image";
import { SearchManufacturerProps } from "../../types";
import { Combobox, Transition } from "@headlessui/react";
import { Fragment } from "react";

const SearchManufacturer = (props: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");

  const { manufacturer: Manufacturerr } = props;

  // sets query to input value
  const QueryChangeHandler = (event: any) => {
    setQuery(event.target.value);
  };

  // display manufacurers names in the combobox based on the query or input typed by the user
  // returns manufacturers starting from the alphabets typed by the user
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) => 
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );


  return (
    // Container
    <div className="search-manufacturer">
      <Combobox value={props.manufacturer} onChange={props.setManufacturer} >
        <div className="relative w-full">
          {/* Logo Image */}
          {/* Button for the combobox. Click on the icon to see the complete dropdown */}
          <Combobox.Button className="absolute top-[14px] ">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              alt="Car Logo"
              className="ml-4"
            />
          </Combobox.Button>

          {/* Placeholder text */}
          {/* Input field for searching */}
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(Manufacturerr: string) => Manufacturerr}
            onChange={QueryChangeHandler}
          />

          {/* Transition for displaying the options */}
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
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
                  {({ selected, active }) => (
                    <Fragment>
                      <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                          </span>
                        ) : null}
                    </Fragment>
                  )}

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
