import { useState } from "react";

export const useChat = () => {
   const [toogleInputView, setToogleInputView] = useState(false);
   const [openAddContact, setOpenAddContact] = useState(false);

   return {
      toogleInputView,
      setToogleInputView,
      openAddContact,
      setOpenAddContact,
   };
};
