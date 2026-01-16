import { cn, getPriceString } from "@/lib/utils";
import { IndianRupee } from "lucide-react";
import React, { HTMLAttributes } from "react";

export interface PricingProps extends HTMLAttributes<HTMLDivElement> {
  price: number;
  maximum_price?: number;
  styles?: string;
  color?: string;
  isInteger?: boolean;
  typeNum?: boolean;
  per?: string;
}

const Pricing = ({
  price,
  maximum_price,
  typeNum = false,
  per,
  ...props
}: PricingProps) => {
  return (
    <div
      {...props}
      className={cn(
        "flex justify-end items-center gap-1 w-full",
        props.className
      )}
    >
      <React.Fragment>
        <IndianRupee size={18} />
        {getPriceString(price, ("" + price).length > 7, typeNum, per)}
      </React.Fragment>
      {maximum_price
        ? ` to ${getPriceString(
            maximum_price,
            ("" + maximum_price).length > 7
          )}`
        : null}
    </div>
  );
};

export default Pricing;
