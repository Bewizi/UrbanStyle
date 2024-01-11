import React from "react";
import { FC, ReactNode } from "react";

export enum Side {
  Row,
  Column,
}

interface flexProp {
  iswrap?: boolean;
  className?: string;
  side?: Side;
  children: ReactNode;
}

export const Flex: FC<flexProp> = ({ ...props }) => {
  return (
    <div
      className={`flex ${props.iswrap ? "flex-wrap" : ""}
 ${props.side !== Side.Row ? "flex-col" : "flex-row"}
 ${props.className ?? ""}`}
    >
      {props.children}
    </div>
  );
};
