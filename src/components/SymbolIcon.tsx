import React from "react";
import { Icon, IconProps } from "@chakra-ui/react";
import { VscChromeClose, VscCircleLargeOutline } from "react-icons/vsc";
import { Symbol } from "types";

const ICON_PROPS = {
  X: {
    as: VscChromeClose,
    color: "#bae408",
  },
  O: {
    as: VscCircleLargeOutline,
    color: "#ff9e1a",
  },
};

interface SymbolIconProps extends IconProps {
  symbol: Symbol;
}

const SymbolIcon = ({ symbol, ...rest }: SymbolIconProps) => {
  return <Icon {...ICON_PROPS[symbol]} {...rest} />;
};

export default SymbolIcon;
