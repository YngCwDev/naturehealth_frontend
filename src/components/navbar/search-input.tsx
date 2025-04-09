import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

const SearchInput = () => {
  return (
    <div className="flex items-center relative w-full">
      <Input type="Search" placeholder="O que procura?" className="border-2 border-gray-400" />

      <Button
        variant={"ghost"}
        type="submit"
        size={"icon"}
        title="Search"
        className="px-8 absolute right-0  cursor-pointer"
      >
        <Search className="size-6"/>
      </Button>
      <Button
        variant={"green"}
        type="submit"
        size={"icon"}
        title="Search"
        className="px-8 absolute right-0   cursor-pointer hidden  md:flex"
      >
        <Search className="size-6"/>
      </Button>
    </div>
  );
};

export default SearchInput;
