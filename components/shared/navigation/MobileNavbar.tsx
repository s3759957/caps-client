import { FC } from "react";

import { IconPlus } from "@tabler/icons-react";

import { Conversation } from "@/types/Chat";

interface Props {
  selectedConversation: Conversation;
  onNewConversation: () => void;
}

export const MobileNavbar: FC<Props> = ({
  selectedConversation,
  onNewConversation,
}) => {
  return (
    <nav className="flex w-full justify-between bg-[#202123] py-3 px-4">
      <div className="mr-4"></div>

      <div className="max-w-[240px] overflow-hidden text-ellipsis whitespace-nowrap">
        {selectedConversation.name}
      </div>

      <IconPlus
        className="cursor-pointer hover:text-neutral-400 mr-8"
        onClick={onNewConversation}
      />
    </nav>
  );
};
