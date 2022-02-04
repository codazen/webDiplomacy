import * as React from "react";
import { useRef } from "react";
import { Box, Popover } from "@mui/material";

interface WDPopoverProps {
  children: React.ReactNode;
  /**
   *A callback that sets isOpen to false
   */
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void; // A function that sets isOpen to false
  isOpen: boolean;
  /**
   *A component that opens or closes the Popover when clicked
   */
  popoverTrigger: React.ReactNode;
}

const WDPopover: React.FC<WDPopoverProps> = function ({
  children,
  onClose,
  isOpen,
  popoverTrigger,
}) {
  const anchorEl = useRef(null);

  return (
    <Box
      sx={{
        position: "absolute",
      }}
    >
      <Box
        sx={{
          pt: "15px",
        }}
        ref={anchorEl}
      >
        {popoverTrigger}
      </Box>
      <Popover
        anchorEl={anchorEl.current}
        anchorOrigin={{
          horizontal: "left",
          vertical: "center",
        }}
        open={isOpen}
        onClose={onClose}
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            borderRadius: "3px 13px 13px 3px",
            boxShadow: "-5px 4px 6px -4px black",
          },
        }}
        transformOrigin={{
          horizontal: "right",
          vertical: "center",
        }}
      >
        <Box
          sx={{
            mt: "0px",
            position: "relative",
            "&::before": {
              background: "linear-gradient(45deg, transparent 50%, white 50%)",
              content: '""',
              height: 22,
              position: "absolute",
              right: 5,
              top: 10,
              transform: "rotate(45deg)",
              width: 22,
            },
          }}
        />

        <Box
          sx={{
            background: "linear-gradient(to right, white 94%, transparent 6%)",
            m: 0,
            p: "16px 25px 16px 16px",
          }}
        >
          {children}
        </Box>
      </Popover>
    </Box>
  );
};

export default WDPopover;