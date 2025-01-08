"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import dynamic from "next/dynamic";
import React, { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { DialogProps } from "@/type/type";

const Modal: React.FC<DialogProps> = ({ isOpen, onClose, children }) => {
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="flex h-full w-full items-center justify-center bg-black/80 backdrop-blur-md"
            onClick={handleBackdropClick}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3, type: "spring" }}
              className="relative mx-4 flex items-center justify-center rounded border bg-background p-8 text-text shadow-lg dark:bg-black dark:text-white"
            >
              <button
                onClick={onClose}
                className="absolute right-1 top-1 flex aspect-square text-center text-4xl"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {children}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

Modal.displayName = "Modal";

export default dynamic(() => Promise.resolve(React.memo(Modal)), {
  ssr: false,
});
