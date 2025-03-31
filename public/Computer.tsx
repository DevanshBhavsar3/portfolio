"use client";

import { useEffect, useState } from "react";

export default function Computer() {
  const [currentCommand, setCurrentCommand] = useState<string>("login");

  const commands = [
    "npm start",
    "git push origin main",
    "docker-compose up",
    "sudo apt update",
    "ssh user@server",
    "yarn build",
    "ping google.com",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCommand(commands[Math.floor(Math.random() * commands.length)]);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <pre className="h-fit w-fit text-[7px] text-neutral-400">
      {`

                       .,,uod8B8bou,,..
              ..,uod8BBBBBBBBBBBBBBBBRPFT?l!i:..
         ,=m8BBBBBBBBBBBBBBBRPFT?!|||||||||||||||||
         !...:!TVBBBRPFT||||||||||!!^^""'       ||||
         !.......:!?|||||!!^^""'                ||||
         !.........||||                         ||||
         !.........||||  ## ${currentCommand.padEnd(20)}||||
         !.........||||                         ||||
         !.........||||                         ||||
         !.........||||                         ||||
         !.........||||                         ||||
         \`.........||||                         ||||
         \`.........||||                        ,||||
          .;.......||||                  _.-!!|||||
   .,uodWBBBBb.....||||         _.-!!|||||||||!:'
!YBBBBBBBBBBBBBBb..!|||:..-!!|||||||!iof68BBBBBb....
!..YBBBBBBBBBBBBBBb!!||||||||!iof68BBBBBBRPFT?!::   \`.
!....YBBBBBBBBBBBBBBbaaitf68BBBBBBRPFT?!:::::::::     \`.
!......YBBBBBBBBBBBBBBBBBBBRPFT?!::::::;:!^"\`;:::       \`.
!........YBBBBBBBBBBRPFT?!::::::::::^''...::::::;         iBBbo.
\`..........YBRPFT?!::::::::::::::::::::::::;iof68bo.      WBBBBbo.
  \`..........:::::::::::::::::::::::;iof688888888888b.     \`YBBBP^'
    \`........::::::::::::::::;iof688888888888888888888b.     \`
      \`......:::::::::;iof688888888888888888888888888888b.
        \`....:::;iof688888888888888888888888888888888899fT!
          \`..::!8888888888888888888888888888888899fT|!^"'
            \`' !!988888888888888888888888899fT|!^"'
                \`!!8888888888888888899fT|!^"'
                  \`!988888888899fT|!^"'
                    \`!9899fT|!^"'
                      \`!^"'
                      `}
    </pre>
  );
}
