import { useState } from "react";

// Intern
import { BackgroundLayout } from "$components/Background";
import { Feed } from "$pages/social/Feed";

// Types
import type { FC } from "react";

/**
  Name des aktuellen Navigation-Stacks.
*/
export type NavStack = "feed" | "add-user";

/**
  Social-Page.
*/
export const SocialPage: FC = () => {
  const [ navStack, setNavStack ] = useState<NavStack>("feed");

  return (
    <BackgroundLayout>
      {
        (navStack === "feed") ?
          <Feed setNavStack={setNavStack}/> :
          <></>
      }
    </BackgroundLayout>
  );
};
