"use client";

import { useState } from "react";
import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { Thread } from "@/components/assistant-ui/thread";
import { ThreadList } from "@/components/assistant-ui/thread-list";
import { Menu, X } from "lucide-react";

export const Assistant = () => {
  const [isThreadListOpen, setIsThreadListOpen] = useState(true);

  const runtime = useChatRuntime({
    api: "/api/chat",
  });

  const toggleThreadList = () => {
    setIsThreadListOpen((prev) => !prev);
  };

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <div
        className={`grid h-dvh ${
          isThreadListOpen
            ? "grid-cols-[auto_1fr] gap-x-2"
            : "grid-cols-1"
        } px-4 py-4`}
      >
        {/* Toggle Button */}
        <button
          onClick={toggleThreadList}
          className="absolute top-6 left-4 z-10 p-2 rounded-md bg-gray-300 hover:bg-gray-400 "
        >
          {isThreadListOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* ThreadList with animation */}
        {isThreadListOpen && (
          <div
            className={`transition-transform duration-300 ease-in-out ${
              isThreadListOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 `}
          >
            <ThreadList />
          </div>
        )}

        {/* Thread */}
        <div
          className={`transition-all duration-300 ${
            isThreadListOpen ? "w-full" : "col-span-full"
          }`}
        >
          <Thread />
        </div>
      </div>
    </AssistantRuntimeProvider>
  );
};














// "use client";

// import { AssistantRuntimeProvider } from "@assistant-ui/react";
// import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
// import { Thread } from "@/components/assistant-ui/thread";
// import { ThreadList } from "@/components/assistant-ui/thread-list";

// export const Assistant = () => {
//   const runtime = useChatRuntime({
//     api: "/api/chat",
//   });

//   return (
//     <AssistantRuntimeProvider runtime={runtime}>
//       <div className="grid h-dvh grid-cols-[200px_1fr] gap-x-2 px-4 py-4">
//         <ThreadList />
//         <Thread />
//       </div>
//     </AssistantRuntimeProvider>
//   );
// };
