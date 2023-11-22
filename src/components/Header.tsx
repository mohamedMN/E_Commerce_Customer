// Header.tsx
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import "../styles/header.css";

const Header: React.FC = () => {
  return (
    <header>
      <div
        style={{
          backgroundColor: "black",
          textAlign: "center",
          color: "white",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "5%",
          }}
        ></div>
        <p>
          Black Friday Sale For All Products And Free Express Delivery - 50%
          OFF!
          <span>
            <a href="">ShopNow</a>
          </span>
        </p>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="ENGLISH" />
          </SelectTrigger>
          <SelectContent className="text-black dark:text-white">
            <SelectItem value="french">FRENCH</SelectItem>
            <SelectItem value="english" className="">
              ENGLISH
            </SelectItem>
            <SelectItem value="arabic" className="">
              ARABIC
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </header>
  );
};

export default Header;
